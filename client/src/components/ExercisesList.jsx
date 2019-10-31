import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ExerciseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exercises: []
        }

        this.deleteExercise = this.deleteExercise.bind(this);
    }
    componentDidMount() {
        axios.get('/exercises')
        .then(response => {
            this.setState(() => ({
                exercises: response.data.map(exercise => {
                    return exercise;
                })
            }));
        })
        .catch(err => console.log(err));
    }
    deleteExercise(id) {
        axios.delete(`/exercises/${id}`)
        .then(response=> console.log(response.data))
        .catch(err => console.log(err));

        this.setState(() => ({
            exercises: this.state.exercises.filter(exercise => {
                return exercise._id !== id; 
            })
        }));
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Exercise Description</th>
                        <th>Exercise Duration</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.exercises.map((exercise, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{exercise.username}</td>
                                <td>{exercise.description}</td>
                                <td>{exercise.duration}</td>
                                <td>{exercise.date.substring(0, 10)}</td>
                                <td>
                                    <Link to={`/exercises/update/${exercise._id}`}>Edit Exercise</Link>
                                    <button 
                                        onClick={() => { this.deleteExercise(exercise._id)}}>
                                        Delete Exercise
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        )
    }
};

export default ExerciseList;