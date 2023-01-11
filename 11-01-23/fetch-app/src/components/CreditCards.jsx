import React from "react";
import { ENDPOINTS } from "../constants/Endpoints";
import { useFetch } from "../hooks/use-fetch";

export const CreditCards = () => {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.CREDIT_CARDS);

  return (
    <div>
      {JSON.stringify(data)}
      <button onClick={refetch}>Reload</button>
    </div>
  );
};

export default CreditCards;
