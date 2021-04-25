import React, { useState, useContext, useEffect } from 'react'
import { MdClose } from 'react-icons/md';
// CONTEXTS
import BoardContext from '../Board/context';
// Styles
import {Container, ModalDiv, Form} from './styles';
// SERVICES
import firebaseServices from "../../services/FirebaseServices";

export default function Modal({ id="modal", onClose = () => {} }){
  const [title, setTitle] = useState({
    title: "",
    description: "",
    user: {
      name: "",
      url: "",
    },
  });
  const [ users, setUsers ] = useState();

  useEffect(() => {
    async function fetchData(){
      const db = new firebaseServices();
      let user = await db.getUsers();
      setUsers(JSON.parse(JSON.stringify(user)));
    }
    fetchData();
  }, []);

  const { refresh } = useContext(BoardContext);

  const handleOnChange = (e) => {
    const state = Object.assign({}, title);
    const campo = e.target.id;
    if(campo === "user"){
      users.forEach( (value, index) => {
        if(value.name === e.target.value){
          state[campo].name = value.name
          state[campo].url = value.url
        }
      });
    }else{
      state[campo] = e.target.value;
    }
    setTitle(state);
  }
  const createTodoSync = () => {
    const db = new firebaseServices();
    db.creatTodo(title, users);
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
          
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Titulo</label>
            </div>
            <div className="col-75">
              <input className="textInput" type="text" id="title" onChange={ handleOnChange } />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">descrição</label>
            </div>
            <div className="col-75">
              <input className="textInput" type="text" id="description" onChange={ handleOnChange } />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="user">usuário responsável</label>
            </div>
            <div className="col-75">
              <select id="user" name="user" onChange={ handleOnChange } defaultValue="123">

                <option id="user" key="0" value="123"></option>
                { !!users 
                && 
                users.map( (value, index) => (
                  <option 
                    id="user" 
                    key={value.id} 
                    value={value ? value.name: ""}
                  > 
                  {value ? value.name: ""}

                </option>) ) }
              </select>
            </div>
          </div>
        

          <button className="save" onClick={ createTodoSync } > Save </button>
          <button className="cancel" onClick={onClose} > Cancel </button>
        </Form>
        
        
        

      </Container>
    </ModalDiv>
  );
}
