import Link from "next/link";
import styles from "../../styles/Prova.module.scss"
export default function Prova() {
  return (
  <div className={styles.Prova}><h1>Lista 2</h1>


  <h5> Vai a <Link href="/prova/pippo">Pippo</Link></h5>
 <h5>  Vai a <Link href="/prova/pluto">Pluto</Link></h5>
<h5>  Vai a <Link href="/prova/topolino">Topolino</Link></h5>
<h5>  Vai a <Link href="/prova/paperina">Paperina</Link></h5>

  </div>
  )
}