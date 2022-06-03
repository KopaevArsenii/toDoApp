import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import Information from './information/information';
import SearchTask from './searchTask/searchTask';
import TaskList from './taskList/taskList';
import AddTask from './addTask/addTask';

import './index.css';

const App = () => {
  const [data, setData] = useState([
    {
      text: 'first case',
      specail: false,
      id: (+new Date + 1).toString(16)
    },
    {
      text: 'second case',
      specail: false,
      id: (+new Date + 2).toString(16)
    },
    {
      text: 'third case',
      specail: true,
      id: (+new Date + 3).toString(16)
    },
    {
      text: 'pizda case',
      specail: true,
      id: (+new Date + 4).toString(16)
    }
  ]);

  function onDeleteTask(id){
    let returnArr = data.filter(item => {
      return item.id !== id;
    })
  
    setData(returnArr);
  }

  function onSpecialTask(id){
    /* setData(data => [
      data.map(item => {
        if (item.id == id) {
          return {...item, specail: !item.specail}
        } else return item;
      })
    ]) */
  }

  function addNewCase(text){
    setData(data => [...data, {text: text, specail: false, id: (+new Date).toString(16)}])
  }
  
  return(
    <>
      <Information length={data.length} specailLenght={data.filter((item) => item.specail === true).length}/>
      <SearchTask />
      <TaskList cases={data} onDeleteTask={onDeleteTask} onSpecialTask={onSpecialTask}/>
      <AddTask addNewCase={addNewCase}/>
    </>
  )

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
