import styled from "styled-components";

export const Container = styled.div`
  /* container principal */
  height: 80px;
  padding: 0 30px;
  background-color: #7159c1;
  color: #fff;
  
  display: flex;
  align-items: center;
  justify-content: center;
  /* ícone */
  .iconHeader{
    margin: 5px;
    color: #fff;
  }
  /* responsivo */
  @media only screen and (max-width: 600px) {
    justify-content: right;
  }
`;