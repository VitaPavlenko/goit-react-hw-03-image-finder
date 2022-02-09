import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ carts, onModalOpen }) => {
  return (
    <>
      <ul className="gallery">
        <ImageGalleryItem carts={carts} onModalOpen={onModalOpen} />
      </ul>
    </>
  );
};

export default ImageGallery;
