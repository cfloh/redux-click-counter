import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import counter from "./reducers/index";
import { Provider } from 'react-redux';
import TodoList from "./components/TodoList"
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Wikipedia from "./components/Wikipedia";
import WikipediaResults from "./components/WikipediaResults";

import { HashRouter, Route } from 'react-router-dom';


let store = createStore(counter, applyMiddleware(thunkMiddleware));





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <div>
          <Navigation />
          <Route exact={true} path="/" component={Home} />
          <Route path="/click" component={App} />
          <Route path="/todo" component={TodoList} />
          <Route path="/wikipedia" component={Wikipedia} />
          <Route path="/wikipedia-results/:search" component={WikipediaResults} />
        </div>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




