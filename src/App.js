import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState("")

  const CatThings = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFact(res.data.fact);
      });
  };
  useEffect(() => {
    CatThings()
  }, [])

  return (
    <div className="cat">

      <h3>Cat Facts You Should Know 😻</h3>
      <hr></hr>

      <div className='main_fact'>
        <a href="https://www.freeiconspng.com/img/40358" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/baby-cat-png-12.png" width="350" alt="baby cat png" /></a>

        <div className='main_fact_two'>
          <button onClick={CatThings}>Generate Cat Facts</button>
          <marquee behavior="scroll-through" direction="left-to-right">FACT</marquee>
          <h5 className='fact_details'>
            {/* <span>FACT</span> <br /> */}
            {catFact}
          </h5>
        </div>
      </div>

      <p>Created By <a href="https://greenojegwo.netlify.app/">Green</a></p>
    </div>
  )
}
export default App;