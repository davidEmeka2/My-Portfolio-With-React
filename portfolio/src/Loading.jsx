import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'




function Loading({font}) {

    const [number, setNumber] = useState(0)

  const[loading,setLoading] = useState(true)


  const interval = setInterval(()=>{
    
     
    }
      if (number < 100){
       setNumber(prevState + 10)
      }
      
  },600)

  useEffect(() => {
   setTimeout(() => {
    setLoading(false)
   }, 6000);

      
      
       if(number === 100){
      clearInterval(interval)
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
