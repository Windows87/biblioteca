import React, {Component} from 'react';
import './index.css';

export default class Cadastro extends Component {
  state = {
  	textosDosInputs: {}
  };

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  	for(let contadorDeInputs = 0; contadorDeInputs < this.props.children.length; contadorDeInputs++){
  	  let input = this.props.children[contadorDeInputs].props.name;
  	  this.state.textosDosInputs[input] = '';
  	}
  }	

  resetarTodosOsTextos(){
    for(let contadorDeInputs = 0; contadorDeInputs < this.props.children.length; contadorDeInputs++){
      let input = this.props.children[contadorDeInputs].props.name;
      this.state.textosDosInputs[input] = '';
    }

    this.setState({ textosDosInputs: this.state.textosDosInputs });
  }

  onSubmit(evento){
  	evento.preventDefault();
  	this.props.aoCadastrar(this.state.textosDosInputs);
    this.resetarTodosOsTextos();
  }

  aoMudarOTexto(evento, nameDoInput){
  	let textoDoInput = evento.target.value;
  	let textosDosInputs = this.state.textosDosInputs;
  	textosDosInputs[nameDoInput] = textoDoInput;

  	this.setState({ textosDosInputs });
  }

  render() {
    return(
  	  <div className="cadastroContainer">
  	  	<form className="cadastroForm" onSubmit={this.onSubmit}>
  	      { this.props.children.map((input) => <input key={input.props.name} type={input.props.type} placeholder={input.props.placeholder}
  	      									    onChange={(evt) => this.aoMudarOTexto(evt, input.props.name)}  value={this.state.textosDosInputs[input.props.name]} />) }
          <button>Cadastrar</button>
  	    </form>
  	  </div>
  	);
  }
}