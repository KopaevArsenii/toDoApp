import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

import Information from './information/information';
import Filter from './filterBlock/filterBlock';
import TaskList from './taskList/taskList';
import AddTask from './addTask/addTask';

import './index.css';

const App = () => {
  const [showSpecial, setShowSpecial] = useState(false);
  const [term, setTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data){
      setData(data);
    }
  }, []);
  
  useEffect(() => {
    if (data?.length){
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [data]);


  /* Filter block */
  /* Buttons */
  function showSpecialCases(){
    setShowSpecial(true);
  }
  function showAllCases(){
    setShowSpecial(false);
  }

  /* Filter input */
  function filterList(elements, term){
    if (term.length === 0) return elements;
    
    return elements.filter(item => {
      return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }) 
  }

  function updateFilter(request){
    setTerm(request);
  }

  const visiableDate = filterList(data, term);

  /* List buttons */
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
          return {...item, special: !item.special}
        } else return item;
      }))
  }

  /* Add task block */
  function addNewCase(text){
    setData(data => [...data, {text: text, special: false, id: (+new Date).toString(16)}])
  }
  
  return(
    <>
      <Information 
        length={data.length} 
        specialLenght={data.filter((item) => item.special === true).length}/>
      <Filter 
        showSpecialCases={showSpecialCases} 
        showAllCases={showAllCases} 
        updateFilter={updateFilter} />
      <TaskList 
        cases={visiableDate} 
        onDeleteTask={onDeleteTask} 
        onSpecialTask={onSpecialTask} 
        showSpecial={showSpecial}/>
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
