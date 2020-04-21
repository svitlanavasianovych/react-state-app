import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import myApp from './reducers';
import * as serviceWorker from './serviceWorker';

let store = createStore(myApp);

function render () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();

serviceWorker.unregister();
