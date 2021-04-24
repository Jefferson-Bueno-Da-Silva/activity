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

export const Form = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export const Container = styled.div`

  background: #FFF;
  color: #000;
  width: 90%;
  height: 90%;
  border-radius: 20px;
  cursor: normal;
  display:flex;
  flex-direction:column;

  header {
    display: flex;
    justify-content : center;
    align-items: center;
    height: 42px;
    width: 100%

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul{
    margin-top: 30px;
  }

  .close{
    position: absolute;
    top: 7%;
    right: 7%;
  }
  .save{
    position: absolute;
    bottom: 7%;
    right: 7%;
    width: 100px;
    height: 42px;
  }
`;
