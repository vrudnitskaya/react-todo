import InputWithLabel from "./InputWithLabel";

const Search = ({onSearch, searchTerm}) => {
    const handleSearchInput = (event) => {
        onSearch(event.target.value);
    };
    
    return (
        <InputWithLabel
            id="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInput} />
    )
}

export default Search;