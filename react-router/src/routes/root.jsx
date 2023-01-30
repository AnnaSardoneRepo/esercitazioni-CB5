import {Link} from "react-router-dom";
import styles from "./styles/root.module.scss";

    export default function Root() {
    return (
      <>
        <div className={styles.Root}>
          <h1>Citazioni</h1>
          <Link to="/messages/1">Vai alla prima citazione</Link>
        </div>
        <div className={styles.Root}>
          <h1>Utenti</h1>
          <Link to="/users/1">Vai al primo utente</Link>
        </div>
      </>
    );
  }