import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import SinglePost from '../components/SinglePost';
import styles from "../routes/styles/posts.module.scss"

export default function Root() {

  const [postList, setPostList] = useState([])

  useEffect(() =>{
    fetch(`https://dummyjson.com/posts/`)
    .then(res => res.json())
    .then(data => setPostList(data.posts))
}, [])

    return (
    
      <div className={styles.Posts}>
        <div className={styles.Header}>
          <h1>All Posts</h1>
          <Link to={`/messages`} className={styles.Link}>Go to Quotes</Link>
          <Link to={`/users`} className={styles.Link}>Go to Users</Link>
          <Link to={`/`} className={styles.Link}>Back to Home</Link>
        </div>
        <div className={styles.List}>
          {
            postList.map((posts) => (
            <SinglePost 
            data={(posts)}
            key={posts?.id}/>
            ))
          }
        </div>
      </div>
    );
  }