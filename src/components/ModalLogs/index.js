import React from 'react'
import { MdClose } from 'react-icons/md';

// Styles
import {Container, ModalDiv} from './styles';

export default function ModalLogs({ id="modal", onClose = () => {} }){
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
        <textarea readOnly name="logs" className="textLogs" value={"teste"}/>
      </Container>
    </ModalDiv>
  );
}
