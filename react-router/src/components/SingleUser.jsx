import { Link } from "react-router-dom";
import styles from "./SingleUser.module.scss"

const SingleUser = ({data}) => {

  return (
    <>
    <div className={styles.User}>
         <img className={styles.imgUser} src={data.image} alt={data.username} />
         <span >@{data.username}</span>
          <h5 >{data.firstName} {data.lastName}</h5>
      <Link to={`/users/${data.id}`} className={styles.Link}>go to Details</Link>
    </div>
    </>
  )
}

export default SingleUser