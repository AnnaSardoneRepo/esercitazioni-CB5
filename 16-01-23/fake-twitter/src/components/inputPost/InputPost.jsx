import React from 'react'
import "./index.css";

 function InputPost() {
  return (
    <div>
       <form>
        <input type="text" placeholder='inserisci post'/>
        <input className='button' value="send" type="submit" />
      </form>
    </div>
  )
}

export default InputPost