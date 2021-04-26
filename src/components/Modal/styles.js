import styled from "styled-components";

export const ModalDiv = styled.div`
  /* componente que preenche toda a tela */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0,0,0,0.8);
`;

export const Form = styled.div`
  /* componente do formulário */
  display: flex;
  flex-direction: column;
  flex: 7;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 20px;
  /* label */
  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }
  /* inputs */
  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }
  input[type=submit]:hover {
    background-color: #45a049;
  }
  /* coluna 1 */
  .col-10 {
    float: left;
    width: 10%;
    margin-top: 6px;
  }
  /* coluna 2 */
  .col-90 {
    float: left;
    width: 90%;
    margin-top: 6px;
  }
`;


export const Container = styled.div`
  /* componente central */
  background: #FFF;
  color: #000;
  width: 80%;
  height: 70%;
  border-radius: 20px;
  cursor: normal;
  display:flex;
  flex-direction:column;
  /* Cabeçalho */
  header {
    display: flex;
    justify-content : center;
    align-items: center;
    height: 42px;
    width: 100%;
    /* Estilo do titulo */
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
    /* estilo do botão */
    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #7159c1;
      border: 0;
      cursor: pointer;
    }
  }
  /* botão fechar */
  .close{
    position: absolute;
    top: 16%;
    right: 12%;
    height: 30px;
    width: 30px
  }
  footer{
    /* botão salvar */
    display: flex;
    flex: 1;
    justify-content: flex-end;

    background-color: #f2f2f2;

    .save{
      width: 100px;
      height: 42px;
      color: #FFF;
      border-radius: 18px;
      background: #7159c1;
      border: 0;
      cursor: pointer;
      margin: 0 1%;
      font-size: 18px;
      font-weight: bold;
    }

    /* botão cancelar */
    .cancel{
      background-color:#FFF;
      width: 100px;
      height: 42px;
      color: #FFF;
      color: #000;
      border: 2px solid #7159c1;   
      border-radius: 18px;
      margin: 0 1%;
      font-size: 15px;
      font-weight: bold;
    }
  }
  /* responsivo */
  @media screen and (max-width: 600px) {
    .col-10, .col-90, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
`;
