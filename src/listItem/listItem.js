import { BsFillXCircleFill, BsFillBookmarkFill } from "react-icons/bs";

import './listItem.css'

const ListItem = ({onDeleteTask, onSpecialTask, item}) => {
    const {id, text} = item;
    if(item.special){
        return (
            <div className='task-list__item' key={id}>
                <span className='task-list__item-special-text'>{text}</span>
                <button className='task-list__item-button-delete' onClick={() => onDeleteTask(id)}><BsFillXCircleFill /></button>
                <button className='task-list__item-button-special' onClick={() => onSpecialTask(id)}><BsFillBookmarkFill /></button>
            </div>
        )
    } else {
        return (
            <div className='task-list__item' key={id}>
                <span className='task-list__item-text'>{text}</span>
                <button className='task-list__item-button-delete' onClick={() => onDeleteTask(id)}><BsFillXCircleFill /></button>
                <button className='task-list__item-button-special' onClick={() => onSpecialTask(id)}><BsFillBookmarkFill /></button>
            </div>
        )
    }   
}

export default ListItem;