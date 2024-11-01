import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const API_URL = 'https://66ff3a172b9aac9c997e9862.mockapi.io/tasks';

// Action Types
const FETCH_TODOS = 'FETCH_TODOS';
const SET_TODOS = 'SET_TODOS';
const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
const ADD_TODO = 'ADD_TODO';
const EDIT_TODO_REQUEST = 'EDIT_TODO_REQUEST';
const EDIT_TODO = 'EDIT_TODO';

// Sagas
function* fetchTodosSaga() {
    try {
        const response = yield call(axios.get, API_URL);
        yield put({ type: SET_TODOS, payload: response.data });
    } catch (error) {
        console.error(error);
    }
}

function* addTodoSaga(action) {
    try {
        const response = yield call(axios.post, API_URL, action.payload);
        yield put({ type: ADD_TODO, payload: response.data });
    } catch (error) {
        console.error(error);
    }
}

function* editTodoSaga(action) {
    try {
        const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
        yield put({ type: EDIT_TODO, payload: response.data });
    } catch (error) {
        console.error(error);
    }
}

export default function* todoSaga() {
    yield takeEvery(FETCH_TODOS, fetchTodosSaga);
    yield takeEvery(ADD_TODO_REQUEST, addTodoSaga);
    yield takeEvery(EDIT_TODO_REQUEST, editTodoSaga);
}
