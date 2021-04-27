import React, { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

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
  // Estado iniciar do cards
  const [ todo, setTodo ] = useState(false);
  // modal dos logs
  const [ isModalVisible, setModalVisible ] = useState(false);
  const [ isMobile, setIsMobile ] = useState(false);
  // atualiza os cards no primeiro carregamento da tela
  useEffect(() => {
    const db = new firebaseServices();
    db.onTodos().on('value', (snapshot) => {
    const data = snapshot.val();
    // Se tem listas
      if(data){
        // se tem cards
        data.map( (value, index) =>{
          if(value.cards === undefined){
            return value.cards = [];
          }
          return value;
        } )
        // Primero carregamento da pagina os to-do são carregados
        setTodo(data);
      }
    });
    detectMobile();
  }, []);

  function detectMobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
  }

  // =============== DND ================
  // allow horizontal scrolling
  const options = {
    scrollAngleRanges: [{ start: 300 }, { end: 60 }, { start: 120, end: 240 }]
  }

  // Enquanto o todo carrega mostra a mensagem abaixo 
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
      <DndProvider  backend={ isMobile ? TouchBackend : HTML5Backend} >
        <Header/>
        <SingOut/>
        {/* Botam dos logs é um componente de estilo */}
        <Button 
          top="20px" 
          right="110px" 
          mediaRight="90px" 
          onClick={ () => setModalVisible(true) } 
        >Logs</Button>
        {/* Estado do modal */}
        { 
          isModalVisible 
          && 
          < ModalLogs onClose={() => setModalVisible(false) } /> 
        }
        <Board data={todo} />
        <GlobalStyle />
      </DndProvider>
    );
  }
}
