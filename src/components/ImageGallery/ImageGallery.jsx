import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <Gallery>
      {items.length > 0 &&
        items.map(({ id, webformatURL, largeImageURL, tags, index }) => (
          <ImageGalleryItem
            key={id}
            smallImage={webformatURL}
            largeImage={largeImageURL}
            description={tags}
            onClick={onClick}
          />
        ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      smallImage: PropTypes.string,
      largeImage: PropTypes.string,
    })
  ).isRequired,
  openModal: PropTypes.func,
};
