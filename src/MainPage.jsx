import { Link } from "react-router-dom";
import img from './assets/imgMainPage.jpg';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.mainPageWrapper}>
            <img src={img} alt="Todo list image"/>
            <h1>To-Do List App</h1>
            <Link to='/todos'><button>Let's start!</button></Link>
        </div>
    )
}

export default MainPage;