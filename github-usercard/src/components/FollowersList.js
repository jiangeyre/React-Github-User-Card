import React, { Component } from 'react';
import styled from 'styled-components';

const Bic = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Card = styled.div `
    box-sizing: border-box;
    background-color: white;
    width: 400px;
    height: 400px;
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    margin: 2%;
    box-shadow: 3px 5px 3px #282c34;
`;

const UserImg = styled.img `
    width: 270px;
    border: 1px solid black;
    box-shadow: 1px 2px 1px darkslategrey;
`;

const Butt = styled.button`
    background-color: #282c34;
    box-shadow: 1px 2px 1px black;
    border-radius: 5px;
`;

const GithubLink = styled.a`
    text-decoration: none;
    font-family: 'Inconsolata', monospace;
    color: white;
    font-weight: 600;
`;

class FriendsList extends Component {
    render() {
        console.log(this.props.followers);
        return (
            <Bic>
                {this.props.followers.map((follower, index) => {
                return (
                    <Card key={index}>
                    <UserImg src={follower.avatar_url} />
                    <h4>Username: {follower.login}</h4>
                    <Butt>
                        <GithubLink href={`https://github.com/${follower.login}`}>GitHub</GithubLink>
                    </Butt>
                    </Card>
                )
                })}
            </Bic>
        );
    }
}

export default FriendsList; 