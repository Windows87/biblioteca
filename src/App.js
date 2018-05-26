import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuLateral from './container/MenuLateral';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <MenuLateral />
        {children}
      </div>
    );
  }
}