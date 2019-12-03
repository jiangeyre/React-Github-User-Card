import React, { Component } from 'react';
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';

import './App.css';
import Axios from 'axios';

class App extends Component {
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

  fetchUsers = (e, (user = `${this.state.username}`)) => {
    Axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      console.log(res);
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
          <h1>
            GitHub User Cards
          </h1>
        </header>
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
