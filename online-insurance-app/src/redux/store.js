// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import adminReducer from './adminSlice'; // Make sure to import your admin reducer
import authReducerRegister from './reducers/authReducerRegister';

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  authRegister: authReducerRegister,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
