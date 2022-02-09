import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ carts, onModalOpen }) => {
  return (
    <>
      {carts.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} className={s['gallery-item']}>
            <a
              onClick={() => {
                onModalOpen(largeImageURL);
              }}
            >
              <img className={s['gallery-img']} src={webformatURL} alt="" />
            </a>
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;
