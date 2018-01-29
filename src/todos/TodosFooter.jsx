import React from 'react';
import PropTypes from 'prop-types';

/**
 * Options for the todos list
 */

export default function TodosFooter(props) {

    const setShowCompleted = () => props.setShowCompleted(!props.showCompleted);

    return <div className="todos-footer">
        <div className="todos-option">
            <input type="checkbox"
                   checked={props.showCompleted}
                   onChange={setShowCompleted}/>Show Completed
        </div>
    </div>
}

TodosFooter.propTypes = {
    showCompleted: PropTypes.bool.isRequired,
    setShowCompleted: PropTypes.func.isRequired
}
