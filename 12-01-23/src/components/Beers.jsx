
import {useFetch} from '../hooks/useFetch';
import {ENDPOINTS} from '../constants/endpoints';



export  function Beers() {



    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BEERS);

    if (loading) return `Loading...`;

    if (error) return `Errore!`;

    return (<section>
         <h2>Brand: {data?.brand}</h2>
         <h3>Name: {data?.name} </h3>
         <h4>Alcohol: {data?.alcohol}</h4>
        <button onClick={refetch}>Next</button>
    </section>)
}
