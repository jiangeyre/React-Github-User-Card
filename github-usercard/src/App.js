import React, { Component } from 'react';
import UserCard from './components/UserCard';
import AddUserForm from './components/AddUser';

import bbyoda from './img/bbyoda.jpg';

import './App.css';
import Axios from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      username: 'jiangeyre',
      usersList: []
    }
  }

  componentDidMount(){
    console.log('cDM');
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState){
    console.log('cDU');
    if(prevState.username !== this.state.username){
      console.log(this.state.usersList);
      this.fetchUsers();
    }
  }

  fetchUsers = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(res => {
      this.setState({
        usersList: [...this.state.usersList, res.data]
      })
    })
    .catch(err => {
      console.log('error: ', err);
    })
  }

  addUser = (e, user) => {
    const newUser = user;
    this.setState({
      username: newUser
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={bbyoda} alt="baby yoda"/>
          <h1>
            GitHub User Cards
          </h1>
        </header>
        <div>
          <AddUserForm addUser={this.addUser} />
        </div>
        <div>
          {this.state.usersList.map((item, ind) => {
            return (
              <div className="user-card" key={ind}>
                <UserCard detail={item} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
