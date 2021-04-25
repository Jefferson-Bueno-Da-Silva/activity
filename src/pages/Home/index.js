import React, { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

// Styles
import GlobalStyle from '../../styles/global';
import {Button} from '../../styles/Button';
//Components
import Header from '../../components/Header';
import Board from '../../components/Board';
import SingOut from '../../components/SingOut';

// Services
import firebaseServices from "../../services/FirebaseServices";
import ModalLogs from '../../components/ModalLogs';

export default function Home() {
  const [ todo, setTodo ] = useState(false);
  const [ isModalVisible, setModalVisible ] = useState(false);
  
  useEffect(() => {
    const db = new firebaseServices();
    db.onTodos().on('value', (snapshot) => {
    const data = snapshot.val();
      if(data){
        data.map( (value, index) =>{
          if(value.cards === undefined){
            return value.cards = [];
          }
          return value;
        } )
        setTodo(data);
      }
    });
  }, []);

  if(!todo){
    return(
      <>
      <Header/>
      <div>Carregando Conteúdo</div>
      <GlobalStyle />
      </>
    );
  }else{
    return (      
      <DndProvider  backend={HTML5Backend} >
        <Header/>
        <SingOut/>
        <Button  top="20px" right="110px" mediaRight="90px" onClick={ () => setModalVisible(true) } >Logs</Button>
        { isModalVisible && < ModalLogs onClose={() => setModalVisible(false) } /> }
        <Board data={todo} />
        <GlobalStyle />
      </DndProvider>
    );
  }
}
