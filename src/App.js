import React from 'react';
import './components/Form'
import Mensagem from './components/Form';
import styled from 'styled-components';
import { findByLabelText } from '@testing-library/react';


const ContainerMensagens = styled.div`
width: 600px;
border: 1px solid black;
height: 750px;
display: flex;
flex-direction: column-reverse;
align-items:center;
`

const ContainerInputs = styled.div`
display: flex;
width: 100%
`

const ContainerApp = styled.div`
display:flex;
align-items:center;
justify-content:center;
`





class App extends React.Component{
  render(){
    return (
      <ContainerApp>
        <ContainerMensagens>
          <ContainerInputs><Mensagem /></ContainerInputs>
        </ContainerMensagens>
      </ContainerApp>
    );
  }
}

export default App;
