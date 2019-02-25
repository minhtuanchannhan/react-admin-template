// For IE 9-11 support
import 'react-app-polyfill/ie9';
// For IE 11 support
import 'react-app-polyfill/ie11';
import './services/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker.register();
