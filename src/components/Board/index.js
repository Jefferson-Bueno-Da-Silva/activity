import React, { useState, useEffect } from 'react';
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
  let [ lists, setLists ] = useState(data);
  let [ isUpdate, setIsUpdate ] = useState(false);
  
  useEffect(() => {
    const db = new firebaseServices();
    db.updateOrder(lists);
    setIsUpdate(false);
  }, [isUpdate]);
  
  function refresh(){
    const db = new firebaseServices();
    db.onTodos().on('value', (snapshot) => {
      const data = snapshot.val();
      setLists(data);
    });
  }

  

  //trocar os index na api;
  function move(fromList, toList, from, to){
    setIsUpdate(true);
    setLists(produce(lists, (draft) => {
      // Pega informações do card arrastado;
      const dragged =  draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }));
  }
  
  function moveToList(fromList, hoverIndex, from ){
    setIsUpdate(true);
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
