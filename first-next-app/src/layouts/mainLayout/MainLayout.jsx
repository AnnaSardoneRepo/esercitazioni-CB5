import Navbar from "../../components/navbar";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout