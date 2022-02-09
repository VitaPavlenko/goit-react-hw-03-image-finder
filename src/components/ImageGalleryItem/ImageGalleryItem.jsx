const ImageGalleryItem = ({ carts, onModalOpen }) => {
  return (
    <>
      {carts.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} className="gallery-item">
            <a
              onClick={() => {
                onModalOpen(largeImageURL);
              }}
            >
              <img src={webformatURL} alt="" />
            </a>
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;
