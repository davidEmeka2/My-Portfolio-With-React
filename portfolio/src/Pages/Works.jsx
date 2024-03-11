import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import smoothSkinPic from "../assets/smoothSkin.jpg"
import figmaProjectPic from "../assets/Figma resturant work.png"
import todoListPic from "../assets/todo list.png"
import fightingGamePic from "../assets/fighting game image.png"
import "../Pages/WorkPage.css"

function Works({font,bgColor1,bgColor2,fontColor1,fontColor2}) {


  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const [inMe, setInMe] = useState(true)
  const [inMe2, setInMe2] = useState(false)
  const [inMe3, setInMe3] = useState(false)
  const [inMe4, setInMe4] = useState(false)
  const [inMe5, setInMe5] = useState(false)
  const [inMe6, setInMe6] = useState(false)
  

  const changeInMe = ()=>{
    if(inMe === false){
      setInMe(true)
      setInMe2(false)
      setInMe3(false)
      setInMe4(false)
      setInMe5(false)
      setInMe6(false)
    }

  }

  const changeInMe2 = ()=>{
    if(inMe2 === false){
      setInMe(false)
      setInMe2(true)
      setInMe3(false)
      setInMe4(false)
      setInMe5(false)
      setInMe6(false)
    }

  }

  const changeInMe3 = ()=>{
    if(inMe3 === false){
      setInMe(false)
      setInMe2(false)
      setInMe3(true)
      setInMe4(false)
      setInMe5(false)
      setInMe6(false)
    }

  }

  const changeInMe4 = ()=>{
    if(inMe4 === false){
      setInMe(false)
      setInMe2(false)
      setInMe3(false)
      setInMe4(true)
      setInMe5(false)
      setInMe6(false)
    }

  }

  const changeInMe5 = ()=>{
    if(inMe === false){
      setInMe(false)
      setInMe2(false)
      setInMe3(false)
      setInMe4(false)
      setInMe5(true)
      setInMe6(false)
    }

  }

  const changeInMe6 = ()=>{
    if(inMe === false){
      setInMe(false)
      setInMe2(false)
      setInMe3(false)
      setInMe4(false)
      setInMe5(false)
      setInMe6(true)
    }

  }



  return (
   <>
<p style={fontColor2} className='text-center'><span style={font}>My Portfolio</span></p>
<div data-aos ="fade-right" style={font}><h1 className='text-7xl text-center worksH1' style={fontColor2}>Works</h1></div>

<section className='worksPageSec' style={font} >

  <div className='selectCategory' style={fontColor2}>

        <div className='text-center workCategory' onClick={changeInMe}>
          <p>All Works</p>
          {inMe && <div className='underLine' style={bgColor2}></div>}
        </div> 

        <div className='text-center workCategory' onClick={changeInMe2}>

          <p>Web Development</p>
          {inMe2 && <div className='underLine' style={bgColor2}></div>}

          </div>
     
        <div className='text-center workCategory' onClick={changeInMe3}>
          <p>Graphic Design</p>
          {inMe3 && <div className='underLine' style={bgColor2}></div>}

          </div>
      
        <div className='text-center workCategory' onClick={changeInMe4}>
          <p>UI/UX</p>
          {inMe4 && <div className='underLine' style={bgColor2}></div>}
          </div>
       
        <div className='text-center workCategory' onClick={changeInMe5}>
          <p>photo Editing</p>
          {inMe5 && <div className='underLine' style={bgColor2}></div>}
          </div> 
        
        <div className='text-center workCategory' onClick={changeInMe6}>
          <p>Video Editing</p>
          {inMe6 && <div className='underLine' style={bgColor2}></div>}
          </div> 
  </div>

<div className="lighterBG" style={bgColor2} data-aos="slide-right"> </div>
<div className="DarkerBG" style={bgColor2} data-aos="slide-left"> </div>



<section className='allWorks' style={font}>



<div data-aos ="fade-down" className="work1">
  
  {/* Works1 Flexer */}

  <div className='work1FlexerA' >

  <div className='todoListPic' style={bgColor1}><img src={todoListPic} alt="" className='todoList' /></div>


<div  className='text-center todoTxt'>
  <h1 className='text-4xl text-center pb-3'><span>To-Do App</span></h1>
  <p>
  Effortlessly manage tasks with my sleek ToDo app! Built with HTML, CSS, and JavaScript, it offers a minimalist design for easy organization. Add, edit, and mark tasks complete with style and simplicity. Stay productive on the go!
  </p>
  </div>

  </div>

<div className='work1FlexerB'>

  <div className='workSpacer' ></div>
  
<div data-aos ="fade-right" className='todoButtons'>

<a href="https://davidstodoapp.vercel.app/" target='_blank' className='viewSite'>View Site</a>

<a href="https://github.com/Davia222/To-do-App.git" target='_blank' className='gitHubRepo'>GitHub Repo</a>

</div>

</div>

  </div>

{/* work 2 */}

<div  className="work2" data-aos ="fade-down" >

<div className='work2FlexerA' >

  <div className='ResturantPicDiv' style={bgColor1}><img src={figmaProjectPic} alt="" className='figmaResturant'/>
  </div>

<div className='text-center  figmaTxt'>
  
<h1 className='text-4xl text-center pb-3'><span>Resturant Dish Animation</span></h1>
<p>
Enjoy a tasty animation! Using Figma, I crafted a dynamic restaurant dish animation that seamlessly switches between breakfast and lunch with a simple click. Experience a delightful visual transition between meals!
  </p>

  </div>

  </div>

 
  <div className='work2FlexerB' >

    <div className='workSpacer'></div>

<div data-aos ="fade-right" className='figButtons'>

<a href="https://www.figma.com/file/0p87jLur8wqSuNi999dj4b/Resturant-dish-Breakfast-and-lunch-switch?type=design&node-id=0%3A1&mode=design&t=JgE8RF2xJ2ahEXnl-1" className='viewInFigmaBtn' target='_blank'>View In Figma</a>

  </div>

  </div>

</div>

{/* work 3 */}

<div data-aos ="fade-down" className="work3H" >

<div className='work3PageFlexerA'>

   <div className='smoothSkinPicDiv2'  style={bgColor1} ><img src={smoothSkinPic} alt="" className='smoothSkinPic'/></div>
   

<div className='text-center smoothWorkTxt' >
<h1 className='text-4xl text-center pb-3' ><span>Face Smooth</span></h1>
<p>
Experience the transformation with my advanced Photoshop skills! I've expertly smoothed and perfected skin texture, utilizing advanced tricks to turn rough and wrinkled skin into a flawless masterpiece. Elevate your image with the power of professional photo editing!
</p>
  </div>

  </div>

  <div className='work3PageFlexerB'>

<div className="work3PageSpacer"></div>

  <div data-aos ="fade-right"  className='downloadPageButtons'>

  <a href={smoothSkinPic} download className='DownloadImgBtn'>Download Image</a>

  </div>

</div>

</div>




{/* work 4 */}

<div data-aos ="fade-down" className="work4">
  

  <div className='work1FlexerA' >

  <div className='fightingGamePic' style={bgColor1}><img src={fightingGamePic} alt="" className='todoList' /></div>


<div  className='text-center todoTxt'>
  <h1 className='text-4xl text-center pb-3'><span>Fighting Game</span></h1>
  <p>
  Effortlessly manage tasks with my sleek ToDo app! Built with HTML, CSS, and JavaScript, it offers a minimalist design for easy organization. Add, edit, and mark tasks complete with style and simplicity. Stay productive on the go!
  </p>
  </div>

  </div>

<div className='work1FlexerB'>

  <div className='workSpacer' ></div>
  
<div data-aos ="fade-right" className='todoButtons'>

<a href="https://fighting-game-gamma.vercel.app/" target='_blank' className='viewSite'>View Site</a>

<a href="https://github.com/Davia222/fighting-game.git" target='_blank' className='gitHubRepo'>GitHub Repo</a>

</div>

</div>

  </div>


</section>

<div className='viewmoreFlexer'>

<Link to="/Works" className='viewMore2'  data-aos ="fade-up" ><span style={font}>View More Works</span></Link>

</div>

</section>

<div className='strecher2'></div>

<div className='copyright' style={font}><p style={fontColor2}> Copyright © 2024 General Dave</p></div>

   
   </>
  )
}

export default Works