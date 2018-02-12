import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './exercises.css';

import {fetchLatestBCValue, incrementCounter, selectBCCurrency, setBcConversionInput, switchBCConversionDirection} from './exercisesActions';

function ExercisesPage(props) {

    // action-creators bound to store's dispatch.
    // We shadow the same names as the un-bound functions, so we don't
    // accidentally call them instead.
    const incrementCounter = props.incrementCounter;
    const setBcConversionInput = props.setBcConversionInput;
    const fetchLatestBCValue = props.fetchLatestBCValue;
    const selectBCCurrency = props.selectBCCurrency;
    const switchBCConversionDirection = props.switchBCConversionDirection;

    // values from the store, returned from the store in
    // mapStateToProps
    const counter = props.counter;
    const bcConversionInput = props.bcConversionInput;
    const bcConversionCurrency = props.bcConversionCurrency;
    const bcConversionDirection = props.bcConversionDirection;
    const bcValue = props.bcValue;
    const bcLastUpdatedTime = props.bcLastUpdatedTime;
    const bcFetching = props.bcFetching;

    // the converted value
    const bcValueConverted = bcValue;

    const left = bcConversionDirection ? bcConversionCurrency : 'bitcoin(s)';
    const right = bcConversionDirection ? 'bitcoin(s)' : bcConversionCurrency;
    const switchConversionButtonText = left + ' -> ' + right;

    return (
        <div className="exercises-page">
            <h1>Exercises</h1>

            {/* Exercise 1 */}
            <h3>1) Counter</h3>
            <div className="exercise">
                <p>Update the reducer to increment the counter by one every time the button is clicked.</p>
                <button onClick={incrementCounter}>{`Clicked: ${counter} time(s)`}</button>
            </div>

            {/* Exercise 2 */}
            <h3>2) Bitcoin price</h3>
            <div className="exercise">
                <p>Show the current bit-coin price from the store. Convert the input to the converted value.</p>

                <input className="input-currency"
                       type="number"
                       value={bcConversionInput}
                       onChange={(e) => setBcConversionInput(e.target.value)}/>

                <span>{left} {' '} =</span>

                <div className="value-field">{'€ ' + bcValueConverted}</div>
                {right}
            </div>

            {/* Exercise 3 */}
            <h3>3) Fetch Latest Value</h3>
            <div className="exercise">
                <p>Fetch the current bit-coin price. The saga in exerciseSagas.js can be used to handle the API request.</p>
                <button onClick={fetchLatestBCValue}>Update</button>
            </div>

            {/* Exercise 4 */}
            <h3>4) Currencies</h3>
            <div className="exercise">
                <p>switch which currency to use</p>
                <select
                    value={bcConversionCurrency}
                    name="currency"
                    onChange={(e) => selectBCCurrency(e.target.value)}>

                    <option>USD</option>
                    <option>GBP</option>
                    <option>EUR</option>
                </select>
            </div>

            {/* Exercise 5 */}
            <h3>5) Conversion Direction</h3>
            <div className="exercise">
                <p>Switch the conversion direction.</p>
                <button onClick={() => switchBCConversionDirection()}>
                    {switchConversionButtonText}
                </button>
            </div>

            {/* Exercise 6 */}
            <h3>6) Updated / Fetching</h3>
            <div className="exercise">
                <p>Show the last-updated time, and currently fetching status.</p>
                Last updated at: <div className="value-field">{bcLastUpdatedTime}</div>
                Fetching: <div className="value-field">{'' + bcFetching}</div>
            </div>
        </div>);
}

ExercisesPage.propTypes = {
    counter: PropTypes.number.isRequired,
    bcConversionInput: PropTypes.string.isRequired,
    bcConversionCurrency: PropTypes.string.isRequired,
    bcConversionDirection: PropTypes.bool.isRequired,
    bcValue: PropTypes.number.isRequired,
    bcLastUpdatedTime: PropTypes.string.isRequired,
    bcFetching: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        counter: state.exercises.get('counter'),
        bcConversionInput: state.exercises.get('input'),

        bcValue: 999, // TODO
        bcConversionCurrency: 'EUR', // TODO
        bcConversionDirection: false, // TOOD
        bcLastUpdatedTime: '???', // TODO
        bcFetching: false // TODO
    }
}

export default connect(
    // select store state to make available in props 
    mapStateToProps,

    // actions to bind to the store
    {
        incrementCounter,
        setBcConversionInput,
        fetchLatestBCValue,
        selectBCCurrency,
        switchBCConversionDirection
    }
)(ExercisesPage);
