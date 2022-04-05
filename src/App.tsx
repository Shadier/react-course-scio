import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import ButtonClass from './components/ButtonClass';
import './App.css';
import UserCard from './components/UserCard';
import UserContext from './context/UserContex';
import Axios from 'axios';
import UserModel from './models/UserModel';

function App() {
  const [type, setType] = useState('info');
  const [user, setUser] = useState<any>({
    name: {
        title: '',
        first: '',
        last: '',
    }
  });

  useEffect(() => {
    Axios.get('https://randomuser.me/api/')
      .then((res) => {
        setUser(res.data.results[0]);
      });
  }, []);

  return (
    <UserContext.Provider value={user} >
    <div className="App">
      <UserCard/>
      <header className="App-header">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <p className='mb-5'>
            Welcome to React with TSX, {user.name.first}
          </p>
          <div className='row g-2'>
            <div className='col-3 offset-3'>
              <Button 
                text="Added"
                type="primary"
                action={(text: string) => {
                  alert(text);
                  setType('danger');
                }} 
              />
            </div>
            <div className='col-3'>
              <ButtonClass
                text="Added"
                type={type}
                action={(text: string) => {
                  alert(text);
                  setType('danger');
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </div>

</UserContext.Provider>
  );
}

export default App;
