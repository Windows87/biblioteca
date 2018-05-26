import React, {Component} from 'react';
import './index.css';
import BotaoMenuLateral from '../../component/BotaoMenuLateral';

export default class MenuLateral extends Component {
  render(){
  	return (
  	  <div className="menuLateralContainer">
  	  	<BotaoMenuLateral texto={'Lista de Livros'} ir={'#'} /> 
  	  	<BotaoMenuLateral texto={'Lista de Alunos'} ir={'listadealunos'} />
  	  	<BotaoMenuLateral texto={'Lista de Livros Emprestados'} ir={'listadelivrosemprestados'} />  
  	  	<BotaoMenuLateral texto={'Cadastrar Aluno'} ir={'cadastrodealunos'} /> 
  	  	<BotaoMenuLateral texto={'Cadastrar Livro'} ir={'cadastrodelivros'} />
  	  	<BotaoMenuLateral texto={'Emprestar Livro'} ir={'emprestimodelivros'} />
        <BotaoMenuLateral texto={'Backup'} ir={'backup'} /> 
  	  </div>
  	);
  }
}