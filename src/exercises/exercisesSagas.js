import Imm from 'immutable';
import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import ActionTypes, {receiveLatestBCValue} from './exercisesActions';

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

/**
 * A simple saga that fetches the current bitcoin price from the coindesk API.
 *
 * To trigger it, dispatch an action with type: FETCH_LATEST_BC_VALUE.
 *
 * When the API returned a response, the saga will dispatch a new action: retrieveLatestBCValue, the result of
 * which should be saved in the store.
 */

export default function* () {
    yield takeEvery(ActionTypes.FETCH_LATEST_BC_VALUE, fetchLatestBCValue);
}

function* fetchLatestBCValue() {
    try {
        const latestBCApiResponse = yield call(doFetchLatestBCValue);
        yield put(receiveLatestBCValue(latestBCApiResponse));

    } catch (err) {
        console.error(err);
    }
}

function doFetchLatestBCValue() {
    return fetch(url)
    // convert response to JS
        .then(res => res.json())
        // convert JS to immutable, using fromJS
        .then(resJS => Imm.fromJS(resJS));
}
