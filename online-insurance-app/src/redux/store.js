import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import adminReducer from "./adminSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
