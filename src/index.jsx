import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import "./index.scss";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('main'));
});
