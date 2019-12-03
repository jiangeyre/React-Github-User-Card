import React, { Component } from 'react';
import styled from 'styled-components';

const UserImg = styled.img `
    max-width: 270px;
    border: 1px solid black;
    box-shadow: 1px 2px 1px darkslategrey;
`;

class CardHeader extends Component {
    render() {
        return (
            <section className='card-header'>
                <UserImg src={this.props.image} alt='User Card' />
            </section>
        );
    }
}

export default CardHeader; 