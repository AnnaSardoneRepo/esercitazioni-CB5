import Navbar from "@/components/navbar";
import styles from "./index.scss";

const MainLayout = ({children}) => {
  return (
    <div className={styles.MainLayout}>
        <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout