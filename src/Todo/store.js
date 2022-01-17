import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./Reducer";
import mySaga from "../sagas/mySaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
export default store;
