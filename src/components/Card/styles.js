import styled, { css } from "styled-components";

export const Container = styled.div`

  position: relative;
  background: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;


  header {
    position: absolute;
    top: -22px;
    left: 0;
    width: 100%;
  }

  p{
    font-weight: 500;
    line-height: 20px;
  }

  img{
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  .titleCard{
    width: 100%;
    font-size: 15px;
    margin-bottom: 2%;
  }
  /* ... */
  .moreConfigs{
      display: flex;
      position: absolute;
      top: 22%;
      right: 5px;
      width: 40px;
      height: 10px;
      background: transparent;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }
    /* ... */
    .moreConfigs:hover{
      background: #7159c1;
      color: #FFF;
      border: 2px solid #3b5bfd;
      transition: 0.1s;
    }

  /* Recebe a propriedade de segurar e faz o estilo do item que esta sendo segurado */
  ${props => props.isDragging && css`
    border: 2px dashed rgba(0,0,0,0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }

  ` }


`;