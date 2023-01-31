import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import SingleUser from '../components/SingleUser';
import styles from "../routes/styles/users.module.scss"

export default function Root() {

  const [userList, setUserList] = useState([])

  useEffect(() =>{
    fetch(`https://dummyjson.com/users/`)
    .then(res => res.json())
    .then(data => setUserList(data.users))
}, [])

    return (
      <div className={styles.Users}>
        <div className={styles.Header}>
          <h1>All Users</h1>
          <Link to={`/`} className={styles.Link}>Torna alla Home</Link>
        </div>
        <div className={styles.List}>
          {
            userList.map((users) => (
            <SingleUser 
            data={(users)}
            key={users?.id}/>
            ))
          }
        </div>
      </div>
    );
  }