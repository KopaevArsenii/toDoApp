import './listItem.css'

const ListItem = ({onDeleteTask, onSpecialTask, item}) => {
    const {id, text} = item;
    return (
        <div className='task-list__item' key={id}>
            <span className='task-list__item-text'>{text}</span>
            <button className='task-list__item-button' onClick={() => onDeleteTask(id)}>delete</button>
            <button className='task-list__item-button' onClick={() => onSpecialTask(id)}>special</button>
        </div>
    )
}

export default ListItem;