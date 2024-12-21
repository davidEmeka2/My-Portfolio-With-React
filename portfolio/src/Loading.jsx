import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'




function Loading({font}) {

  

  const[loading,setLoading] = useState(true)

  const [number, setNumber] = useState(0)


  useEffect(() => {
  const interval = setInterval(() => {
    setNumber(prevNumber => {
      if (prevNumber < 100) {
        return prevNumber + 3;
      } else {
        clearInterval(interval);
        return prevNumber;
      }
    });
  }, 50);

  return () => clearInterval(interval); // Cleanup the interval when the component unmounts
}, []);

  useEffect(() => {
      
   setTimeout(() => {
    setLoading(false)
   }, 6000);
          
  }, [])

    
     

  return (
    <>

    {loading && <div className='mainLoader' >
        <div className='loadbox' >
          <div className='loadScale'></div>
        <p className='number text-5xl' style={font}>{number}%</p>
        </div>
        </div>
        }
       
    </>
  )

}

export default Loading
