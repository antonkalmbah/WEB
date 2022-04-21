import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReduxApp from "./App-redux";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
// applyMiddleware нужен для работы с асинхронностью

const initialState = ['redux', 'react']  //начальные состояния

const store = createStore(reducer, applyMiddleware(logging));

// function changeStore(state = [], action) {
//     return state
//     switch (action.type) {
//         case 'Write':
//             return [
//                 ...state,
//                 action.payload
//             ]
//         break;
//             default:
//                 return state
//     }
// }
//
// store.dispatch({types: 'Write', payload: '123'});
//
// const testButton = document.querySelecto(".testButton")
// testBytton.addEventListener('click', () => {
//     const inputValue = document.querySelector('.testInput'.value)
//     console.log('Input', inputValue)
// })

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp /> {/* меняем тут на файл с Redux*/}
  </Provider>,
  document.getElementById('root')
);