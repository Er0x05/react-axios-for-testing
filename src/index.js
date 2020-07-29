import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const interceptor = Axios.interceptors.request.use( request =>{
    console.log( request );
    return request
}, error => {
    console.log( error );
    return Promise.reject(error);
});

// Axios.interceptors.request.eject(interceptor)


Axios.interceptors.response.use( response => {
    console.log(response);
    return response;
},error => {
    console.log(error);
    return Promise.reject(error);
}
)

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
