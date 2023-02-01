import styles from "../../styles/Lista.module.scss";

export default function Lista({ users }) {
    return (
      <div className={styles.Lista}>

{users && users.map((user) => <h4 key={user.id}>{user.firstName} {user.lastName}</h4>)}
      </div>
    );
  }
  
  export async function getStaticProps() {

    const resUsers = await fetch("https://dummyjson.com/users");
    const dataUsers = await resUsers.json();
  
    return {
      props: {
        users: dataUsers.users,
      },
    };
  }