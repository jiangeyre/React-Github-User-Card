import React, { Component } from 'react';
import UserCard from './components/UserCard';
import AddUserForm from './components/AddUser';
import FriendsList from './components/FollowersList';
import bbyoda from './img/bbyoda.jpg';
import './App.css';
import Axios from 'axios';
import styled from 'styled-components';

const Container = styled.div `
  margin: auto;
  display: flex;
  max-width: 90%;
  justify-content: space-around;
`;

class App extends Component{
  constructor(){
    super();
    this.state = {
      username: 'jiangeyre',
      gitUser: {},
      followers: [] ,
      inputValue: ''
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
        gitUser: res.data
      })
    })
    .catch(err => {
      console.log('error: ', err);
    })

    Axios.get(`https://api.github.com/users/${this.state.username}/followers`)
    .then((res) => {
      this.setState({
        followers: res.data
      })
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
        <UserCard {...this.state.gitUser} />
        <h1>Followers:</h1>
        <Container>
          <FriendsList followers={this.state.followers} />
        </Container>
      </div>
    );
  }
}

export default App;
