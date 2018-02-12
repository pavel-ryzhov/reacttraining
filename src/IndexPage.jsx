import React from 'react';
import {Link} from 'react-router-dom';

export default function ({match}) {
    return <div>
        <h1>Redux Training</h1>
        <ul>
            <Link to={`/exercises`}>
                <li>Exercises</li>
            </Link>
            <Link to={`/todos`}>
                <li>Todos</li>
            </Link>
        </ul>
    </div>
}
