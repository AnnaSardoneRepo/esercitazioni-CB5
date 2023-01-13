
import {useFetch} from '../hooks/useFetch';
import {ENDPOINTS} from '../constants/endpoints';



export  function Users() {



    const {data, error, loading, refetch} = useFetch(ENDPOINTS.USERS);

    if (loading) return `Loading...`;

    if (error) return `Errore!`;

    return (<section>
        <img src={data?.avatar} alt="avatar" />
        <h2>{data?.first_name} {data?.last_name}</h2>
       <h3>{data?.username}</h3>
       <h4>{data?.emplyment?.title}</h4>
        <button onClick={refetch}>Next</button>
    </section>)
}
