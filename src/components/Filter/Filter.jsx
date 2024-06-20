import PropTypes from 'prop-types';
import style from './Filter.module.css';

const FilterList = ({ setFilter, filter }) => {
    const buttonsData = [
        {name: 'All', label: 'All'},
        {name: 'Active', label: 'Active'},
        {name: 'Completed', label: 'Done'},
        
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? `${style.active}` : '';
        return (
            <button type="button" 
            className={`${style.button} ${clazz}`}
                    key={name}
                    onClick={() => setFilter(name)}>
                    {label}
            </button>
        )
    });
    
    return (
        <div>
            {buttons}
        </div>
    );
}

FilterList.propTypes = {
    setFilter: PropTypes.func,
    filter:PropTypes.string,
};
export default FilterList;