import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker'; //advanced topic, feature that allows our app 
import App from './containers/App.js'
import 'tachyons'; 
import {robots} from './robots'

ReactDOM.render(
    <App/>,
    document.getElementById('root'));

serviceWorker.unregister();