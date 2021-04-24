import React, { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

import api from "./services/firebaseApi";

function App() {
  const [ todo, setTodo ] = useState(false);
  
  let getTodos = async () => {
    let response = await api.get();
    setTodo(response.data);
  }
  useEffect(() => {
    getTodos();
  }, [])
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
        <Board Todo={todo} />
        <GlobalStyle />
      </DndProvider>
    );
  }
}

export default App;
