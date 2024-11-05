
const SearchBar = ({ setQuery }) => {

    const handleQuery = async (e) => {
        e.preventDefault();
        const elem = e.target.elements;
        await setQuery((prev) => ({
            ...prev,
            topic: elem.topic.value,
            per_page: elem.per_page.value || 10,
        }));
        e.target.reset();
    };

    return <header>
        <form onSubmit={handleQuery}>
            <input type="number" name="per_page" placeholder="per page 10" min="1" max="30" step="1" />
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="topic"
                required
            />
            <button type="submit" >Search</button>
        </form>
    </header>

}
export default SearchBar;