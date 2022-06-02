import './searchTask.css'

const SearchTask = () => {
    return(
        <div className='search-task__wrapper'>
            <input type="text" placeholder='Type here to search your case' className='search-task__input'/>
            <div className='search-task__filters'>
                <button className='search-task__filter-button'>All cases</button>
                <button className='search-task__filter-button'>Special cases</button>
            </div>
        </div>
    )
}

export default SearchTask;