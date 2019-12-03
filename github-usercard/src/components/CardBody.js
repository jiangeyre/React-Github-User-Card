import React, { Component } from 'react';
import styled from 'styled-components';

const BigBoy = styled.div`
    margin-top: -2%;
    line-height: 0.25;
    font-size: 1rem;
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

class CardBody extends Component {
    render() {
        return (
            <BigBoy className='card-body'>
                <h4>Username: {this.props.login}</h4>
                <h4>Name: {this.props.name}</h4>
                <h4>Followers: {this.props.followers}</h4>
                <Butt>
                    <GithubLink href={`https://github.com/${this.props.login}`}>GitHub</GithubLink>
                </Butt>
            </BigBoy>
        );
    }
}

export default CardBody; 