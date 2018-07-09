import React, {Component} from 'react';
import './index.css';
import Procurar from '../../component/Procurar';
import Lista from '../../component/Lista';
import LivroEmprestado from '../../component/LivroEmprestado';
import BancoDeDados from '../../class/BancoDeDados';

export default class ListaDeLivros extends Component {
  mesesPorExtenso = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  bancoDeDados = new BancoDeDados();

  state = {
    livrosEmprestados: []
  }

  constructor(props) {
    super(props);

    this.procurarEmprestimos = this.procurarEmprestimos.bind(this);
    this.aoRemoverEmprestimo = this.aoRemoverEmprestimo.bind(this);

    this.obterOsLivrosEmprestados();
  }

  procurarEmprestimos(textoParaProcurar){
    let livrosEmprestados = this.bancoDeDados.obterListaDeEmprestimosPorProcura(textoParaProcurar);
    
    for(let contadorDeLivrosEmprestados = 0; contadorDeLivrosEmprestados < livrosEmprestados.length; contadorDeLivrosEmprestados++){
      let diaDeEntrega = livrosEmprestados[contadorDeLivrosEmprestados].diaDeEntrega;
      let mesDeEntrega = livrosEmprestados[contadorDeLivrosEmprestados].mesDeEntrega;

      if(this.oEmprestimoEstaAtrasado(diaDeEntrega, mesDeEntrega)){
        livrosEmprestados[contadorDeLivrosEmprestados].emprestimoAtrasado = true;
      }

      livrosEmprestados[contadorDeLivrosEmprestados].mesDeEntrega = this.mesesPorExtenso[mesDeEntrega];
    }

    if(!this.state.livrosEmprestados.length){
      this.state.livrosEmprestados = livrosEmprestados;
      return;
    }

    this.setState({ livrosEmprestados });    
  }

  oEmprestimoEstaAtrasado(diaDeEntrega, mesDeEntrega){
    let dataAtual = new Date();
    let diaAtual = dataAtual.getDate();
    let mesAtual = dataAtual.getMonth() + 1;

    if(mesDeEntrega < mesAtual){
      return true;
    }

    if(mesDeEntrega === mesAtual && diaDeEntrega <= diaAtual){
      return true;
    }

    return false;
  }

  obterOsLivrosEmprestados(){
    let livrosEmprestados = this.bancoDeDados.obterListaDeLivrosEmprestados();
    
    for(let contadorDeLivrosEmprestados = 0; contadorDeLivrosEmprestados < livrosEmprestados.length; contadorDeLivrosEmprestados++){
      let diaDeEntrega = livrosEmprestados[contadorDeLivrosEmprestados].diaDeEntrega;
      let mesDeEntrega = livrosEmprestados[contadorDeLivrosEmprestados].mesDeEntrega;

      if(this.oEmprestimoEstaAtrasado(diaDeEntrega, mesDeEntrega)){
        livrosEmprestados[contadorDeLivrosEmprestados].emprestimoAtrasado = true;
      }

      livrosEmprestados[contadorDeLivrosEmprestados].mesDeEntrega = this.mesesPorExtenso[mesDeEntrega];
    }

    if(!this.state.livrosEmprestados.length){
      this.state.livrosEmprestados = livrosEmprestados;
      return;
    }

    this.setState({ livrosEmprestados });
  }

  aoRemoverEmprestimo(){
    this.obterOsLivrosEmprestados();
  }

  render(){
    return(
      <Lista>
        <Procurar quandoOTextoMudar={this.procurarEmprestimos} />
        { this.state.livrosEmprestados.map((livro) => <LivroEmprestado key={livro.id} nomeDoLivro={livro.nomeDoLivro} id={livro.id}
                                                       nomeDoAluno={livro.nomeDoAluno} diaDeEntrega={livro.diaDeEntrega} mesDeEntrega={livro.mesDeEntrega}
                                                       codigoDoLivro={livro.codigoDoLivro} emprestimoAtrasado={livro.emprestimoAtrasado} aoRemover={this.aoRemoverEmprestimo} />) }
      </Lista>
    );
  }
}