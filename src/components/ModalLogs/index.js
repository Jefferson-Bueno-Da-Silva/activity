import React, { useEffect, useState } from 'react'
// Icons
import { MdClose } from 'react-icons/md';
// Firebase Database
import firebaseServices from '../../services/FirebaseServices';
// Styles
import {Container, ModalDiv} from './styles';

export default function ModalLogs({ id="modal", onClose = () => {} }){
  // valores do text area
  const [ logValue, setLogsValue ] = useState(false);
  
  // roda ao abrir o modal;
  useEffect(() => {
    async function fetchLogs(){
      const db = new firebaseServices();
      let logs = await db.getLogs();
      setLogsValue(logs);
    }
    fetchLogs();
  }, []);

  // Função para formatar o texto
  function showLogs(){
    if(logValue){
      let key = (Object.keys( logValue ));
      let strLogs = ``;
      key.map( (key) => {
        console.log(logValue[key]);
        strLogs +=
(`O usuario: ${logValue[key].email}
alterou o card: "${logValue[key].card.title}"
de: "${logValue[key].fromName}"
para:"${logValue[key].toName}"
${Date(logValue[key].created_at)}\n\n`);
        return key;
      } )
      return strLogs;

    }

  }
  // clicar fora para sair
  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <ModalDiv id={id} onClick={handleOutsideClick} >
      <Container>
        <header>
          <button className="close" onClick={onClose} >
            <MdClose size={24} color="#FFF" />
          </button>
        </header>
        <textarea readOnly name="logs" className="textLogs" value={ showLogs() }/>
      </Container>
    </ModalDiv>
  );
}
