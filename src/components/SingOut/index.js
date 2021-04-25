import React from 'react';

import AuthServices from '../../services/AuthService';

import {Button} from '../../styles/Button';

export default function SingOut(){
  function Logout(){
    let auth = new AuthServices();
    auth.singOut();
  }
  return(
    <Button top="3%" right="2%" onClick={ () => Logout() } >Sair</Button>
  );
}