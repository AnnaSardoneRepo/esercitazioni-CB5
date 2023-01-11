import { useEffect, useState } from 'react';
import './App.css';

const API_ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get USERS() {
    return `${this.BASE}/users`;
  }

}


function useRandomUser() {
  const [randomUser, setRandomUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewUser = () => {
    setLoading(true);
    setError(null);

    fetch(API_ENDPOINT.USERS)
      .then(response => response.json())
      .then(user => {
        console.log({ user });
        setRandomUser(user)
      })          
      .catch((error) => {
        console.error(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchNewUser();
  }, [])

  return { randomUser, loading, error, fetchNewUser };
}

function App() {
  const { 
    randomUser, 
    loading, 
    error, 
    fetchNewUser 
  } = useRandomUser();

  if(loading){
    return `Caricamento in corso...`;
  }

  if(error || !randomUser){
    return `Errore di connessione al server, provare a ricaricare la pagina`;
  }

  const {avatar, id, first_name, last_name, email} = randomUser;

  return (
    <div className="App">
      <section className='container'>
      <img className='avatar' src={avatar}></img>
      <h1>{first_name} {last_name}</h1>
      <h2>{email}</h2>
      
      <button className='btn' onClick={() => fetchNewUser()}>Change User</button>
    </section>
    </div>
  );
}

export default App;