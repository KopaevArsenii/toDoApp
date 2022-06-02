import './addTask.css'

const AddTask = () => {
    return (
        <div className='add-task__wrapper'>
            <input type="text" className='add-task__input' placeholder='Type here your new case'/>
            <button className='add-task__button'>Add</button>
        </div>
    )
} 

export default AddTask;