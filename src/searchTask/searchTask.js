import './searchTask.css'

const SearchTask = ({showSpecialCases, showAllCases, updateFilter}) => {
    return(
        <div className='search-task__wrapper'>
            <input type="text" placeholder='Type here to search your case' className='search-task__input' onChange={(e) => updateFilter(e.target.value)}/>
            <div className='search-task__filters'>
                <button className='search-task__filter-button' onClick={showAllCases}>All cases</button>
                <button className='search-task__filter-button' onClick={showSpecialCases}>Special cases</button>
            </div>
        </div>
    )
}

export default SearchTask;