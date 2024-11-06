import s from "./ImageModal.module.css"
import Modal from 'react-modal';

// { url, alt, description, likes, handleModal }
const ImageModal = ({ isOpen, onClose, imageData: { urls, alt_description, description, likes } }) => {


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={s.modalOverlay}
            className={s.modalContent}
            ariaHideApp={false}
            closeTimeoutMS={300}
        >
            <button onClick={onClose}>close</button>
            <p>{likes}</p>
            <img src={urls?.regular} alt={alt_description} />
            <p>{description}</p>
        </Modal>
    );
}

export default ImageModal;