import Link from "next/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/lista">Utenti Lista</Link>
            </li>
            <li>
                <Link href="/prova">Prova Utenti</Link>
            </li>
          
        </ul>
    </div>
  )
}

export default Navbar