import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import accountsReducer from './accountsReducer';

export default combineReducers({
    auth: authReducer,
    accounts: accountsReducer,
    form: reduxForm
});