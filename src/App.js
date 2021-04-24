import React, { useState, useEffect } from 'react';
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
      <>
        <Header/>
        <Board Todo={todo} />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
