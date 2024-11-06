
import toast, { Toaster } from 'react-hot-toast';
import s from "./SearchBar.module.css";
import { MdSearch } from "react-icons/md";

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
            <input type="number" name="per_page" placeholder="PerPage" min="1" max="30" step="1" className={s.inputNum} />
            <input
                className={s.inputText}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="topic"
            />
            <button type="submit"><MdSearch className={s.btn} /></button>
        </form>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
    </header>

}
export default SearchBar;