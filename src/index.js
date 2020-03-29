import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import './index.css'
import 'react-vis/dist/style.css'
import { Provider, Reducers, Stores } from './context';

const Index = () => {
  const [store, dispatch] = useReducer(Reducers, Stores)

  return (
    <Provider value={{ store, dispatch }}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
