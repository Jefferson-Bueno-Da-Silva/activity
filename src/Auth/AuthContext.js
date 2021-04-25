import React, { createContext, useState, useEffect } from 'react';
import firebase from '../configs/firebaseConfigs';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  const [ usuario, setUsuario ] = useState(null);
  const [ aguardando, setAguardando ] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUsuario(user);
      setAguardando(false);
    });
  }, []);

  if(aguardando){
    return (<> Carregando ... </>);  
  }

  return (
    <AuthContext.Provider value={{usuario}}>{ children }</AuthContext.Provider> 
  );
}