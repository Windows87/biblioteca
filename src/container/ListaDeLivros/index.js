import React, {Component} from 'react';
import './index.css';
import Procurar from '../../component/Procurar';
import Lista from '../../component/Lista';
import Livro from '../../component/Livro';
import BancoDeDados from '../../class/BancoDeDados';

export default class ListaDeLivros extends Component {
  bancoDeDados = new BancoDeDados();
  
  state = {
    livros: [],
    textoParaProcurar: ''
  }

  constructor(props) {
    super(props);
    this.procurarLivros = this.procurarLivros.bind(this);
    this.aoRemoverUmLivro = this.aoRemoverUmLivro.bind(this);

    this.obterOsLivros();
  }

  obterOsLivros() {
    let livros = this.bancoDeDados.obterListaDeLivros();
    this.state.livros = livros;
  }

  procurarLivros(textoParaProcurar){
    let livros = this.bancoDeDados.obterListaDeLivrosPorProcura(textoParaProcurar);
    this.setState({ livros, textoParaProcurar });    
  }

  aoRemoverUmLivro() {
    this.procurarLivros(this.state.textoParaProcurar);
  }

  render(){
    return(
      <Lista>
        <Procurar quandoOTextoMudar={this.procurarLivros} value={this.textoParaProcurar} />
        { this.state.livros.map((livro) => <Livro key={livro.nome} nome={livro.nome} prateleira={livro.prateleira} livrosDisponiveis={livro.disponiveis} livrosEmprestados={livro.emprestados} aoRemover={this.aoRemoverUmLivro} />) }
      </Lista>
    );
  }
}