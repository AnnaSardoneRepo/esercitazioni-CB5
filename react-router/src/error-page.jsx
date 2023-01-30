import { useRouteError, useNavigate } from "react-router-dom";
import errorImage from "./images/error-img.jpg";
import styles from './App.module.scss';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className={styles.Error} >
      <img className={styles.image} src={errorImage} alt="error image" />
      <p>
      <button className={styles.buttons} onClick={() => navigate("/")}>Torna alla Homepage</button>
      </p>
    </div>
  );
}