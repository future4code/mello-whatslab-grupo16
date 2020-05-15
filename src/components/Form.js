import React from 'react'

class Mensagem extends React.Component {
  state = {
    valorInputUsuario: "",
    valorInputMensagem: ""
  }

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
    //Falta adicionar usuario e msg na lista

    this.setState({
        
        //Limpar o campo da mensagem
        valorInputMensagem: ""
    })
  }

  render(){
    //Falta Adicionar a lista-> usuario: mensagem



    return(
        <div>
            <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
            placeholder={"Usuário"}
            />
            <input
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