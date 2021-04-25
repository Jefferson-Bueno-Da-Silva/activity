import React, { useState, useContext } from 'react'
import { MdClose } from 'react-icons/md';
// CONTEXTS
import BoardContext from '../Board/context';
// Styles
import {Container, ModalDiv, Form} from './styles';
// SERVICES
import firebaseServices from "../../services/FirebaseServices";

export default function Modal({ id="modal", onClose = () => {} }){
  const [title, setTitle] = useState("");

  const { refresh } = useContext(BoardContext);

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  }
  const createTodoSync = () => {
    const db = new firebaseServices();
    db.creatTodo(title);
    refresh();
  }
  
  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <ModalDiv id={id} onClick={handleOutsideClick} value={title}  >
      <Container>
        <header>
          <h2>Add Item</h2>
          <button className="close" onClick={onClose} >
            <MdClose size={24} color="#FFF" />
          </button>
        </header>
        
        <Form>
          <input className="textInput" type="text" onChange={ handleOnChange } />
          <button className="save" onClick={ createTodoSync } >Add To-do</button>
        </Form>
        
        
        

      </Container>
    </ModalDiv>
  );
}
