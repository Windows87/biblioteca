import React, {Component} from 'react';
import Cadastro from '../../component/Cadastro';
import BancoDeDados from '../../class/BancoDeDados';

export default class CadastroDeAlunos extends Component {
  bancoDeDados = new BancoDeDados;

  constructor(props){
    super(props);
    this.cadastrarAluno = this.cadastrarAluno.bind(this);
  }

  cadastrarAluno(dadosDoAluno){
    this.bancoDeDados.adicionarAluno(dadosDoAluno);
  }

  render() {
    return(
      <Cadastro aoCadastrar={this.cadastrarAluno}>
        <input type="text" placeholder="Nome" name="nome" />
        <input type="text" placeholder="Série" name="serie" />
        <input type="text" placeholder="Turma" name="turma" />
        <input type="text" placeholder="Código" name="codigo" />
      </Cadastro>
  	);
  }
}