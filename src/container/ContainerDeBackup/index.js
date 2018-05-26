import React, {Component} from 'react';
import './index.css';
import BancoDeDados from '../../class/BancoDeDados';

const fs = window.require('fs');
const {dialog} = window.require('electron').remote;

export default class ContainerDeBackup extends Component {
  bancoDeDados = new BancoDeDados;

  constructor(props){
  	super(props);
  	this.salvarBackup = this.salvarBackup.bind(this);
  	this.realizarBackup = this.realizarBackup.bind(this);
  }

  salvarBackup(){
  	let todosOsDados = this.bancoDeDados.obterTodosOsDados();
  	let todosOsDadosComoString = JSON.stringify(todosOsDados);

  	dialog.showSaveDialog({title: 'Salvar Backup', defaultPath: 'backup.json'}, (filename) => {
	  if(!filename){
	    return;
	  }

  	  fs.writeFileSync(filename, todosOsDadosComoString); 
  	});
  }

  realizarBackup(){
  	dialog.showOpenDialog({title: 'Selecione o Arquivo de Backup', filters: [{name: 'Arquivos de Backup', extensions: ['json']}]}, (filenames) => {
      if(!filenames){
      	return;
      }

      let dadosDoBackup = fs.readFileSync(filenames[0]).toString();
      fs.writeFileSync('data/bancodedados.json', dadosDoBackup);
  	});
  }

  render(){
    return(
      <div className="backupContainer">
        <button onClick={this.salvarBackup}>Salvar Backup</button>
        <button onClick={this.realizarBackup}>Realizar Backup</button>
      </div>
    );
  }
}