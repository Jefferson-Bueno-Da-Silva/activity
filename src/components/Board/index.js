import React, { useState } from 'react';
import produce from 'immer';
//Components
import List from '../List';
// Styles
import {Container} from './styles';
// Context
import BoardContext from './context';
// Services
import firebaseServices from '../../services/FirebaseServices';

export default function Board({ data }) {
  // quando lists mudar, muda o valor do contexto e todos os ligares se atualizam
  // Nota: utilizar isto para atualizar as informações no banco
  const [ lists, setLists ] = useState(data);

  function refresh(){
    console.log("REFRESH");
    const db = new firebaseServices();
    db.onTodos().on('value', (snapshot) => {
      const data = snapshot.val();
      setLists(data);
    });
  }

  //trocar os index na api;
  function move(fromList, toList, from, to){
    setLists(produce(lists, draft => {
      // Pega informações do card arrastado;
      const dragged =  draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }));
  }

  function moveToList(fromList, hoverIndex, from ){
    
    setLists(produce(lists, draft => {
      // Pega informações do card arrastado;
      const dragged =  draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[hoverIndex].cards.splice(from, 0, dragged);
    }));
  }

  return (
    <BoardContext.Provider value={{ lists , move, moveToList, refresh }} >
      <Container>
        {lists.map( (list, index) => <List key={list.title} index={index} data={list} /> )}
      </Container>
    </BoardContext.Provider>
  );
}
