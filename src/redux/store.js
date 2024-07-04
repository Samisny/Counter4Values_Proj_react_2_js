
import {createStore, applyMiddleware} from 'redux';
// import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';  // import {thunk} from 'redux-thunk' instead of import reduxThunk from 'redux-thunk'
import counterReducer from "./reducers/counterReducer";
import reducers from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';



const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ; // To run the chrome redux extension w/ the enhancer below

// const store = createStore(counterReducer, enhancer(applyMiddleware(thunk)));  // Old redux

const store = configureStore({reducer: {counter: counterSlice,}});  // New redux


export default store;