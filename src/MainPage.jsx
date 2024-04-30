import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className='mainPageWrapper'>
            <h1>To-Do List App</h1>
            <button onClick={() => navigate('/todos')}>Let's start!</button>
        </div>
    )
}

export default MainPage;