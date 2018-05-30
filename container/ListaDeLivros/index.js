import React, {Component} from 'react';
import './index.css';
import Procurar from '../../component/Procurar';
import Lista from '../../component/Lista';
import Livro from '../../component/Livro';
import BancoDeDados from '../../class/BancoDeDados';

export default class ListaDeLivros extends Component {
  bancoDeDados = new BancoDeDados;
  
  state = {
    livros: []
  }

  constructor(props) {
    super(props);
    this.procurarLivros = this.procurarLivros.bind(this);

    this.obterOsLivros();
  }

  obterOsLivros() {
    let livros = this.bancoDeDados.obterListaDeLivros();
    this.state.livros = livros;
  }

  procurarLivros(textoParaProcurar){
    let livros = this.bancoDeDados.obterListaDeLivrosPorProcura(textoParaProcurar);
    this.setState({ livros });    
  }

  render(){
    return(
      <Lista>
        <Procurar quandoOTextoMudar={this.procurarLivros} />
        { this.state.livros.map((livro) => <Livro key={livro.nome} nome={livro.nome} livrosDisponiveis={livro.disponiveis} livrosEmprestados={livro.emprestados} />) }
      </Lista>
    );
  }
}