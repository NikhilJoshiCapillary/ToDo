import rootReducer from "./Reducers";
import { createStore } from "redux";

import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from "redux";




const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export default store
export {sagaMiddleware} 