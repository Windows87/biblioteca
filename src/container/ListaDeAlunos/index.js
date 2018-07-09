import React, {Component} from 'react';
import './index.css';
import Procurar from '../../component/Procurar';
import Lista from '../../component/Lista';
import Aluno from '../../component/Aluno';
import BancoDeDados from '../../class/BancoDeDados';

export default class ListaDeAlunos extends Component {
  bancoDeDados = new BancoDeDados();

  state = {
    alunos: [],
    textoParaProcurar: ''
  };

  constructor(props) {
    super(props);
    this.procurarAlunos = this.procurarAlunos.bind(this);
    this.aoRemoverUmAluno = this.aoRemoverUmAluno.bind(this);

    this.pegarOsAlunos();
  }

  pegarOsAlunos() {
    let alunos = this.bancoDeDados.obterListaDeAlunos();
    this.state.alunos = alunos;
  }

  procurarAlunos(textoParaProcurar){
    let alunos = this.bancoDeDados.obterListaDeAlunosPorProcura(textoParaProcurar);
    this.setState({ alunos });    
  }

  aoRemoverUmAluno() {
    this.procurarAlunos(this.state.textoParaProcurar);
  }

  render(){
    return(
      <Lista>
        <Procurar quandoOTextoMudar={this.procurarAlunos} value={this.textoParaProcurar} />
        { this.state.alunos.map((aluno) => <Aluno key={aluno.nome + aluno.serie + aluno.turma + aluno.codigo} nome={aluno.nome} codigo={aluno.codigo} serie={aluno.serie} turma={aluno.turma} aoRemover={this.aoRemoverUmAluno} />) }
      </Lista>
    );
  }
}