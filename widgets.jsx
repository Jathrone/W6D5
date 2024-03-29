import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/root';


document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById('root');
    ReactDOM.render(<Root />, main);
})