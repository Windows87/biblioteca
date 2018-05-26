import React, {Component} from 'react';
import RowContainer from '../RowContainer';
import SpanComInput from '../SpanComInput';
import BancoDeDados from '../../class/BancoDeDados';
import './index.css';

export default class Livro extends Component {
  bancoDeDados = new BancoDeDados;

  constructor(props){
    super(props);

    this.atualizarLivrosDisponiveis = this.atualizarLivrosDisponiveis.bind(this);
    this.atualizarLivrosEmprestados = this.atualizarLivrosEmprestados.bind(this);
  }

  atualizarLivrosDisponiveis(valorNovo, livroParaAtualizar) {
  	this.bancoDeDados.atualizarLivros('disponiveis', valorNovo, livroParaAtualizar);
  }

  atualizarLivrosEmprestados(valorNovo, livroParaAtualizar) {
  	this.bancoDeDados.atualizarLivros('emprestados', valorNovo, livroParaAtualizar);
  }

  render(){
    return(
      <RowContainer>
      	<div className="nomeDoLivro">{this.props.nome}</div>
      	<div className="divSeparada">
      	  <SpanComInput valorDoSpan={this.props.livrosDisponiveis} aoAtualizar={(valorNovo) => this.atualizarLivrosDisponiveis(valorNovo, this.props.nome)} />
      	  <span className="textoComPadding">Disponíveis</span>
      	</div>

      	<div className="divSeparada">
      	  <SpanComInput valorDoSpan={this.props.livrosEmprestados} aoAtualizar={(valorNovo) => this.atualizarLivrosEmprestados(valorNovo, this.props.nome)}  />
      	  <span className="textoComPadding">Emprestados</span>
      	</div>
      </RowContainer>
    );  
  }
}