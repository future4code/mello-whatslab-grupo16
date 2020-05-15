import React from 'react'
import styled from 'styled-components'

const InputTexto = styled.input`
width: 100%;
`
const ContainerConversa = styled.div`
margin-left: 10px;
`
const DivForm = styled.div`
display: flex;
width: 600px;
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
      <p><b>{mensagem.usuario}</b> {mensagem.texto}</p>
      );
    });



    return(
        <div>
            <ContainerConversa>{listaDeMensagens}</ContainerConversa>
          <DivForm>
            <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
            placeholder={"Usuário"}
            />
            <InputTexto
            value={this.state.valorInputMensagem}
            onChange={this.onChangeMensagem}
            placeholder={"Mensagem"}
            onKeyPress={event => {
              if(event.key === 'Enter'){
                this.enviaMensagem()
                }
              }
            }
            />
            <button onClick={this.enviaMensagem}>Enviar</button>
          </DivForm>
        </div>
    );
  }
}

export default Mensagem;