import './taskList.css'


const TaskList = ({cases}) => {
    const elements = cases.map(item => {
        return (
            <div className='task-list__item'>
                <span className="task-list__item-text">{item.text}</span>
                <button className='task-list__item-button'>delete</button>
                <button className='task-list__item-button'>special</button>
            </div>
        )
    })
    return(
        <div className='task-list__wrapper'>
            {elements}
        </div>
    )
}

export default TaskList;