import React, { Component } from 'react';
import UserCardList from './UserCardList';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usersArray: []
        }
    }

    _onChange = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const newUserData = await fetch (`https://api.github.com/users/${this.state.username}`)
            .then(response => response.json())
        this.setState({
            usersArray: [...this.state.usersArray, newUserData]
        });
    }

    render() {
        const { usersArray } = this.state;
        console.log('users', Array.isArray(usersArray))
        return(
            <>
                <form onSubmit={this._handleSubmit}>
                    <input 
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={this.state.username}
                    onChange={(event) => {
                        this._onChange("username", event.target.value);
                    }}
                    />
                    <button type="submit">Get User</button>
                </form>
                {usersArray.length ? <UserCardList usersArray={usersArray}/> : <p>No Users to display</p>}
            </>
        );
    };
}

export default SearchForm;