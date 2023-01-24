import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game';
import Timer from './Timer';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById("root"));
ReactDOM.render(<Timer />, document.getElementById("timer"));