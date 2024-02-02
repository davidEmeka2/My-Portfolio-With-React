import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'




function Loading() {

    const [number, setNumber] = useState(0)

  const[loading,setLoading] = useState(true)


  const interval = setInterval(()=>{
    if(number === 100){
      clearInterval(interval)
      setNumber(number)
    }
      else{
       setNumber(number + 10)
      }
      
  },600)

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
        <p className='number text-5xl'>{number}%</p>
        </div>
        </div>
        }
       
    </>
  )

}

export default Loading