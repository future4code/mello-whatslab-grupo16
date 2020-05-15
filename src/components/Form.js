import React from 'react'
import styled from 'styled-components'

const InputTexto = styled.input`
width: 380px;
`
const ContainerConversa = styled.div`
margin-left: 10px;
`

class Mensagem extends React.Component {
  state = {

    mensagens: [

    {      
      usuario: "",
      texto:""
    },

    ],
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  onChangeUsuario = event => {
    this.setState({
        valorInputUsuario: event.target.value
    });
  }

  onChangeMensagem = event => {
    this.setState({
        valorInputMensagem: event.target.value
    });
  }

  enviaMensagem = () => {

   const novaMensagem = {
     usuario: this.state.valorInputUsuario  + ":",
     texto: this.state.valorInputMensagem
   };

   const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
        mensagens: novasMensagens,
        valorInputMensagem: ""  //Limpar o campo da mensagem
    })
  }

  render() {

  const listaDeMensagens = this.state.mensagens.map((mensagem) => {
    return(
      <p>{mensagem.usuario} {mensagem.texto}</p>
      );
    });



    return(
        <div>
            <ContainerConversa>{listaDeMensagens}</ContainerConversa>

            <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
            placeholder={"Usuário"}
            />
            <InputTexto
            value={this.state.valorInputMensagem}
            onChange={this.onChangeMensagem}
            placeholder={"Mensagem"}
            />
            <button onClick={this.enviaMensagem}>Enviar</button>
        </div>
    );
  }
}

export default Mensagem;