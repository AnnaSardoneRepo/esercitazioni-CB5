import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
    return (
      <>
        <div className={styles.MainLayout}>

          {children}
        </div>
        <Outlet />
      </>
    );
  };
  
  export default MainLayout;