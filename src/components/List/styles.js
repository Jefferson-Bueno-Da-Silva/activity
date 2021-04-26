import styled from "styled-components";

export const Container = styled.div`
  /* Componente principal */
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  /* pega a partir da segunda div */
  & + div {
    border-left: 1px solid rgba(0,0,0,0.5);
  }

  /* Cabeçalho */
  header {
    display: flex;
    justify-content : space-between;
    align-items: center;
    height: 42px;
    /* titulo */
    h2{
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
  /* lista */
  ul{
    margin-top: 30px;
  }

`;