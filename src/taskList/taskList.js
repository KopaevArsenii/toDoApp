import './taskList.css'


const TaskList = ({cases, onDeleteTask, onSpecialTask}) => {
    const elements = cases.map(item => {
        return (
            <div className='task-list__item' key={item.id}>
                <span className="task-list__item-text">{item.text}</span>
                <button className='task-list__item-button' onClick={() => onDeleteTask(item.id)}>delete</button>
                <button className='task-list__item-button' onClick={() => onSpecialTask(item.id)}>special</button>
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