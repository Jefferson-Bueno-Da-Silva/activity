import React from 'react'
import { useDrag } from "react-dnd";

import {Container, Label} from './styles'

export default function Card({ data }) {
  
  // Coleta informações sobre o Drag, saber se o usuario esta arrastando o item no momento ou não
  // isDragging: monitor.didDrop() para saber quando o item acabou de ser arrastado.

  const [{isDragging}, dragRef] = useDrag({
    type: "CARD",
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  if(!data){ return(<>Carregando Conteúdo</>);}
  else{
    return (
      <Container ref={dragRef} isDragging={isDragging} >
        <header>
          { data.labels && data.labels.map(label => <Label key={label} color={label} /> )}
        </header>
        <p>
          {data.content}
        </p>
        { data.user && <img src={data.user} alt="" /> }
        
      </Container>
    )
  }
}