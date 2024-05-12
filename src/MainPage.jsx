import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className='mainPageWrapper'>
            <h1>To-Do List App</h1>
            <Link to='/todos'><button>Let's start!</button></Link>
        </div>
    )
}

export default MainPage;