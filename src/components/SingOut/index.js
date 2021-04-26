import React from 'react';
// Imposta a classe do Firebase Auth
import AuthServices from '../../services/AuthService';
// Botão estilizado
import {Button} from '../../styles/Button';
// componente para logout do sistema
export default function SingOut(){
  function Logout(){
    let auth = new AuthServices();
    auth.singOut();
  }
  return(
    <Button top="3%" right="2%" onClick={ () => Logout() } >Sair</Button>
  );
}