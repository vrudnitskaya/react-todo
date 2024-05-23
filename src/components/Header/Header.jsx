import { FaListCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ThememodeToggler from "../ThememodeToggler/ThememodeToggler";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <Link to="/"><button className={styles.logoBtn}><FaListCheck/></button></Link>
            <ThememodeToggler/>
        </header>
    );
}

export default Header;