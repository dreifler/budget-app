import axios from 'axios';
import {FETCH_ACCOUNTS, FETCH_USER} from "./types";

export const fetchUser = () => async dispatch => {
        const res = await axios.get('api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    };

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitAccount = (values, history) => async dispatch => {
    const res = await axios.post('/api/accounts', values);

    history.push('/dashboard');
    dispatch({ type: FETCH_USER, payload: res.data});
};

export const fetchAccounts = () => async dispatch => {
    const res = await axios.get('/api/accounts');

    dispatch({ type: FETCH_ACCOUNTS, payload: res.data});
};
