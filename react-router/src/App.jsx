import {Link } from "react-router-dom";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <h1>Welcome</h1>
      <Link to="/messages">Citazioni</Link>
      <Link to="/users">Utenti</Link>
    </div>
  );
}

export default App;
