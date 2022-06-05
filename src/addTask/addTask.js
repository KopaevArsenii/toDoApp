import { useState } from 'react';

import './addTask.css'

const AddTask = ({addNewCase}) => {
    const [value, setValue] = useState('');

    function createNewTask(text){
        if (text === '') return;
        addNewCase(value);
        setValue(''); 
    }
    return (
        <div className='add-task__wrapper'>
            <input type="text" value={value} className='add-task__input' placeholder='Type here your new case' onChange={(e) => setValue(e.target.value)}/>
            <button className='add-task__button' onClick={() => createNewTask(value)}>Add</button>
        </div>
    )
} 

export default AddTask;