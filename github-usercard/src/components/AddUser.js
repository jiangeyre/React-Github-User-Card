import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    padding-top: 1%;
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    width: 250px;
    height: 50px;
    font-size: 1rem;
    font-family: 'Inconsolata', monospace;
    padding-left: 10px;
`;

const Butt = styled.button`
    margin-left: 2%;
    width: 100px;
    background-color: #282c34;
    box-shadow: 3px 6px 3px black;
    border-radius: 5px;
    color: white;
    font-family: 'Inconsolata', monospace;
    font-size: 1rem;
`;

class AddUserForm extends Component {
    constructor(){
        super();
        this.state = {
            username: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addUser(e, this.state.username);
        this.setState({
            username: ''
        })
    }

    handleChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Input 
                    placeholder="Enter in the username."
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <Butt>Search Other Fleets!</Butt>
            </Form>
        )
    }
}

export default AddUserForm;