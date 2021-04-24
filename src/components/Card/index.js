import React from 'react'

import {Container, Label} from './styles'

export default function Card({ data }) {
  if(!data){
    return(
      <>
      Carregando Conteúdo
      </>
    );
  }else{
    return (
      <Container>
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