import Imm from 'immutable';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import todosReducers from './todos/todosReducers';
import exercisesReducers from './exercises/exercisesReducers';
import mockResponse from './mock.json';
import rootSagas from './rootSagas';

const reducers = combineReducers({
    exercises: exercisesReducers,
    todos: todosReducers
});

const sagaMiddleware = createSagaMiddleware();

const initialStore = {
    exercises: Imm.Map({
        counter: 0,
        input: '1',
        bitcoin: Imm.fromJS(mockResponse),
    })
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers,
    initialStore,
    composeEnhancers(applyMiddleware(sagaMiddleware)));
    
sagaMiddleware.run(rootSagas);