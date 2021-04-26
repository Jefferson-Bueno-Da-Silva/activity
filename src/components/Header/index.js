import React from 'react'
// Icons
import { MdAssignmentTurnedIn } from 'react-icons/md'
// Styles
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <MdAssignmentTurnedIn size="25px" className="iconHeader"/>
      <h1>Activity</h1>
    </Container>
  )
}
