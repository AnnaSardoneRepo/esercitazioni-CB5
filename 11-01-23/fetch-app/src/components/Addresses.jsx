import React from "react";
import { ENDPOINTS } from "../constants/Endpoints";
import { useFetch } from "../hooks/use-fetch";

export const Addresses = () => {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.ADDRESSES);

  return (
    <div>
      {JSON.stringify(data)}
      <button onClick={refetch}>Reload</button>
    </div>
  );
};

export default Addresses;
