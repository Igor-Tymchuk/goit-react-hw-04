
import toast, { Toaster } from 'react-hot-toast';
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {

    const handleQuery = async (e) => {
        e.preventDefault();
        const elem = e.target.elements;
        if (elem.topic.value === "") return toast.error("Search cannot be empty");
        await setQuery((prev) => ({
            ...prev,
            topic: elem.topic.value.trim().toLowerCase(),
            per_page: elem.per_page.value || 10,
            pagination: false
        }));
        e.target.reset();
    };

    return <header className={s.header}>
        <form onSubmit={handleQuery} className={s.form}>
            <input type="number" name="per_page" placeholder="per page 10" min="1" max="30" step="1" className={s.inputNum} />
            <input
                className={s.inputText}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="topic"
            />
            <button type="submit" className={s.btn}>Search</button>
        </form>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
    </header>

}
export default SearchBar;