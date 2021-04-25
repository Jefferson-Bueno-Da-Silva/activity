import React from 'react';

import AuthServices from '../../services/AuthService';

import {Button} from './styles';

export default function SingOut(){
  function Logout(){
    let auth = new AuthServices();
    auth.singOut();
  }
  return(
    <Button onClick={ () => Logout() } >Sair</Button>
  );
}