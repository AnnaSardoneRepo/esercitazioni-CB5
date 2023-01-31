import {Link} from "react-router-dom";
import styles from "./styles/root.module.scss";

    export default function Root() {
    return (
      <>
        <div className={styles.Root}>
          <h1>Quotes</h1>
          <Link to="/messages/1">Go to the first quote</Link>
        </div>
        <div className={styles.Root}>
          <h1>Users</h1>
          <Link to="/users/">Go to Users</Link>
        </div>
        <div className={styles.Root}>
          <h1>Homepage</h1>
          <Link to="/">Back to Home</Link>
        </div>
      </>
    );
  }