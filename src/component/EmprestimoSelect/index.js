import React, {Component} from 'react';
import './index.css';

export default class EmprestimoSelect extends Component {
  state = {
    dados: this.props.dados,
    dadosFiltrados: this.props.dados,
    textoParaFiltrar: ''
  }

  constructor(props){
  	super(props);
  	this.onChange = this.onChange.bind(this);
    this.filtrarDados = this.filtrarDados.bind(this);
  }

  onChange(evento){
  	let numeroDoOptionClicado = evento.nativeEvent.target.selectedIndex;
  	let valorDoOption = evento.nativeEvent.target[numeroDoOptionClicado].value;

    this.setState({ textoParaFiltrar: valorDoOption });
  	this.props.aoSelecionar(valorDoOption);
  }

  oTextoFazParteDoNome(dado, textoParaFiltrar){
    return dado.nome.toLowerCase().split(textoParaFiltrar.toLowerCase()).length > 1;
  }

  filtrarDados(textoParaFiltrar) {
    const dadosFiltrados = [];

    this.state.dados.map((dado) => {
      if(this.oTextoFazParteDoNome(dado, textoParaFiltrar)){
        dadosFiltrados.push(dado);
      }
    });

    this.setState({ dadosFiltrados, textoParaFiltrar });
  }

  render(){
  	return(
      <div className="emprestimoSelectContainer">
        <select onChange={this.onChange} value={this.props.valorDoSelect}>
          <option value="">Selecionar...</option>
          {this.state.dadosFiltrados.map((dado) => <option key={dado.nome} value={dado.nome}>{dado.labelDoOption}</option>)}
        </select>      
        <input type="text" placeholder={this.props.placeholder} onChange={(texto) => this.filtrarDados(texto.target.value)} value={this.state.textoParaFiltrar} />
      </div>
  	);
  }
}