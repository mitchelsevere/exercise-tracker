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
            <Route path="/exercises" exact component={ExercisesList}/>
            <Route path="/exercises/update/:id" exact component={EditExercise}/>
            <Route path="/exercises/add" exact component={CreateExercise}/>
            <Route path="/users/add" exact component={CreateUser}/>
        </Router>
    );
}

export default App;
