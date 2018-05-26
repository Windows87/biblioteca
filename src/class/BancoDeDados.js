import Banco from './Banco';

export default class BancoDeDados {
  banco = new Banco('bancodedados');

  adicionarAluno(aluno){
  	this.banco.inserirDados('alunos', aluno);
  }

  adicionarLivro(livro){
  	this.banco.inserirDados('livros', livro);
  }

  adicionarLivroEmprestado(livro){
    this.banco.inserirDados('livros-emprestados', livro);
  }

  obterTodosOsDados(){
    let todosOsDados = this.banco.adquirirTodosOsDados();
    return todosOsDados;
  }

  obterListaDeAlunos(){
  	let listaDeAlunos = this.banco.adquirirDados('alunos');
  	return listaDeAlunos;
  }

  obterListaDeLivros(){
  	let listaDeLivros = this.banco.adquirirDados('livros');
  	return listaDeLivros;
  }

  obterListaDeLivrosEmprestados(){
    let listaDeLivrosEmprestados = this.banco.adquirirDados('livros-emprestados');
    return listaDeLivrosEmprestados;
  }

  obterListaDeAlunosPorProcura(textoParaProcurar){
  	let listaDeAlunos = this.banco.adquirirDadosPorProcura('alunos', 'nome', textoParaProcurar);
  	return listaDeAlunos;  	
  }

  obterListaDeLivrosPorProcura(textoParaProcurar){
  	let listaDeLivros = this.banco.adquirirDadosPorProcura('livros', 'nome', textoParaProcurar);
  	return listaDeLivros;  	
  }

  obterListaDeEmprestimosPorProcura(textoParaProcurar){
    let listaDeEmprestimos = this.banco.adquirirDadosPorProcura('livros-emprestados', 'nomeDoAluno', textoParaProcurar);
    return listaDeEmprestimos;   
  }

  atualizarAlunos(nomeDaParteParaEditar, novoValor, nomeDoAluno){
    this.banco.editarDados('alunos', nomeDaParteParaEditar, novoValor, 'nome', nomeDoAluno);
  }

  atualizarLivros(nomeDaParteParaEditar, novoValor, nomeDoLivro){
    this.banco.editarDados('livros', nomeDaParteParaEditar, novoValor, 'nome', nomeDoLivro);
  }

  removerEmprestimoDeLivro(idDoEmprestimo){
    this.banco.removerDados('livros-emprestados', 'id', idDoEmprestimo);
  }
}