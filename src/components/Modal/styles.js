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
  flex-direction: column;
  flex:1;
  justify-content: center;

  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;

  input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
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

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
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

  header {
    display: flex;
    justify-content : center;
    align-items: center;
    height: 42px;
    width: 100%;

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
    top: 16%;
    right: 12%;
    height: 30px;
    width: 30px
  }
  .save{
    position: absolute;
    bottom: 16%;
    right: 11%;
    width: 100px;
    height: 42px;
    color: #FFF;
  }
  .cancel{
    background-color:#FFF;
    position: absolute;
    bottom: 16%;
    right: 24%;
    width: 100px;
    height: 42px;
    color: #FFF;
    color: #000;
    border: 2px solid #3b5bfd;
  }

  @media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
    .save{
      position: absolute;
      bottom: 16%;
      right: 11%;
      width: 70px;
      height: 42px;
      color: #FFF;
    }
    .cancel{
      background-color:#FFF;
      position: absolute;
      bottom: 16%;
      right: 32%;
      width: 70px;
      height: 42px;
      color: #FFF;
      color: #000;
      border: 2px solid #3b5bfd;
    }
  }
`;
