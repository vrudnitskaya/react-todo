import PropTypes from 'prop-types';
import style from './Filter.module.css';

const FilterList = ({ setFilter }) => {
    const handleFilterClick = (e) => {
        setFilter(e.target.value);
    }
    return (
        <div className={style.filter}>
            <button value='All'
                onClick={handleFilterClick}
                className={style.leftBtn}>
                All
            </button>
            <button value='Active'
                onClick={handleFilterClick}
                className={style.middleBtn}>
                Active
            </button>
            <button value='Completed'
                onClick={handleFilterClick}
                className={style.rightBtn}>
                Done
            </button>
        </div>
    )
}

FilterList.propTypes = {
    setFilter: PropTypes.func
};
export default FilterList;