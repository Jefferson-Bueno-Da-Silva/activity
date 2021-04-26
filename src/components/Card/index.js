import React, { useRef, useContext, useState } from 'react';
import { useDrag, useDrop } from "react-dnd";
// Icons
import { MdMoreHoriz } from 'react-icons/md'
// Contexto do component pai
import BoardContext from '../Board/context';
// Components
import Modal from '../Modal';
// Styles
import {Container} from './styles'

export default function Card({ data, index, listIndex }) {
  // Controle do modal
  const [ isModalVisible, setModalVisible ] = useState(false);
  const ref = useRef();

  // Buscando o move do contexto
  const { move } = useContext(BoardContext);

  //torna um item "arrastavel" 
  const [{ isDragging }, dragRef] = useDrag({
    item: { index, listIndex, },
    type: "CARD",
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  /**
   * Se eu estiver arrastando um card da metade para baixo de um card:
   * vai depois;
   * Se estiver arrastando da metade para cima:
   * Vai antes;
  */
  const [, dropRef ] = useDrop({
    accept: "CARD",
    // ITEM = CARD QUE ESTA SENDO ARRASTADO, MONITOR = DEVOLVE INFORMAÇÕES SOBRE O QUE ESTA SENDO ARRASTADO.
    hover(item, monitor){
      //lista do item;
      const draggedListIndex = item.listIndex;
      //lista para onde o item vai
      const targetListIndex = listIndex;

      // Item que está sendo carregado;
      const draggedIndex = item.index;
      // Item alvo
      const targetIndex = index;

      // acabou
      const isOver = monitor.isOver({ shallow: false });
      
      //Não faz nada se arrastar em cima do mesmo item;
      if(draggedIndex === targetIndex){
        return;
      }

      // calculo central do card alvo
      // Tamanho do item alvo:
      const targetSize = ref.current.getBoundingClientRect();
      // ponto central
      const targetCenter = ( targetSize.bottom - targetSize.top ) / 2;
      
      // Quanto do item ja foi arrastado
      const draggedOffset = monitor.getClientOffset();
      // Distancia que um item entrou para dentro de outro
      const draggedTop = draggedOffset.y - targetSize.top;

      //Se o card que eu estou arrastando esta antes do alvo
      //Se o card que eu estou arrastando esta depois do alvo
      //Garantem que eu não tente arrastar um item para um index que ele ja 
      if(draggedIndex < targetIndex && draggedTop < targetCenter ){
        return;
      }
      if(draggedIndex > targetIndex && draggedTop > targetCenter ){
        return;
      }

      if(!isOver){
        return;
      }
      
      //faz a movimentação do item no componente principal (pai);
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      //atualiza seu index na tela
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  // acumulando referencias;
  dragRef(dropRef(ref));

  return (
    <>
    {/* da a propriedade "arrastavel" para o item */}
    <Container ref={ref} isDragging={isDragging} >
      <header>
        {/* botão para editar o card */}
        <button className="moreConfigs" onClick={ () => setModalVisible(true) } >
          <MdMoreHoriz size="25px" />
        </button>
      </header>
      {/* informações do banco no card */}
      <h3 className="titleCard">
        {data && data.title}
      </h3>
      <p>
        { data && data.content}
      </p>
      { data && data.user && data.user.url && <img src={data.user.url} alt="" /> }
      <p>
        { data && data.user && data.user.name && data.user.name }
      </p>
      
    </Container>
    {/* modal para edição do card */}
    { isModalVisible && 
      <Modal 
        initialState={{
          index,
          listIndex,
          title: data && data.title,
          description: data && data.content,
          user:{
            name: data && data.user && data.user.name && data.user.name,
            url: data && data.user && data.user.url
          }
        }}
      
        onClose={() => setModalVisible(false) } 

      /> 
    }
    </>
  )
}