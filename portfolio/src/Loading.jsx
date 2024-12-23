import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'




function Loading({font}) {

  

  const[loading,setLoading] = useState(true)

  const [number, setNumber] = useState(0)


  useEffect(() => {
  const interval = setInterval(() => {
    setNumber(prevNumber => {
      if (prevNumber < 100) {
        return prevNumber + 1;
      } else {
        clearInterval(interval);
        return prevNumber;
      }
    });
  }, 60);

  return () => clearInterval(interval); 
}, []);

const numberUse = {width: number + "%", }

  useEffect(() => {
      
   setTimeout(() => {
    setLoading(false)
   }, 6000);
          
  }, [])

    
     

  return (
    <>

    {loading && <div className='mainLoader' >
        <div className='loadbox' >
          <div className='loadScale' style={numberUse}></div>
        <p className='number text-5xl' style={font}>{number}%</p>
        </div>
        </div>
        }
       
    </>
  )

}

export default Loading
