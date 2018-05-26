import React, {Component} from 'react';
import './index.css';

export default class RowContainer extends Component {
  render(){
    return(
      <div className="rowContainerClass">
        {this.props.children}
      </div>
    );  
  }
}