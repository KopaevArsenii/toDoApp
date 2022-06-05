import './listItem.css'

const ListItem = ({onDeleteTask, onSpecialTask, item}) => {
    return (
        <div className='task-list__item' key={item.id}>
            <span className="task-list__item-text">{item.text}</span>
            <button className='task-list__item-button' onClick={() => onDeleteTask(item.id)}>delete</button>
            <button className='task-list__item-button' onClick={() => onSpecialTask(item.id)}>special</button>
        </div>
    )
}

export default ListItem;