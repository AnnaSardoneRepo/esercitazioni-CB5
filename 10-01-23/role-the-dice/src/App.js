
import './App.css';
import { useState } from 'react';


const App = () => {
  const [nums, setNums] = useState([]);
const [isDisabled, setDisabled] = useState(false)

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNums((oldNums)=> {
      const newNum = randomNumberInRange(1, 6)
      if (nums.length == 5  ) {
        setDisabled(true)
      }
      return [...oldNums, newNum];
    })

  };

  return (
    <section className="App">
      <header className="App-header">
    <div className='container'>
           <h1>Roll The Dice</h1>
      <span >Your Number is: </span>
<div className='numbers'>
      {nums.map((num)=>{
        return <span >{num}, </span>
      })}
</div>
      {/* {nums.length < 6 && <button  className="btn" onClick={handleClick}>Roll the Dice</button>} */}
      <button  disabled={isDisabled} className="btn" onClick={handleClick}>Roll the Dice</button>
      
    </div>
    </header>
    </section>
  );
};

export default App;