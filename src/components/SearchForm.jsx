import React, { Component } from 'react';
import UserCardList from './UserCardList';
import {
    Field,
    Label,
    Button,
    Input
} from 'bloomer';

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
                    <Field isGrouped style={{justifyContent: "center", marginTop: 20}}>
                        <Label>
                            <Input 
                                type="text"
                                name="username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={(event) => {
                                    this._onChange("username", event.target.value) 
                            }}
                            />
                        </Label>
                        <Button style={{margin: '0 20px'}}
                        className='center-button'
                        type='submit'
                        isColor='primary'>Submit</Button>
                        
                    </Field>
                </form>
                {usersArray.length ? <UserCardList usersArray={usersArray}/> : <p>No Users to display</p>}
            </>
        );
    };
}

export default SearchForm;