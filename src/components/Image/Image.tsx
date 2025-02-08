import myImage from '@assets/images/example.jpg';
import styles from './Image.module.scss';

const Image = () => {
  return (
    <div className={styles.container}>
      <h2>Image</h2>
      <img src={myImage} alt="Example" />
    </div>
  );
};

export default Image;
