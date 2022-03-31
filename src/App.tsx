import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import ButtonClass from './components/ButtonClass';
import './App.css';
class App extends Component {
  myFunction(text: string) {
    alert(text);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <p className='mb-5'>
              Welcome to React with TSX
            </p>
            <div className='row g-2'>
              <div className='col-3 offset-3'>
                <Button text="Added" type="primary" action={this.myFunction} />
              </div>
              <div className='col-3'>
                <ButtonClass text="Deleted" type="danger" action={this.myFunction} />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
