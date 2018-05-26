import React, {Component} from 'react';
import Cadastro from '../../component/Cadastro';
import EmprestimoSelect from '../../component/EmprestimoSelect';
import BancoDeDados from '../../class/BancoDeDados';
import './index.css';

export default class EmprestimoDeLivros extends Component {
  bancoDeDados = new BancoDeDados;

  state = {
  	dadosDosAlunos: [],
  	dadosDosLivros: [],
  	nomeDoAlunoSelecionado: '',
  	nomeDoLivroSelecionado: '',
  	codigoDoLivro: '',
  	diasEmprestados: 0
  };

  constructor(props){
  	super(props);

  	this.aoSelecionarOAluno = this.aoSelecionarOAluno.bind(this);
  	this.aoSelecionarOLivro = this.aoSelecionarOLivro.bind(this);
  	this.mudarDiasEmprestados = this.mudarDiasEmprestados.bind(this);
  	this.mudarCodigoDoLivro = this.mudarCodigoDoLivro.bind(this);
  	this.emprestarLivro = this.emprestarLivro.bind(this);

  	this.pegarTodosDadosDosAlunos();
  	this.pegarTodosDadosDosLivros();
  }

  pegarTodosDadosDosAlunos(){
  	let dadosDosAlunos = this.bancoDeDados.obterListaDeAlunos();
  	for(let contadorDeAlunos = 0; contadorDeAlunos < dadosDosAlunos.length; contadorDeAlunos++){
  	  let dadoDoAluno = dadosDosAlunos[contadorDeAlunos];
  	  dadosDosAlunos[contadorDeAlunos].labelDoOption = dadoDoAluno.nome + ' - ' + dadoDoAluno.serie + 'º' + dadoDoAluno.turma;
  	}

  	this.state.dadosDosAlunos = dadosDosAlunos;
  }

  pegarTodosDadosDosLivros(){
  	let dadosDosLivros = this.bancoDeDados.obterListaDeLivros();
  	for(let contadorDeLivros = 0; contadorDeLivros < dadosDosLivros.length; contadorDeLivros++){
  	  let dadoDoLivro = dadosDosLivros[contadorDeLivros];
  	  dadosDosLivros[contadorDeLivros].labelDoOption = dadoDoLivro.nome;
  	}

  	this.state.dadosDosLivros = dadosDosLivros;
  }

  obterDadosDeUmLivro(nomeDoLivro){
    let dadosDoLivroSelecionado = {};

    for(let contadorDeLivros = 0; contadorDeLivros < this.state.dadosDosLivros.length; contadorDeLivros++){
      if(this.state.dadosDosLivros[contadorDeLivros].nome == nomeDoLivro){
        dadosDoLivroSelecionado = this.state.dadosDosLivros[contadorDeLivros];
        break;
      }
    }

    return dadosDoLivroSelecionado;
  }

  editarQuantidadeDeUmLivro(nomeDoLivro){
    let dadosDoLivroSelecionado = this.obterDadosDeUmLivro(nomeDoLivro);

    let quantidadeDisponivelDoLivro = parseInt(dadosDoLivroSelecionado.disponiveis) - 1;
    let quantidadeEmprestadaDoLivro = parseInt(dadosDoLivroSelecionado.emprestados) + 1;

    this.bancoDeDados.atualizarLivros('disponiveis', quantidadeDisponivelDoLivro, nomeDoLivro);
    this.bancoDeDados.atualizarLivros('emprestados', quantidadeEmprestadaDoLivro, nomeDoLivro);
  }

  aoSelecionarOAluno(nomeDoAlunoSelecionado){
  	this.setState({ nomeDoAlunoSelecionado });
  }

  aoSelecionarOLivro(nomeDoLivroSelecionado){
  	this.setState({ nomeDoLivroSelecionado });
  }

  mudarDiasEmprestados(evento){
  	if(!parseInt(evento.target.value)){
  	  this.setState({ diasEmprestados: 0 });
  	  return;
  	}

  	let diasEmprestados = parseInt(evento.target.value);
  	this.setState({ diasEmprestados });  	
  }

  mudarCodigoDoLivro(evento){
  	let codigoDoLivro = evento.target.value;
  	this.setState({ codigoDoLivro });  	
  }

  obterOId(){
    let todosOsLivrosEmprestados = this.bancoDeDados.obterListaDeLivrosEmprestados();
    let quantosLivrosEstaoEmprestados = todosOsLivrosEmprestados.length;

    if(!quantosLivrosEstaoEmprestados){
      return 0;
    }

    let ultimoId = parseInt(todosOsLivrosEmprestados[quantosLivrosEstaoEmprestados - 1].id);
    let novoId = ++ultimoId;

    return novoId;
  }

  resetarValorDosInputs(){
  	this.setState({
  	  nomeDoAlunoSelecionado: '',
  	  nomeDoLivroSelecionado: '',
  	  codigoDoLivro: '',
  	  diasEmprestados: 0
  	});
  }

  emprestarLivro(){
  	let dataAtual = new Date;
  	let dataDeEntrega = new Date(dataAtual.setTime( dataAtual.getTime() + this.state.diasEmprestados * 86400000 ));
    let diaDeEntrega = dataDeEntrega.getDate();
    let mesDeEntrega = dataDeEntrega.getMonth() + 1;
    let id = this.obterOId();

  	this.bancoDeDados.adicionarLivroEmprestado({
      id: id,
  	  nomeDoLivro: this.state.nomeDoLivroSelecionado,
  	  nomeDoAluno: this.state.nomeDoAlunoSelecionado,
  	  codigoDoLivro: this.state.codigoDoLivro,
  	  diaDeEntrega: diaDeEntrega,
      mesDeEntrega: mesDeEntrega,
      emprestimoAtrasado: false
  	});

    this.editarQuantidadeDeUmLivro(this.state.nomeDoLivroSelecionado);
  	this.resetarValorDosInputs();
  }

  render(){
    return(
  	  <div className="emprestimoContainer">
  	  	<EmprestimoSelect dados={this.state.dadosDosAlunos} valorDoSelect={this.state.nomeDoAlunoSelecionado} aoSelecionar={this.aoSelecionarOAluno} />
  	  	<EmprestimoSelect dados={this.state.dadosDosLivros} valorDoSelect={this.state.nomeDoLivroSelecionado} aoSelecionar={this.aoSelecionarOLivro} />
  	  	<input type="text" placeholder="Código do Livro" value={this.state.codigoDoLivro} onChange={this.mudarCodigoDoLivro} />
  	  	<input type="text" placeholder="Dias Emprestados" value={this.state.diasEmprestados} onChange={this.mudarDiasEmprestados} />
  	  	<button onClick={this.emprestarLivro}>Emprestar</button>
  	  </div>
  	);
  }
}