import React, {Component} from 'react';
import './index.css';
import BancoDeDados from '../../class/BancoDeDados';

const fs = window.require('fs');
const excelToJson = window.require('convert-excel-to-json');
const {dialog} = window.require('electron').remote;

export default class ContainerDeBackup extends Component {
  bancoDeDados = new BancoDeDados();

  constructor(props){
  	super(props);
  	this.importarAlunos = this.importarAlunos.bind(this);
  }

  importarAlunos(){
  	dialog.showOpenDialog({title: 'Selecione o Arquivo Excel com os Alunos', filters: [{name: 'Excel', extensions: ['xlsx']}]}, (filenames) => {
      if(!filenames){
      	return;
      }

      const todosOsDados = this.bancoDeDados.obterTodosOsDados();

      const result = excelToJson({
        sourceFile: filenames[0],
        columnToKey: {
          A: 'codigo',
          B: 'nome',
          C: 'serie',
          D: 'turma'
        }
      });
      
      const listaDeAlunos = result.Plan1;
      todosOsDados.alunos = listaDeAlunos;

      const dadosEmTexto = JSON.stringify(todosOsDados);
      fs.writeFileSync('data/bancodedados.json', dadosEmTexto);
  	});
  }

  render(){
    return(
      <div className="importacaoContainer">
        <button onClick={this.importarAlunos}>Importar Alunos</button>
      </div>
    );
  }
}