import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { ThemeProvider } from '@mui/material/styles';
import postsReducer from './store/reducer/postsReducer';
import messagesReducer from './store/reducer/messagesReducer';
import theme from './theme';
import App from './App';
import './index.css';

const rootReducer = combineReducers({
  news: postsReducer,
  messages: messagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));