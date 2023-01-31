import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../routes/styles/post.module.scss";

export default function Post() {
    let {postId} = useParams(); 

    const navigate = useNavigate();
 
    const [postData, setPostData] = useState({})

 useEffect(()=>{
  fetch(`https://dummyjson.com/posts/${postId}`)
  .then(res => res.json())
  .then(data => setPostData(data))
 },[postId])

 const onClickPrevBtn = () => navigate(`/posts/${--postId}`);
 const onClickNextBtn = () => navigate(`/posts/${++postId}`);

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
