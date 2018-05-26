import React, {Component} from 'react';
import './index.css';

export default class EmprestimoSelect extends Component {
  constructor(props){
  	super(props);
  	this.onChange = this.onChange.bind(this);
  }

  onChange(evento){
  	let numeroDoOptionClicado = evento.nativeEvent.target.selectedIndex;
  	let valorDoOption = evento.nativeEvent.target[numeroDoOptionClicado].value;

  	this.props.aoSelecionar(valorDoOption);
  }

  render(){
  	return(
  	  <select onChange={this.onChange} value={this.props.valorDoSelect}>
  	  	<option value="">Selecionar...</option>
  	    {this.props.dados.map((dado) => <option key={dado.nome} value={dado.nome}>{dado.labelDoOption}</option>)}
  	  </select>
  	);
  }
}