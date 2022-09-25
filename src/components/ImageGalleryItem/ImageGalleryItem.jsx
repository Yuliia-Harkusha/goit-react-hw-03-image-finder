import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  smallImage,
  largeImage,
  description,
  openModal,
}) => {
  return (
    <GalleryItem onClick={() => openModal(largeImage)}>
      <Image src={smallImage} alt={description} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};
