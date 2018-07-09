import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListaDeLivros from './container/ListaDeLivros';
import ListaDeAlunos from './container/ListaDeAlunos';
import ListaDeLivrosEmprestados from './container/ListaDeLivrosEmprestados';
import CadastroDeAlunos from './container/CadastroDeAlunos';
import CadastroDeLivros from './container/CadastroDeLivros';
import EmprestimoDeLivros from './container/EmprestimoDeLivros';
import ContainerDeBackup from './container/ContainerDeBackup';
import ContainerDeImportacao from './container/ContainerDeImportacao';
import Detalhes from './container/Detalhes';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ListaDeLivros} />
      <Route path='listadealunos' component={ListaDeAlunos}/>
      <Route path='listadelivrosemprestados' component={ListaDeLivrosEmprestados}/>
      <Route path='cadastrodealunos' component={CadastroDeAlunos} />
      <Route path='cadastrodelivros' component={CadastroDeLivros} />
      <Route path='emprestimodelivros' component={EmprestimoDeLivros} />
      <Route path='backup' component={ContainerDeBackup} />
      <Route path='importacao' component={ContainerDeImportacao} />
      <Route path='detalhes' component={Detalhes} />
    </Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();