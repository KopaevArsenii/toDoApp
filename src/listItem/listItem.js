import { BsFillXCircleFill, BsFillBookmarkFill } from "react-icons/bs";

import './listItem.css'

const ListItem = ({onDeleteTask, onSpecialTask, item}) => {
    const {id, text, special} = item;
    let textCondition = 'task-list__item-text';
    if (special) textCondition = `${textCondition} special`;
    return (
        <div className='task-list__item' key={id}>
            <span className={textCondition}>{text}</span>
            <button className='task-list__item-button-delete' onClick={() => onDeleteTask(id)}><BsFillXCircleFill /></button>
            <button className='task-list__item-button-special' onClick={() => onSpecialTask(id)}><BsFillBookmarkFill /></button>
        </div>
    )
}

export default ListItem;