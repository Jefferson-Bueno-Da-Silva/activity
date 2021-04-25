import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  top: ${props => props.top};
  right: ${props => props.right};
  height: 40px;
  width: 80px;
  border: 2px solid #3b5bfd;
  border-radius: 15px;
  font-size: 15px;
  cursor: pointer;

  :hover{
    background-color: #3b5bfd;
    border-color: #FFF;
    color: #FFF;
  }
  @media only screen and (max-width: 600px) {
    right: ${props => props.mediaRight };
  }
`;
