import React from 'react';

// Styles
import { Container } from './style';
import GlobalStyles from '../../styles/global';

// Components
import Header from "../../components/Header/";

export default function SingIn() {
  return (
    <>
      <Header/>
      <Container>
        
        <div className="inputSingIn">
          <input type="text" name="username" placeholder="Username" required/>
          <input type="password" name="password" placeholder="Password" required/>
          <input type="submit" value="Login"/>
        </div>
        <GlobalStyles/>
      </Container>
    </>
  );
}
