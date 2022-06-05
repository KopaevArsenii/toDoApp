import ListItem from '../listItem/listItem'

import './taskList.css'


const TaskList = ({cases, onDeleteTask, onSpecialTask, specailState}) => {
    let elements;
    if (specailState == false){
        elements = cases.map(item => {
            return (
                <>
                    <ListItem onDeleteTask={onDeleteTask} onSpecialTask={onSpecialTask} item={item} />
                </>
            )
        })
    } else {
        elements = cases.map(item => {
            if (item.specail) return (
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