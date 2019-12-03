import React, { Component } from 'react';
import styled from 'styled-components';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

const BIG = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
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
    box-shadow: 3px 5px 3px #282c34;
`;

class UserCard extends Component {
    render() {
        return (
            <BIG>
                <Card>
                    <CardHeader image={this.props.avatar_url} username={this.props.login} />
                    <CardBody
                        login={this.props.login} 
                        name={this.props.name}
                        location={this.props.location}
                        followers={this.props.followers} 
                        following={this.props.following} 
                    />
                </Card>
            </BIG>
        );
    }
}

export default UserCard; 