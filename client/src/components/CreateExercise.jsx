import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class CreateExercise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    componentDidMount() {
         axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState(() => ({ 
                        users: response.data.map(user => {
                            return user.username;
                        }),
                        username: response.data[0].username
                    }));
                }
            })
            .catch(err => console.log(err));
    }

    handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(() => ({[name]: value}));
    }

    handleDateChange(date) {
        this.setState(() => ({date}));
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(data => console.log('Success', data))
            .catch(err => console.log('Failed', err));
        
            this.props.history.push("/");
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label>Username:</label>
                    <select required value={this.state.username} name="username" onChange={this.handleOnChange}>
                        {
                            this.state.users.map((user, idx) => {
                                return (
                                    <option key={idx} value={user}>{user}</option>
                                );
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        required
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleOnChange}/>
                </div>
                <div>
                    <label>Duration:</label>
                    <input
                        type="text"
                        name="duration"
                        value={this.state.duration}
                        onChange={this.handleOnChange}/>
                </div>
                <div>
                    <label>Date:</label>
                    <DatePicker 
                        selected={this.state.date}
                        onChange={this.handleDateChange}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
};

export default CreateExercise;