import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../routes/styles/post.module.scss";

export default function Post() {
    let {post} = useParams(); 

    const navigate = useNavigate();
 
    const [postData, setPostData] = useState({})

 useEffect(()=>{
  fetch(`https://dummyjson.com/posts/${post}`)
  .then(res => res.json())
  .then(data => setPostData(data))
 },[post])

 const onClickPrevBtn = () => navigate(`/posts/${--post}`);
 const onClickNextBtn = () => navigate(`/posts/${++post}`);

  return (
    <div className={styles.Post}>
      <h1>Single Post</h1>
  
      <div className={styles.container}>
        <Link to={`/posts`} className={styles.Link}>See All Posts</Link>
        <Link to={`/`} className={styles.Link}>Back to Home</Link>
        </div>
        
    
        <div className={styles.Info}>
          <h2>Title {postData?.title}</h2>
          <p>Body: {postData?.body}</p>
          <p>        <button onClick={onClickPrevBtn}>prev</button> |  <button onClick={onClickNextBtn}>next</button></p>
        </div>

    </div>
  );
}
