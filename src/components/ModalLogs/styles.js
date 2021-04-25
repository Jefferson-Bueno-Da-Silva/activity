import styled from "styled-components";

export const ModalDiv = styled.div`
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
  
  button {
    width: 42px;
    height: 42px;
    border-radius: 18px;
    background: #3b5bfd;
    border: 0;
    cursor: pointer;
  }

  .close{
    position: absolute;
    top: 16%;
    right: 12%;
    height: 30px;
    width: 30px
  }

  .textLogs{
    resize: none;
    width: 80%;
    height: 80%;
    font-size: 25px;
  }

  @media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
`;
