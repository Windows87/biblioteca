#Sistema Para Bibliotecas Escolares

Esse sistema para bibliotecas é feito com ReactJS e Electron.

-------------------------------

Para instalar basta baixar ou clonar o repositório e instalar usando o instalador em instaladores/Setup.exe. (Windows)

--------------------------------

## O Sistema apresenta:
 * Cadastro de Alunos
   - Nome
   - Série
   - Turma 
   - Código SIMADE
 * Cadastro de Livros
   - Nome
   - Quantidade 
 * Empréstimo de Livros
   - Nome do Aluno (O Aluno deve estar cadastrado)
   - Nome do Livro (O Livro deve estar cadastrado)
   - Código do Livro
   - Dias emprestados
 * Backup


- Ao emprestar um livro, o sistema automaticamente muda a quantidade de livros disponíveis e emprestados
- É possível mudar as informações dos Alunos (série, turma e código) e Livros (quantidade disponível e emprestada) após o cadastro dos mesmos.
- Você pode fazer um arquivo de backup (Salvar Backup), que resultará em um arquivo JSON, que você pode realizar um backup, assim, voltando todas as informações que estavam naquele arquivo.

-------------------------------

## Screenshots do Sistema: 

#### Lista de Livros e Alunos
 ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-imagens/ps1.jpg)

 ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-imagens/ps2.jpg)

 - Para editar as informações (Turma, Série, Livros Disponíveis, etc.) clique na informação desejada (Exemplo: o livro que antes 6 cópias, recebeu mais 1 cópia, ou seja, eu clico no 6) e mudo a informação dele (ou seja, apago o 6 e coloco 7) e depois dou enter para confirmar e para que as alterações sejam feitas.
 
#### Cadastro de Livros e Alunos
 
  ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-imagens/ps4.jpg)
  
  ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-imagens/ps3.jpg)
  
#### Empréstimo de Livros
 
  ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-imagens/ps5.jpg)
  
  - Ao emprestar um livro, a quantidade de livros disponíveis diminui e a de emprestados aumenta
  
#### Lista de Empréstimos
 
 ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-imagens/ps6.jpg)
 
 - Se o dia da entrega do livro estiver atrasado ou for igual ao dia de hoje, a data irá ficar em vermelho.
 - Clicando em remover, o empréstimo é removido da lista e a quantidade de livros disponíveis aumenta e a de emprestados diminui
