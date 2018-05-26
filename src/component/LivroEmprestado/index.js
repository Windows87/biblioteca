import React, {Component} from 'react';
import RowContainer from '../RowContainer';
import BancoDeDados from '../../class/BancoDeDados';
import './index.css';

export default class LivroEmprestado extends Component {
  bancoDeDados = new BancoDeDados;

  constructor(props){
  	super(props);
  	this.removerEmprestimo = this.removerEmprestimo.bind(this);
  }  

  diaDeEntrega(){
  	if(this.props.emprestimoAtrasado){
      return(
      	<span className="emprestimoAtrasado">{this.props.diaDeEntrega + ' de ' + this.props.mesDeEntrega}</span>
      );
  	}

  	return (<span>{this.props.diaDeEntrega + ' de ' + this.props.mesDeEntrega}</span>);
  }

  obterDadosDeUmLivro(nomeDoLivro){
    let dadosDosLivros = this.bancoDeDados.obterListaDeLivros();
    let dadosDoLivroSelecionado = {};

    for(let contadorDeLivros = 0; contadorDeLivros < dadosDosLivros.length; contadorDeLivros++){
      if(dadosDosLivros[contadorDeLivros].nome == nomeDoLivro){
        dadosDoLivroSelecionado = dadosDosLivros[contadorDeLivros];
        break;
      }
    }

    return dadosDoLivroSelecionado;
  }

  editarQuantidadeDeUmLivro(nomeDoLivro){
    let dadosDoLivroSelecionado = this.obterDadosDeUmLivro(nomeDoLivro);

    let quantidadeDisponivelDoLivro = parseInt(dadosDoLivroSelecionado.disponiveis) + 1;
    let quantidadeEmprestadaDoLivro = parseInt(dadosDoLivroSelecionado.emprestados) - 1;

    this.bancoDeDados.atualizarLivros('disponiveis', quantidadeDisponivelDoLivro, nomeDoLivro);
    this.bancoDeDados.atualizarLivros('emprestados', quantidadeEmprestadaDoLivro, nomeDoLivro);
  }

  removerEmprestimo(){
  	this.bancoDeDados.removerEmprestimoDeLivro(parseInt(this.props.id));
    this.editarQuantidadeDeUmLivro(this.props.nomeDoLivro);
  	this.props.aoRemover();
  }

  render(){
    return(
      <RowContainer>
      	<div className="nomeDoAluno">{this.props.nomeDoAluno}</div>
      	<div className="nomeDoLivro">{this.props.nomeDoLivro}</div>
      	<span>{this.props.codigoDoLivro}</span>
      	{this.diaDeEntrega()}
      	<span onClick={this.removerEmprestimo}>Remover</span>
      </RowContainer>
    );  
  }
}