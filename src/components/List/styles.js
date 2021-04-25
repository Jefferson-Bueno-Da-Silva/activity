import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0,0,0,0.5);
  }

  header {
    display: flex;
    justify-content : space-between;
    align-items: center;
    height: 42px;

    h2{
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

    .moreConfigs{
      display: flex;
      position: absolute;
      top: 22%;
      right: 5px;
      width: 40px;
      height: 5px;
      background: transparent;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }

    .moreConfigs:hover{
      background: #3b5bfd;
      height: 10px;
      transition: 0.2s;
      color: rgb(255,255,255);
      border: 1px solid #000;
    }
  }

  ul{
    margin-top: 30px;
  }

`;