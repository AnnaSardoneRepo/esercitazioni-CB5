import React from "react";
import { ENDPOINTS } from "../constants/Endpoints";
import { useFetch } from "../hooks/use-fetch";

export const Appliances = () => {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.APPLIANCES);

  return (
    <div>
      {JSON.stringify(data)}
      <button onClick={refetch}>Reload</button>
    </div>
  );
};

export default Appliances;
