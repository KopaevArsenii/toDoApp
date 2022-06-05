import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import Information from './information/information';
import SearchTask from './searchTask/searchTask';
import TaskList from './taskList/taskList';
import AddTask from './addTask/addTask';

import './index.css';

const App = () => {
  const [specailState, setSpecialState] = useState(false);
  const [string, setString] = useState('');
  const [data, setData] = useState([]);

  function onDeleteTask(id){
    let returnArr = data.filter(item => {
      return item.id !== id;
    })
  
    setData(returnArr);
  }

  function onSpecialTask(id){
    setData(data =>
      data.map(item => {
        if (item.id == id){
          return {...item, specail: !item.specail}
        } else return item;
      }))
  }
  function showSpecialCases(){
    setSpecialState(true);
  }
  function showAllCases(){
    setSpecialState(false);
  }

  function addNewCase(text){
    setData(data => [...data, {text: text, specail: false, id: (+new Date).toString(16)}])
  }

  function onFilter(elements, string){
    if (string.length === 0) return elements;
    
    return elements.filter(item => {
      return item.text.toLowerCase().indexOf(string.toLowerCase()) > -1;
    }) 
  }

  function updateFilter(request){
    setString(request);
  }

  const visiableDate = onFilter(data, string);
  
  return(
    <>
      <Information length={data.length} specailLenght={data.filter((item) => item.specail === true).length}/>
      <SearchTask showSpecialCases={showSpecialCases} showAllCases={showAllCases} updateFilter={updateFilter} />
      <TaskList cases={visiableDate} onDeleteTask={onDeleteTask} onSpecialTask={onSpecialTask} specailState={specailState}/>
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
