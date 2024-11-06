import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ data, handleModal }) => {
    return <ul>
        {data.map(image => <li key={image.id}>
            <ImageCard image={image} handleModal={handleModal} />
        </li>)}
    </ul>
}
export default ImageGallery;