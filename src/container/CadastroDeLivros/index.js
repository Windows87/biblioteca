import React, {Component} from 'react';
import Cadastro from '../../component/Cadastro';
import BancoDeDados from '../../class/BancoDeDados';

export default class CadastroDeLivros extends Component {
  bancoDeDados = new BancoDeDados();

  constructor(props){
    super(props);
    this.cadastrarLivro = this.cadastrarLivro.bind(this);
  }

  cadastrarLivro(dadosDoLivro){
    dadosDoLivro.emprestados = 0;
    
    if(this.bancoDeDados.oLivroJaFoiCadastrado(dadosDoLivro.nome)){
      alert('O Livro já foi Cadastrado');
      return;
    }

    this.bancoDeDados.adicionarLivro(dadosDoLivro);
  }

  render() {
    return(
      <Cadastro aoCadastrar={this.cadastrarLivro}>
        <input type="text" placeholder="Nome" name="nome" />
        <input type="text" placeholder="Prateleira" name="prateleira" />
        <input type="text" placeholder="Livros Disponíveis" name="disponiveis" />
      </Cadastro>
  	);
  }
}