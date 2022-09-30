import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  smallImage,
  largeImage,
  description,
  onClick,
}) => {
  return (
    <GalleryItem onClick={onClick}>
      <Image src={smallImage} alt={description} data-large={largeImage} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};
