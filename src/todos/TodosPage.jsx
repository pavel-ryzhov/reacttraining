import React from 'react';
import {createTodo} from './todoUtils';
import TodoItem from './TodoItem';
import TodosFooter from './TodosFooter';
import './todos.css';

/**
 * The todos page. Manages a list of todos.
 * Todos can be created, removed and completed.
 *
 * Completed todos are hidden by default.
 */

export default class TodosPage extends React.Component {

    constructor() {
        super();

        /**
         * initial application state. We manage the whole app state
         * inside this component.
         */

        this.state = {
            headerText: '',
            todos: [],
            showCompleted: false
        };
    }

    /**
     * Main render function for the page.
     * Shows a container with a list of todos inside
     */
    render() {
        return <div className="todos-page">
            <div className="todos-page-content">
                <div className="todos-header">
                    <h1>Todos</h1>

                    <input type="text"
                           placeholder="press enter to add a todo"
                           value={this.state.headerText}
                           onChange={(e) => this.setHeaderText(e.target.value)}
                           onKeyPress={(e) => this.handleKeyPressed(e)}/>
                </div>

                <div className="todos-list">
                    {this.renderTodos()}
                </div>

                <button onClick={this.markAllTodosCompleted.bind(this)}>
                    Mark All Completed
                </button>

                <div className="todos-count">
                    <p>There are {this.state.todos.length} TODO entries, and {this.state.todos.filter(todo => !todo.completed).length} of them are incomplete.</p>
                </div>
            </div>

            <TodosFooter
                showCompleted={this.state.showCompleted}
                setShowCompleted={this.setShowCompleted.bind(this)}/>

            {this.getAllCompletedComponent()}
        </div>
    }

    getAllCompletedComponent() {
        let todos = this.state.todos;
        let allTodosCount = todos.length;
        if (allTodosCount !== 0
            && todos.filter((todo) => todo.completed).length === allTodosCount
        ) {
            return <p>All todos completed!</p>
        } else {
            return null;
        }
    }

    /**
     * Render the todos list
     */
    renderTodos() {
        return this.state.todos
            .filter(todo => this.state.showCompleted || !todo.completed)
            .map((todo) => {
                return <TodoItem
                    key={todo.id}
                    text={todo.text}
                    id={todo.id}
                    completed={todo.completed}
                    completeTodo={this.completeTodo.bind(this)}
                    removeTodo={this.removeTodo.bind(this)}
                    setTodoText={this.setTodoText.bind(this)}/>;
            })
    }

    handleKeyPressed(e) {
        if (e.key === 'Enter') {
            if (this.state.headerText.length !== 0) {
                const todo = createTodo(this.state.headerText);
                this.addTodo(todo);
            }
        }
    }

    addTodo(todo) {
        this.setState({
            todos: this.state.todos.concat([todo]),
            headerText: ''
        });
    }

    setHeaderText(text) {
        this.setState({
            headerText: text
        })
    }

    /**
     * Methods to manage the application state.
     * We make these functions accessible to the child components, by passing through as callback functions.
     */

    setTodoText(id, text) {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.text = text;
                }
                return todo;
            })
        })
    }

    removeTodo(id) {
        const todos = this.state.todos;
        this.setState({
            todos: todos.filter((todo) => todo.id !== id)
        })
    }

    completeTodo(id, completed) {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id !== id) return todo;
                return {...todo, completed}
            })
        })
    }

    setShowCompleted(showCompleted) {
        this.setState({
            showCompleted: showCompleted
        })
    }

    markAllTodosCompleted() {
        let todos = this.state.todos;
        todos.forEach((todo) => {
            todo.completed = true;
        });
        this.setState({
            todos: todos
        });
    }
}

