import {Link } from "react-router-dom";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <h1>Welcome</h1>
      <Link to="/messages">Quotes</Link>
      <Link to="/users">Users</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}

export default App;
