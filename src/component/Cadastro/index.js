import React, {Component} from 'react';
import './index.css';

export default class Cadastro extends Component {
  state = {
  	textosDosInputs: {},
    nomesDosInputs: []
  };

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.inputsRef = {};

  	for(let contadorDeInputs = 0; contadorDeInputs < this.props.children.length; contadorDeInputs++){
  	  const input = this.props.children[contadorDeInputs].props.name;

      this.inputsRef[contadorDeInputs] = React.createRef();
  	  this.state.textosDosInputs[input] = '';
      this.state.nomesDosInputs[contadorDeInputs] = input;
  	}
  }	

  estaFazendoUmCadastroVazio(textos){
    let nomesDoObjeto = Object.getOwnPropertyNames(textos);
    let quantidadeDeTextos = nomesDoObjeto.length;

    for(let contador = 0; contador < quantidadeDeTextos; contador++){
      let nomeDoObjetoAtual = nomesDoObjeto[contador];
      if(!textos[nomeDoObjetoAtual]){
        return true;
      }
    }

    return false;
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

    if(this.estaFazendoUmCadastroVazio(this.state.textosDosInputs)){
      alert('Você está fazendo um Cadastro vazio');
      return;
    }

    let dadosDosInputs = JSON.parse(JSON.stringify(this.state.textosDosInputs));

    this.props.aoCadastrar(dadosDosInputs);
    this.resetarTodosOsTextos();
  }

  aoMudarOTexto(evento, nameDoInput){
  	let textoDoInput = evento.target.value;
  	let textosDosInputs = this.state.textosDosInputs;
  	textosDosInputs[nameDoInput] = textoDoInput;

  	this.setState({ textosDosInputs });
  }

  onKeyDown(evento) {
    console.log(evento.keyCode);

    const indexDoInput = Number(evento.target.getAttribute('index'));
    const indexDoInputProximo = indexDoInput + 1;
    const indexDoInputAnterior = indexDoInput - 1;
    
    if(evento.keyCode === 38 && this.state.nomesDosInputs[indexDoInputAnterior]) {
      this.inputsRef[indexDoInputAnterior].current.focus();
    }

    if(evento.keyCode === 40 && this.state.nomesDosInputs[indexDoInputProximo]) {
      this.inputsRef[indexDoInputProximo].current.focus();
    }
  }

  render() {
    return(
  	  <div className="cadastroContainer">
  	  	<form className="cadastroForm" onSubmit={this.onSubmit}>
  	      { this.props.children.map((input, index) => <input ref={this.inputsRef[index]} key={input.props.name} index={index} type={input.props.type} placeholder={input.props.placeholder}
  	      									    onChange={(evt) => this.aoMudarOTexto(evt, input.props.name)}  value={this.state.textosDosInputs[input.props.name]} onKeyDown={this.onKeyDown} />) }
          <button>Cadastrar</button>
  	    </form>
  	  </div>
  	);
  }
}