import React, { useContext } from 'react'
import { useDrop } from "react-dnd";

import BoardContext from '../Board/context';

import { MdAdd } from 'react-icons/md'

import Card from '../Card';

import {Container} from './styles'

export default function List( { data, index: listIndex } ) {
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

    }
  });

  return (
    <Container ref={dropRef} >
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button" >
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
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