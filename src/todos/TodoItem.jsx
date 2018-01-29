import React from 'react';
import PropTypes from 'prop-types';

/**
 * A single todo item on the page.
 * 
 * The item contains some text, a remove button,
 * and a checkbox to select whether the item has been completed.
 */

export default function TodoItem(props) {
    const id = props.id;
    const completed = props.completed;
    const text = props.text;
    const index = props.index;

    const handleCompleted = () => props.completeTodo(id, !completed);
    const handleRemoved = () => props.removeTodo(id);
    const todoTextUpdated = (e) => {
        props.setTodoText(id, e.target.value);
    };

    return <div className="todo-item">
        <input
            name={'cb-' + id}
            type="checkbox"
            checked={completed}
            onChange={handleCompleted}/>

        <input
            name={'button-' + id}
            type="text"
            className="todo-item-text"
            onChange={(e) => todoTextUpdated(e)}
            value={text}>
        </input>

        <a className="icon right" onClick={handleRemoved}>x</a>
    </div>
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    setTodoText: PropTypes.func.isRequired
};
