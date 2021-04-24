import React from 'react'

import { MdAssignmentTurnedIn } from 'react-icons/md'

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <MdAssignmentTurnedIn size="25px" className="iconHeader"/>
      <h1>Activity</h1>
    </Container>
  )
}
