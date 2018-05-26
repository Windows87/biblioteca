import React, {Component} from 'react';
import './index.css';
import { Link } from 'react-router';

export default class BotaoMenuLateral extends Component {
  render(){
    return(
      <div className="botaoMenuLateralContainer">
        <Link to={this.props.ir} className="estiloLink"> {this.props.texto} </Link>
      </div>
    );
  }
}