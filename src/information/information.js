import './information.css'

const Information = ({length, specailLenght}) => {
    return(
        <div className='information__wrapper'>
            <p className='information__tasks'>You have {length} unfinished cases</p>
            <p className='information__special-tasks'>Special cases: {specailLenght}</p>
        </div>
    )
}

export default Information;