import React, { useCallback, useContext } from 'react';
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

  const loginFunc = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, senha } = event.target.elements;

      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, senha.value);
        history.push('/home');
      }catch (error){
        console.log(error);
      }
    },
    [history],
  );
  
  const { usuario } = useContext(AuthContext);

  if(usuario){
    return <Redirect to="/home" />
  }

  return (
    <>
      <Header/>
      <Container>
        <form className="inputSingIn" onSubmit={ loginFunc } >
          
          <input type="email" name="email" placeholder="Username" required/>
          <input type="password" name="senha" placeholder="Password" required/>
          <input type="submit" />
          
        </form>
        <GlobalStyles/>
      </Container>
    </>
  );
} );
