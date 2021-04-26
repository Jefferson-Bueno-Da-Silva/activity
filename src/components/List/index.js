import React, { useContext, useState } from 'react'
import { useDrop } from "react-dnd";
// CONTEXTS
import BoardContext from '../Board/context';
// ICONS
import { MdAdd } from 'react-icons/md'
// STYLES
import {Container} from './styles'
// COMPONENTS
import Card from '../Card';
import Modal from '../Modal';

export default function List( { data, index: listIndex } ) {
  // controle do modal para adicionar cards
  const [ isModalVisible, setModalVisible ] = useState(false);
  // chamado do componente pai
  const { moveToList } = useContext(BoardContext);
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

      // acabou
      const isOver = monitor.isOver({ shallow: false });

      //Não faz nada se arrastar em cima do mesmo item;
      if(draggedListIndex === targetListIndex ){
        return;
      }

      if(isOver){
        return;
      }

      moveToList( draggedListIndex, targetListIndex, draggedIndex );
      item.listIndex = targetListIndex;      
    }
  });

  return (
    <Container ref={dropRef} >
      
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button onClick={ () => setModalVisible(true) } >
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
        { isModalVisible && <Modal onClose={() => setModalVisible(false) } /> }
      </header>

      <ul>
        { data.cards && data.cards.map( (card, index) => (
            <Card 
              key={card && card.id } 
              listIndex={card && listIndex}
              index={card && index} 
              data={card && card} 
            />)
          ) 
        }
      </ul>
    </Container>
  );
}