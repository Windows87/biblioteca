import React, {Component} from 'react';
import './index.css';
import BancoDeDados from '../../class/BancoDeDados';

export default class Detalhes extends Component {
  bancoDeDados = new BancoDeDados();

  state = {
    livrosVariados: this.bancoDeDados.obterNumeroDeLivros(),
    livrosTotais: this.bancoDeDados.obterNumeroTotalDeLivros(),
    livrosEmprestados: this.bancoDeDados.obterNumeroDeLivrosEmprestados(),
    alunosCadastrados: this.bancoDeDados.obterNumeroDeAlunos()
  }

  constructor(props){
  	super(props);
  }

  render(){
    return(
      <div className="detalhesContainer">
        <div>
          <span>O número de livros variados cadastrados são de </span>
          <b>{this.state.livrosVariados}</b>
        </div>

        <div>
          <span>O número de livros totais cadastrados são de </span>
          <b>{this.state.livrosTotais}</b>
        </div>        

        <div>
          <span>O número de livros emprestados atualmente são de </span>
          <b>{this.state.livrosEmprestados}</b>
        </div> 

        <div>
          <span>O número de alunos cadastrados são de </span>
          <b>{this.state.alunosCadastrados}</b>
        </div>        
      </div>
    );
  }
}