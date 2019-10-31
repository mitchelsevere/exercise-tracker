import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
    return (
        <Router>
            <Header/>
            <Route path="/" exact component={ExercisesList}/>
            <Route path="/edit/:id" exact component={EditExercise}/>
            <Route path="/create" exact component={CreateExercise}/>
            <Route path="/user" exact component={CreateUser}/>
        </Router>
    );
}

export default App;
