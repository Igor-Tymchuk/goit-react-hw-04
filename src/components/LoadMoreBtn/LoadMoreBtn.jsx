import s from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({ setQuery }) => {

    const handleNewPage = () => {
        setQuery((prev) => ({ ...prev, page: prev.page += 1, pagination: true }))
    }

    return <button className={s.btn} onClick={handleNewPage}>Load more...</button >
}
export default LoadMoreBtn;