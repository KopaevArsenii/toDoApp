import './information.css'

const Information = ({length, specialLenght}) => {
    return(
        <div className='information__wrapper'>
            <p className='information__tasks'>You have {length} unfinished cases</p>
            <p className='information__special-tasks'>Special cases: {specialLenght}</p>
        </div>
    )
}

export default Information;