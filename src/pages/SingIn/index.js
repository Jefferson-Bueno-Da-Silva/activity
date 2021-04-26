import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

// Auth
import firebase from '../../configs/firebaseConfigs';
// Context
import { AuthContext } from '../../Auth/AuthContext';

// Styles
import { Container } from './style';
import GlobalStyles from '../../styles/global';

// Components
import Header from "../../components/Header/";

export const SingIn = withRouter( ({ history }) => {
  // Estado do erro no login
  const [error , setError] = useState(false);

  // Autenticação Firebase
  const loginFunc = useCallback(
    async (event) => {
      // Não da reload na pagina
      event.preventDefault();
      const { email, senha } = event.target.elements;
      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, senha.value);
        history.push('/home');
      }catch (error){
        console.log(error.message);
        setError(true);
      }
    },
    [history],
  );
  
  // Compartilha as informações do usuario com os outros componentes
  const { usuario } = useContext(AuthContext);
  // se o usuario for autenticado
  if(usuario){
    return <Redirect to="/home" />
  }
  // Se não apresenta o erro
  return (
    <>
      <Header/>
      <Container>
        <form className="inputSingIn" onSubmit={ loginFunc } >
          {error ? <p style={{ color: "red" }}>Email ou Senha inválidos</p> : ""}
          <input type="email" name="email" placeholder="Username" required/>
          <input type="password" name="senha" placeholder="Password" required/>
          <input type="submit" />
          
        </form>
        <GlobalStyles/>
      </Container>
    </>
  );
} );
