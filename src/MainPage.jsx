import { Link } from "react-router-dom";
import img from './assets/imgMainPage.jpg';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.mainPageWrapper}>
            <h1>To-Do List App</h1><img src={img} alt="Todo list image"/>
            
            <Link to='/todos'><button>Let's start!</button></Link>
        </div>
    )
}

export default MainPage;