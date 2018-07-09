import React, {Component} from 'react';
import './index.css';

function chegouAoFimDaLista(lista) {
  return lista.clientHeight + lista.scrollTop === lista.scrollHeight;
}

export default class Lista extends Component {
  state = {
  	elementoBotaoProcurar: this.props.children[0],
  	itensDaLista: this.props.children[1],
    itemFinalDaLista: 30
  }

  constructor(props) {
  	super(props);
  	this.onScroll = this.onScroll.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { children } = newProps;
    const itensDaLista = children[1];
    this.setState({ itensDaLista, itemFinalDaLista: 30 });
  }

  onScroll(evento) {
  	const lista = evento.target;
  	if(chegouAoFimDaLista(lista)) {
  	  let { itemFinalDaLista } = this.state;
  	  itemFinalDaLista += 30;
  	  this.setState({ itemFinalDaLista });
  	}
  }

  itens() {
  	const itensArray = [];
  	const {itensDaLista, itemFinalDaLista} = this.state;

  	for(let contador = 0; (contador < itemFinalDaLista); contador++){
  	  itensArray.push(itensDaLista[contador]);
  	}

  	return itensArray;
  }

  render(){
    return(
      <div className="listaContainer" onScroll={this.onScroll}>
        {this.state.elementoBotaoProcurar}
        {this.itens()}
      </div>
    );
  }
}