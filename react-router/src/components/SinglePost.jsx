import { Link } from "react-router-dom";
import styles from "./SinglePost.module.scss"

const SinglePost = ({data}) => {

  return (
    <div className={styles.Post}>
         <h5 >{data.title}</h5>
          <p >{data.body}</p>
      <Link to={`/posts/${data.id}`} className={styles.Link}>go to Details</Link>
    </div>
  )
}

export default SinglePost