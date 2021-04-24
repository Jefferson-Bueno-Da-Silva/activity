import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from "react-dnd";

import BoardContext from '../Board/context';

import {Container, Label} from './styles'

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  // Buscando o move do contexto
  const { move } = useContext(BoardContext);

  //torna um item "arrastavel" 
  const [{ isDragging }, dragRef] = useDrag({
    item: { index, listIndex, },
    type: "CARD",
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
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
      
      //Não faz nada se arrastar em cima do mesmo item;
      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex ){
        return;
      }

      // calculo central do card que recebe o hover
      // Tamanho do item alvo:
      const targetSize = ref.current.getBoundingClientRect();
      // ponto central
      const targetCenter = ( targetSize.bottom - targetSize.top ) / 2;
      
      // Quanto do item eu ja arrastei
      const draggedOffset = monitor.getClientOffset();
      // Distancia que um item entrou para dentro de outro
      const draggedTop = draggedOffset.y - targetSize.top;

      //Se o que eu estou arrastando esta antes do alvo
      //Se o que eu estou arrastando esta depois do alvo
      //Garantem que eu não tente arrastar um item para um index que ele ja 
      if(draggedIndex < targetIndex && draggedTop < targetCenter ){
        return;
      }
      if(draggedIndex > targetIndex && draggedTop > targetCenter ){
        return;
      }
      
      //faz a movimentação do item;
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;

    }
  });

  // acumulando referencias;
  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging} >
      <header>
        { data.labels && data.labels.map(label => <Label key={label} color={label} /> )}
      </header>
      <p>
        {data.content}
      </p>
      { data.user && <img src={data.user} alt="" /> }
      
    </Container>
  )
}