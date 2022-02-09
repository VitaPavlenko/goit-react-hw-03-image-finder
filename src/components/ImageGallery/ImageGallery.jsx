import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ carts }) => {
  return (
    <>
      <ul className="gallery">
        <ImageGalleryItem carts={carts} />
      </ul>
    </>
  );
};

export default ImageGallery;
