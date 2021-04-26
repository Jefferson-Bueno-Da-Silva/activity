import styled from "styled-components";

export const ModalDiv = styled.div`
  /* Involve toda a tela */
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

export const Container = styled.div`
  /* container central */
  background: #FFF;
  color: #000;
  width: 80%;
  height: 70%;
  border-radius: 20px;
  cursor: normal;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-color: #ecf1f8;

  /* estilo dos botões do modal */
  button {
    width: 42px;
    height: 42px;
    border-radius: 18px;
    background: #7159c1;
    border: 0;
    cursor: pointer;
  }
  /* botão sair */
  .close{
    position: absolute;
    top: 16%;
    right: 12%;
    height: 30px;
    width: 30px
  }
  /* text area */
  .textLogs{
    resize: none;
    width: 80%;
    height: 80%;
    font-size: 25px;
  }
  /* responsivo */
  @media screen and (max-width: 600px) {
    .col-10, .col-90, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
`;
