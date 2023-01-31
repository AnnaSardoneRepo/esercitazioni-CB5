import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../routes/styles/user.module.scss";

export default function User() {
    let {user} = useParams(); 

    const navigate = useNavigate();
 
    const [userData, setUserData] = useState({})

 useEffect(()=>{
  fetch(`https://dummyjson.com/users/${user}`)
  .then(res => res.json())
  .then(data => setUserData(data))
 },[user])

 const onClickPrevBtn = () => navigate(`/users/${--user}`);
 const onClickNextBtn = () => navigate(`/users/${++user}`);

  return (
    <div className={styles.User}>
      <h1>Single User</h1>
  
      <div className={styles.container}>
        <Link to={`/users`} className={styles.Link}>See All Users</Link>
        <Link to={`/`} className={styles.Link}>Back to Home</Link>
        </div>
        
    
        <div className={styles.Info}>
        <img className={styles.avatar} src={userData?.image} alt="avatar" />
          <h2>Info about {userData?.firstName}</h2>
          <p>first name: {userData?.firstName} | last name: {userData?.lastName}</p>
          <p>maiden name: {userData?.maidenName} | age: {userData?.age}</p>
          <p>email: {userData?.email} | phone: {userData?.phone}</p>
          <p>birthday: {userData?.birthDate} | blood Group: {userData?.bloodGroup}</p>
          <p>height: {userData?.height} | weigth: {userData?.weight}</p>
          <p>eyes Color: {userData?.eyeColor} | hair: {userData?.hair?.type} {userData?.hair?.color}</p>
          <p>        <button onClick={onClickPrevBtn}>prev</button> |  <button onClick={onClickNextBtn}>next</button></p>
        </div>

    </div>
  );
}
