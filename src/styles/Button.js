import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  top: ${props => props.top};
  right: ${props => props.right};
  height: 40px;
  width: 80px;
  background-color: #7159c1;
  border-color: #FFF;
  color: #FFF;
  border: 2px solid;
  border-radius: 15px;
  font-size: 15px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  /* #7159c1 */
  :hover{
    background-color: #FFF;
    border-color: #3b5bfd;
    color: #7159c1;
  }
  @media only screen and (max-width: 600px) {
    right: ${props => props.mediaRight };
  }
`;
