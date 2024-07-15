import styles from "./style.module.css";

function GalleryBox({ imgSrc, title, desc }) {
  return (
    <div className={`${styles.gallery__box}`}>
      <img className="d-block w-100" src={imgSrc} alt="GalleryBox" />
      <div className={` ${styles.overlay}`}>
        <h5>{title}</h5>
        <p>{desc}</p>
        <a href="#">
          <i className="fa-solid fa-share-nodes"></i>
        </a>
        <a href="#">
          <i className="fa-regular fa-eye"></i>100
        </a>
        <a href="#">
          <i className="fa-regular fa-heart"></i>49
        </a>
      </div>
    </div>
  );
}

export default GalleryBox;
