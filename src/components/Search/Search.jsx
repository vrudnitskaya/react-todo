import InputWithLabel from "../InputWithLabel/InputWithLabel";
import styles from './Search.module.css';

const Search = ({onSearch, searchTerm}) => {
    const handleSearchInput = (event) => {
        onSearch(event.target.value);
    };
    
    return (
        <div className={styles.searchWrapper}>
            <InputWithLabel
            id="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInput} 
            />
        </div>
        
    )
}

export default Search;