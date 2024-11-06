const ImageCard = ({ image: { urls, alt_description, description, likes }, handleModal }) => {

    return <div>
        <img src={urls.small} alt={alt_description} onClick={() => handleModal(urls.regular, alt_description, description, likes)} />
    </div>
}
export default ImageCard;