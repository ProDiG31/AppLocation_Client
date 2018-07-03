import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);


// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/sw.js').then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }
  