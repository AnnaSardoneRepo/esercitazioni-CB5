import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/quote.module.scss";

export default function Quote() {
    let {quote} = useParams(); // quote, era params, =  oggetto

    const navigate = useNavigate();
 
    const [quoteData, setQuoteData] = useState({})

 useEffect(()=>{
  fetch(`https://dummyjson.com/quotes/${quote}`)
  .then(res => res.json())
  .then(data => setQuoteData(data))
 },[quote])

 const onClickPrevBtn = () => navigate(`/messages/${--quote}`);
 const onClickNextBtn = () => navigate(`/messages/${++quote}`);

  return (
    <div className={styles.Quote} id={quoteData.id}>
      <div className={styles.content}>
      <h3>{quoteData.quote}</h3>
      <p>{quoteData.author}</p>
      </div>
    <div className={styles.buttons}>
    <button onClick={onClickPrevBtn}>Prev</button>
        <button onClick={() => navigate("/")}>Torna alla Homepage</button>
        <button onClick={onClickNextBtn}>Next</button>
    </div>
    </div>
  );
}
