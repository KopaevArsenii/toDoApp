import ListItem from '../listItem/listItem'

import './taskList.css'

const TaskList = ({cases, onDeleteTask, onSpecialTask, showSpecial}) => {
    let elements;
    if (showSpecial){
        elements = cases.map(item => {
            if (item.special) return (
                <>
                    <ListItem onDeleteTask={onDeleteTask} onSpecialTask={onSpecialTask} item={item} />
                </>
            )
        })
    }
    else {
        elements = cases.map(item => {
            return (
                <>
                    <ListItem onDeleteTask={onDeleteTask} onSpecialTask={onSpecialTask} item={item} />
                </>
            )
        })
    }
    
    return(
        <div className='task-list__wrapper'>
            {elements}
        </div>
    )
}

export default TaskList;