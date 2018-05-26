import React, {Component} from 'react';
import Cadastro from '../../component/Cadastro';
import BancoDeDados from '../../class/BancoDeDados';

export default class CadastroDeLivros extends Component {
  bancoDeDados = new BancoDeDados;

  constructor(props){
    super(props);
    this.cadastrarLivro = this.cadastrarLivro.bind(this);
  }

  cadastrarLivro(dadosDoLivro){
    this.bancoDeDados.adicionarLivro(dadosDoLivro);
  }

  render() {
    return(
      <Cadastro aoCadastrar={this.cadastrarLivro}>
        <input type="text" placeholder="Nome" name="nome" />
        <input type="text" placeholder="Livros Disponíveis" name="disponiveis" />
        <input type="text" placeholder="Livros Emprestados" name="emprestados" />
      </Cadastro>
  	);
  }
}