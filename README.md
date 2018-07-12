# Sistema Para Bibliotecas Escolares

Esse sistema para bibliotecas é feito com ReactJS e Electron.

-------------------------------

- O Manual apresenta todo o sistema e como usa-lo, para baixa-lo [Clique Aqui](http://www.mediafire.com/file/5y046q0oy382q12/Manual+do+Sistema+da+Biblioteca.pdf).
- Para baixar o sistema [Clique Aqui](http://www.mediafire.com/file/mma5n5z0a2mea3j/Setup.exe/file).

--------------------------------

## O Sistema apresenta:
 * Cadastro de Alunos
   - Nome
   - Série
   - Turma 
   - Código SIMADE
 * Cadastro de Livros
   - Nome
   - Prateleira
   - Quantidade 
 * Empréstimo de Livros
   - Nome do Aluno (O Aluno deve estar cadastrado)
   - Nome do Livro (O Livro deve estar cadastrado)
   - Código do Livro
   - Dias emprestados
 * Backup
 * Importação de Alunos 
   - Importar alunos usando tabela do Excel
 * Detalhes
   - Número de livros variados
   - Número de livros totais
   - Número de livros emprestados
   - Número de alunos cadastrados

- Ao emprestar um livro, o sistema automaticamente muda a quantidade de livros disponíveis e emprestados
- É possível mudar as informações dos Alunos (série, turma e código) e Livros (prateleira, quantidade disponível e emprestada) após o cadastro dos mesmos.
- Você pode fazer um arquivo de backup (Salvar Backup), que resultará em um arquivo JSON, que você pode realizar um backup, assim, voltando todas as informações que estavam naquele arquivo.

-------------------------------

## Screenshots do Sistema: 

#### Lista de Livros e Alunos
 ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-images/ps1.jpg)

 ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-images/ps2.jpg)

#### Cadastro de Livros e Alunos
 
  ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-images/ps3.jpg)
  
  ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-images/ps4.jpg)
  
#### Empréstimo de Livros
 
  ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-images/ps5.jpg)
  
#### Lista de Empréstimos
 
 ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-images/ps6.jpg)
 
 - Se o dia da entrega do livro estiver atrasado ou for igual ao dia de hoje, a data irá ficar em vermelho.
 - Clicando em remover, o empréstimo é removido da lista e a quantidade de livros disponíveis aumenta e a de emprestados diminui

#### Detalhes

 ![Alt Text](https://github.com/Windows87/biblioteca/raw/master/readme-images/ps7.jpg)
