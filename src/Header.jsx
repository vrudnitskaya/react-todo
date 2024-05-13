import { FaListCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <Link to="/"><button><FaListCheck/></button></Link>
        </div>
    );
}

export default Header;