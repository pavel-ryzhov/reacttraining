import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import TodosPage from './todos/TodosPage';
import ExercisesPage from './exercises/ExercisesPage';
import IndexPage from './IndexPage';

import {store} from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/todos" component={TodosPage}/>
                <Route path="/exercises" component={ExercisesPage}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
