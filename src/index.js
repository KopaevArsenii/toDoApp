import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Information from './information/information';
import SearchTask from './searchTask/searchTask';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Information />
    <SearchTask />
  </React.StrictMode>
);
