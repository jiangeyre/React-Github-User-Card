import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

class UserCard extends Component {
    constructor(){
        super();
        this.state = {
            detail: []
        }
    }

    render(){
        return (
            <Card className="cardCont">
                <img src={this.props.detail.avatar_url} className="cardImg" />
                <Card.Content className="cardInfo">
                    <Card.Header className="cardUsername">Username: {this.props.detail.login}</Card.Header>
                    <Card.Meta className="cardName">Name: {this.props.detail.name}</Card.Meta>
                    <Card.Meta className="cardFollowers">Followers: {this.props.detail.followers}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}

export default UserCard;