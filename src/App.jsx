import React, { useState, useEffect } from "react";
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(true);

  useEffect(() => {
    let interval;
    if (counting) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [counting]);

  const stopCounter = () => {
    setCounting(!counting);
  };

  const reset = () => {
    setCount(0);
    setCounting(true);
  };

  return (
    <div className='main-ctr'>
      <div className='sub-ctr'>
        <h2>{count}</h2>
        <div className='btn-ctr'>
          <Button 
            variant="contained" 
            onClick={stopCounter} 
            color="success"
          >
            {counting ? "Stop" : "Continue"}
          </Button>
          <Button 
            variant="contained" 
            onClick={reset} 
            color="error"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

