import styled from "styled-components";

export const Container = styled.div`
  /* Div principal */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Div inputs */
  .inputSingIn{
    position: absolute;
    top: 40%;
    width: 50%;
  }
  /* inputs */
  input,
    .btn {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 4px;
      margin: 5px 0;
      opacity: 0.85;
      display: inline-block;
      font-size: 17px;
      line-height: 20px;
      text-decoration: none;
    }
    input:hover,
    .btn:hover {
      opacity: 1;
    }
    input[type=submit] {
      background-color: #3b5bfd;
      color: white;
      cursor: pointer;
    }
    input[type=submit]:hover {
      background-color: #0059;
    }

    /* responsivo */
    @media screen and (max-width: 650px) {
    .inputSingIn{
      position: absolute;
      top: 40%;
      width: 80%;
    }
  }
`;