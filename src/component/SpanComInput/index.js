import React, {Component} from 'react';
import './index.css';

export default class SpanComInput extends Component {
  state = {
    mostrandoInput: false,
    valorDoInput: this.props.valorDoSpan
  };

  constructor(props) {
  	super(props);
  	this.onSubmit = this.onSubmit.bind(this);
  	this.onChange = this.onChange.bind(this);
  	this.onClick = this.onClick.bind(this);
  }

  onSubmit(evento){
  	evento.preventDefault();
  	this.props.aoAtualizar(this.state.valorDoInput);
    this.setState({ mostrandoInput: false });
  }

  onChange(evento){
  	let valorDoInput = evento.target.value;
  	this.setState({ valorDoInput });
  }

  onClick(){
  	this.setState({ mostrandoInput: true });
  }

  spanOuInput(){
    if(this.state.mostrandoInput){
      return(
      	<form className="formDoSpanComInput" onSubmit={this.onSubmit}>
      	  <input className="inputDoSpanComInput" autoFocus="true" type="text" value={this.state.valorDoInput} onChange={this.onChange} />
      	</form>
      );
    }

    return(
      <span onClick={this.onClick}>{this.state.valorDoInput}</span>
    );
  }

  render(){
    return(
      this.spanOuInput()
  	);
  }
}