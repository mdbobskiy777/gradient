import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleWare from "redux-thunk"
import gradientReducer from "./gradient-reducer";

let rootReducer = combineReducers({gradientReducer:gradientReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleWare))
)