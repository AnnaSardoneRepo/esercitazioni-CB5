import Link from "next/link";
import styles from "../../styles/Prova.module.scss"
export default function Prova() {
  return (
  <div className={styles.Prova}><h1>Lista 2</h1>


  <h5> <Link href="/prova/pippo">Vai a Pippo</Link></h5>
 <h5>  <Link href="/prova/pluto">Vai a Pluto</Link></h5>
<h5>  <Link href="/prova/topolino">Vai a Topolino</Link></h5>
<h5>  <Link href="/prova/paperina">Vai a Paperina</Link></h5>

  </div>
  )
}