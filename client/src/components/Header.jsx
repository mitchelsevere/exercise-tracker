import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <nav>
        <Link to="/exercises">Trackercise</Link>
        <ul>
            <li>
                <Link to="/exercises">Exercises</Link>
            </li>
            <li>
                <Link to="/exercises/add">Log Exercise</Link>
            </li>
            <li>
                <Link to="/users/add">Create User</Link>
            </li>
        </ul>
    </nav>
)

export default Header;