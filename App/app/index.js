import React from "react";
import { ReactDOM } from "react-dom";
import app from './app';
import reportWebvitals from './reportWebvitals';
import "bulma/css/bulma.css";
import './style.css';
import {
    HashRouter as Router,
    }from "React-dom"
ReactDOM.render(
    <Router>
        <React.StrictMode>
            <app/>
        </React.StrictMode>
    </Router>,
    document.getElementById('fabio')
);
reportWebvitals();


