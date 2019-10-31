import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <nav>
        <Link to="/">Trackercise</Link>
        <ul>
            <li>
                <Link to="/">Exercises</Link>
            </li>
            <li>
                <Link to="/create">Log Exercise</Link>
            </li>
            <li>
                <Link to="/user">Create User</Link>
            </li>
        </ul>
    </nav>
)

export default Header;