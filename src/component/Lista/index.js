import React, {Component} from 'react';
import './index.css';

export default class Lista extends Component {
  render(){
    return(
      <div className="listaContainer">
        {this.props.children}
      </div>
    );
  }
}