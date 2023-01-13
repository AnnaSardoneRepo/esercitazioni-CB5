
import {useFetch} from '../hooks/useFetch';
import {ENDPOINTS} from '../constants/endpoints';



export  function BloodTypes() {



    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BLOOD_TYPES);

    if (loading) return `Loading...`;

    if (error) return `Errore!`;

    return (<section>
        <h2>Type: {data?.type}</h2>
         <h3>RH Factor: {data?.rh_factor} </h3>
         <h4>GROUP: {data?.group}</h4>
        
        <button onClick={refetch}>Next</button>
    </section>)
}
