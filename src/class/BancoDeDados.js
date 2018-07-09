import Banco from './Banco';

function pesquisaPorPrateleira(textoParaProcurar) {
  return textoParaProcurar.toLowerCase().split('prateleira').length === 2;
}

function pesquisaPorSerie(textoParaProcurar) {
  return textoParaProcurar.toLowerCase().split('serie').length === 2;
}

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

  oAlunoJaFoiCadastrado(aluno){
    const resposta = this.banco.oDadoJaExiste('alunos', 'nome', aluno);
    return resposta;       
  }

  oLivroJaFoiCadastrado(livro){
    const resposta = this.banco.oDadoJaExiste('livros', 'nome', livro);
    return resposta;       
  }

  obterTodosOsDados(){
    const todosOsDados = this.banco.adquirirTodosOsDados();
    return todosOsDados;
  }

  obterListaDeAlunos(){
  	const listaDeAlunos = this.banco.adquirirDados('alunos');
  	return listaDeAlunos;
  }

  obterListaDeLivros(){
  	const listaDeLivros = this.banco.adquirirDados('livros');
  	return listaDeLivros;
  }

  obterListaDeLivrosEmprestados(){
    const listaDeLivrosEmprestados = this.banco.adquirirDados('livros-emprestados');
    return listaDeLivrosEmprestados;
  }

  obterListaDeAlunosPorProcura(textoParaProcurar){
    if(pesquisaPorSerie(textoParaProcurar)){
      const serie = textoParaProcurar.toLowerCase().split('serie')[1].replace(' ', '');
      const listaDeAlunos = this.banco.adquirirDadosPorProcura('alunos', 'serie', serie, true);
      return listaDeAlunos;
    }

  	const listaDeAlunos = this.banco.adquirirDadosPorProcura('alunos', 'nome', textoParaProcurar);
  	return listaDeAlunos;  	
  }

  obterListaDeLivrosPorProcura(textoParaProcurar){
    if(pesquisaPorPrateleira(textoParaProcurar)){
      const prateleira = textoParaProcurar.toLowerCase().split('prateleira')[1].replace(' ', '');
  	  const listaDeLivros = this.banco.adquirirDadosPorProcura('livros', 'prateleira', prateleira, true);
      return listaDeLivros; 
    }
    
    const listaDeLivros = this.banco.adquirirDadosPorProcura('livros', 'nome', textoParaProcurar);
  	return listaDeLivros;	
  }

  obterListaDeEmprestimosPorProcura(textoParaProcurar){
    const listaDeEmprestimos = this.banco.adquirirDadosPorProcura('livros-emprestados', 'nomeDoAluno', textoParaProcurar);
    return listaDeEmprestimos;   
  }

  atualizarAlunos(nomeDaParteParaEditar, novoValor, nomeDoAluno){
    this.banco.editarDados('alunos', nomeDaParteParaEditar, novoValor, 'nome', nomeDoAluno);
  }

  atualizarLivros(nomeDaParteParaEditar, novoValor, nomeDoLivro){
    this.banco.editarDados('livros', nomeDaParteParaEditar, novoValor, 'nome', nomeDoLivro);
  }

  removerAluno(nomeDoAluno){
    this.banco.removerDados('alunos', 'nome', nomeDoAluno);
  }

  removerLivro(nomeDoLivro){
    this.banco.removerDados('livros', 'nome', nomeDoLivro);
  }

  removerEmprestimoDeLivro(idDoEmprestimo){
    this.banco.removerDados('livros-emprestados', 'id', idDoEmprestimo);
  }

  obterNumeroDeLivros() {
    const listaDeLivros = this.obterListaDeLivros();
    return listaDeLivros.length;
  }

  obterNumeroTotalDeLivros() {
    const listaDeLivros = this.obterListaDeLivros();
    let numeroDeLivrosTotais = 0;

    for(let contador = 0; contador < listaDeLivros.length; contador++){
      const livroAtual = listaDeLivros[contador];
      numeroDeLivrosTotais += Number(livroAtual.disponiveis);
      numeroDeLivrosTotais += Number(livroAtual.emprestados);
    }

    return numeroDeLivrosTotais;
  }

  obterNumeroDeLivrosEmprestados() {
    const listaDeLivrosEmprestados = this.obterListaDeLivrosEmprestados();
    return listaDeLivrosEmprestados.length;
  }

  obterNumeroDeAlunos() {
    const listaDeAlunos = this.obterListaDeAlunos();
    return listaDeAlunos.length;
  }
}