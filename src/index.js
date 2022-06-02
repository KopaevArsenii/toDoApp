import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Information from './information/information';
import SearchTask from './searchTask/searchTask';
import TaskList from './taskList/taskList';
import AddTask from './addTask/addTask';

let data = [
  {
    text: 'first case',
    specail: false
  },
  {
    text: 'second case',
    specail: false
  },
  {
    text: 'third case',
    specail: true
  },
  {
    text: 'pizda case',
    specail: true
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Information length={data.length} specailLenght={data.filter((item) => item.specail == true).length}/>
    <SearchTask />
    <TaskList cases={data}/>
    <AddTask />
  </React.StrictMode>
);
