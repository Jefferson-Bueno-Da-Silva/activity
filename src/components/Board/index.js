import React, { useState, useEffect, useContext } from 'react';
import produce from 'immer';
//Components
import List from '../List';
// Styles
import {Container} from './styles';
// Context
import BoardContext from './context';
import {AuthContext} from '../../Auth/AuthContext';
// Services
import firebaseServices from '../../services/FirebaseServices';

export default function Board({ data }) {
  // quando lists mudar, muda o valor do contexto e todos os ligares se atualizam
  // Nota: utilizar isto para atualizar as informações no banco
  let [ lists, setLists ] = useState(data);
  let [ isUpdate, setIsUpdate ] = useState(false);

  //  Usuario co contexto de autenticação
  const { usuario } = useContext(AuthContext);
  
  // Responsável por manter a tela sincronizada com o firebase
  // O update manda as informações de tela para o banco
  // sendo assim o banco sempre esta sincronizado com a tela
  useEffect(() => {
    const db = new firebaseServices();
    db.updateOrder(lists);
    setIsUpdate(false);
  }, [isUpdate]);

  //Salva as ações do log no firebase
  function saveLogs(card, fromName, toName ){
    const db = new firebaseServices();
    db.saveLogs(usuario.email, usuario.uid, card, fromName, toName );
  }
  
  // refresh da pagina
  function refresh(){
    const db = new firebaseServices();
    db.onTodos().on('value', (snapshot) => {

    const data = snapshot.val();

      data.map( (value, index) =>{
        if(value.cards === undefined){
          return value.cards = [];
        }
        return value;
      } )

      setLists(data);
    });
    
  }

  // Faz a movimentação dos cards na tela
  function move(fromList, toList, from, to){
    // Marca o update
    setIsUpdate(true);    
    setLists(produce(lists, (draft) => {
      // Pega informações do card arrastado;
      const dragged =  draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }));
  }
  // Faz a movimentação dos cards entre listas na tela, marca o update
  function moveToList(fromList, hoverIndex, from ){
    // Ações do usuario
    saveLogs(
      lists[fromList].cards[from], 
      lists[fromList].title, 
      lists[hoverIndex].title 
    );
    // Marca o update
    setIsUpdate(true);
    setLists(produce(lists, draft => {
      // Pega informações do card arrastado;
      const dragged =  draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[hoverIndex].cards.splice(from, 0, dragged);
    }));
  }
  // compartilha algumas funções para os filhos do componente.
  return (
    <BoardContext.Provider value={{ lists , move, moveToList, refresh, saveLogs }} >
      <Container>
        {lists.map( (list, index) => <List key={list.title} index={index} data={list} /> )}
      </Container>
    </BoardContext.Provider>
  );
}
