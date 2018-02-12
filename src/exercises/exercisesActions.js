const ActionTypes = {
    INCREMENT_COUNTER: 'INCREMENT_COUNTER',
    SET_BC_CONVERSION_INPUT: 'SET_BC_CONVERSION_INPUT',
    FETCH_LATEST_BC_VALUE: 'FETCH_LATEST_BC_VALUE',
    RECEIVE_LATEST_BC_VALUE: 'RECEIVE_LATEST_BC_VALUE'
}

export default ActionTypes;

/** This is called by the saga, after a result was received */
export function receiveLatestBCValue(result) {
    return {
        type: ActionTypes.RECEIVE_LATEST_BC_VALUE,
        result
    }
}

export function incrementCounter() {
    return {
        type: ActionTypes.INCREMENT_COUNTER
    }
}

export function setBcConversionInput(value) {
    return {
        type: ActionTypes.SET_BC_CONVERSION_INPUT,
        value
    }
}

/** This should trigger the saga to begin fetching */
export function fetchLatestBCValue() {
    return {type: 'DO_NOTHING'}
    /* TODO */
}

export function selectBCCurrency(currency) {
    return {type: 'DO_NOTHING'}
    /* TODO */
}

export function switchBCConversionDirection() {
    return {type: 'DO_NOTHING'}
    /* TODO */
}

