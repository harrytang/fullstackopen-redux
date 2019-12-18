/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-18 01:21:10
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-18 01:23:10
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
