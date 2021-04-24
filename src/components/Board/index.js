import React, { useState } from 'react';
import produce from 'immer';

import BoardContext from './context';

import List from '../List';

import {Container} from './styles';

export default function Board({ data }) {
  // quando lists mudar, muda o valor do contexto e todos os ligares se atualizam
  // Nota: utilizar isto para atualizar as informações no banco
  const [ lists, setLists ] = useState(data)

  //trocar os index na api;
  function move(fromList, toList, from, to){
    setLists(produce(lists, draft => {
      // Pega informações do card arrastado;
      const dragged =  draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }));
  }

  return (
    <BoardContext.Provider value={{ lists, move }} >
      <Container>
        {lists.map( (list, index) => <List key={list.title} index={index} data={list} /> )}
      </Container>
    </BoardContext.Provider>
  );
}
