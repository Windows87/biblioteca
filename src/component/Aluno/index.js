import React, {Component} from 'react';
import RowContainer from '../RowContainer';
import SpanComInput from '../SpanComInput';
import BancoDeDados from '../../class/BancoDeDados';
import './index.css';

export default class Aluno extends Component {
  bancoDeDados = new BancoDeDados;

  constructor(props){
    super(props);

    this.atualizarSerie = this.atualizarSerie.bind(this);
    this.atualizarTurma = this.atualizarTurma.bind(this);
  }

  atualizarSerie(valorNovo, alunoParaAtualizar) {
    this.bancoDeDados.atualizarAlunos('serie', valorNovo, alunoParaAtualizar);
  }

  atualizarTurma(valorNovo, alunoParaAtualizar) {
    this.bancoDeDados.atualizarAlunos('turma', valorNovo, alunoParaAtualizar);
  }

  atualizarCodigo(valorNovo, alunoParaAtualizar) {
    this.bancoDeDados.atualizarAlunos('codigo', valorNovo, alunoParaAtualizar);
  }

  render(){
    return(
      <RowContainer>
      	<div className="nomeDoAluno">{this.props.nome}</div>
      	<div className="dadosDoAluno">
          <div className="divSeparada">
            <SpanComInput valorDoSpan={this.props.serie} aoAtualizar={(valorNovo) => this.atualizarSerie(valorNovo, this.props.nome)} />
      	    <span>º</span>
            <SpanComInput valorDoSpan={this.props.turma} aoAtualizar={(valorNovo) => this.atualizarTurma(valorNovo, this.props.nome)} />
          </div>

      	  <SpanComInput valorDoSpan={this.props.codigo} aoAtualizar={(valorNovo) => this.atualizarCodigo(valorNovo, this.props.nome)} />
      	</div>
      </RowContainer>
    );  
  }
}