import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from './AuthProvider';
import reducer, { initialState } from './Reducer';
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider initialState={initialState} reducer={reducer}>
        <App />
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
