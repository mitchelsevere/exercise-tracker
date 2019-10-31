import React from 'react';
import axios from 'axios';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e) {
        const username = e.target.value;
        this.setState(() => ({ username }));
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }
        axios.post('/users/add', user)
            .then(data => console.log('Success', data))
            .catch(err => console.log('Failed', err));
        
            this.setState(() => ({ username: '' }));
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        required
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleOnChange}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
};

export default CreateUser;