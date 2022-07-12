import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOm from 'react-dom';
import App from './App';
import './App.css';

const root = ReactDOm.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)