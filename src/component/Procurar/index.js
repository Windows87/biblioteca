import React, {Component} from 'react';
import './index.css';

export default class Procurar extends Component {
  constructor(props){
    super(props);
    this.aoMudarOTexto = this.aoMudarOTexto.bind(this);
  }

  aoMudarOTexto(evento) {
  	let textoDoInput = evento.target.value;
  	this.props.quandoOTextoMudar(textoDoInput);
  }

  render(){
    return(
      <div className="procurarContainer">
        <form>
          <input type="text" placeholder="Procurar..." className="inputParaProcurar" onChange={this.aoMudarOTexto} />
        </form>
      </div>
    );
  }
}