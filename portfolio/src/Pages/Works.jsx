import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import smoothSkinPic from "../assets/smoothSkin.jpg"
import figmaProjectPic from "../assets/Figma resturant work.png"
import todoListPic from "../assets/todo list.png"
import fightingGamePic from "../assets/fighting game image.png"
import provestPic from "../assets/provest screen shot.png"
import davidsWebStore from "../assets/David's Webstore.png"
import welcomeDesignPic from "../assets/Welcome User.png"
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


 const [webDev, setWebdev] = useState(true)
 const [grahicsDes, setGraphicsDes] = useState(true)
 const [uiUX, setUiUX] = useState(true)
 const [photoEdi, setPhotoEdi] = useState(true)

 const [realBG, setRealBG] = useState("worksPageSec")

 const [allWorksPad, setAllWorksPad] = useState("allWorks")
 
 const allWork = ()=>{
  setWebdev(true)
  setGraphicsDes(true)
  setUiUX(true)
  setPhotoEdi(true)
  setRealBG("worksPageSec")
  setAllWorksPad("allWorks")
 }

  const webDevelopment = ()=>{
  setWebdev(true)
  setGraphicsDes(false)
  setUiUX(false)
  setPhotoEdi(false)
  setRealBG("worksPageSec_Web")
  setAllWorksPad("allWorks")
   }

   const grahicsDesigning = ()=>{
    setWebdev(false)
    setGraphicsDes(true)
    setUiUX(false)
    setPhotoEdi(false)
    setRealBG("worksPageSec_grap")
    setAllWorksPad("allWorks_grap")
     }

     const uiUxDesigning = ()=>{
      setWebdev(false)
      setGraphicsDes(false)
      setUiUX(true)
      setPhotoEdi(false)
      setRealBG("worksPageSec_ui")
      setAllWorksPad("allWorks_ui")
       }
  
       const photoEditing = ()=>{
        setWebdev(false)
        setGraphicsDes(false)
        setUiUX(false)
        setPhotoEdi(true)
        setRealBG("worksPageSec_photo")
        setAllWorksPad("allWorks_photo")
         }  


  return (
   <>
<p style={fontColor2} className='text-center'><span style={font}>My Portfolio</span></p>
<div data-aos ="fade-right" style={font}><h1 className='text-7xl text-center worksH1' style={fontColor2}>Works</h1></div>

<section className={realBG} style={font} >

  <div className='selectCategory' style={fontColor2}>

        <div className='text-center workCategory' onClick={allWork}>
          <p onClick={changeInMe}>All Works</p>
          {inMe && <div className='underLine' style={bgColor2}></div>}
        </div> 

        <div className='text-center workCategory' onClick={webDevelopment}>

          <p onClick={changeInMe2}>Web Development</p>
          {inMe2 && <div className='underLine' style={bgColor2}></div>}

          </div>
     
        <div className='text-center workCategory' onClick={grahicsDesigning}>
          <p onClick={changeInMe3}>Graphic Design</p>
          {inMe3 && <div className='underLine' style={bgColor2}></div>}

          </div>
      
        <div className='text-center workCategory' onClick={uiUxDesigning}>
          <p onClick={changeInMe4}>UI/UX</p>
          {inMe4 && <div className='underLine' style={bgColor2}></div>}
          </div>
       
        <div className='text-center workCategory' onClick={photoEditing}>
          <p onClick={changeInMe5}>photo Editing</p>
          {inMe5 && <div className='underLine' style={bgColor2}></div>}
          </div> 
        
  </div>

<div className="lighterBG" style={bgColor2} data-aos="slide-right"> </div>
<div className="DarkerBG" style={bgColor2} data-aos="slide-left"> </div>



<section className={allWorksPad} style={font}>

{/* work 1 */}

{webDev && <div data-aos ="fade-down" className="work1">
  
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

  </div>}

{/* work 2 */}

{uiUX && <div  className="work2" data-aos ="fade-down" >

<div className='work2FlexerA' >

  <div className='ResturantPicDiv' style={bgColor1}><img src={figmaProjectPic} alt="" className='figmaResturant'/>
  </div>

<div className='text-center  figmaTxt'>
  
<h1 className='text-4xl text-center pb-3'><span>Restaurant Dish Animation</span></h1>
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

</div>}

{/* work 3 */}

{ photoEdi && <div data-aos ="fade-down" className="work3H" >

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

</div>}




{/* work 4 */}

{webDev &&<div data-aos ="fade-down" className="work4">
  

  <div className='work1FlexerA' >

  <div className='fightingGamePic' style={bgColor1}><img src={fightingGamePic} alt="" className='todoList' /></div>


<div  className='text-center todoTxt'>
  <h1 className='text-4xl text-center pb-3'><span>Fighting Game</span></h1>
  <p>
  Crafted a dynamic fighting game leveraging advanced JavaScript techniques. Utilizing vanilla JS, I implemented real-time player controls and interactive movements. Mastered DOM manipulation for seamless player experiences.
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

  </div>}

{/* work 5 */}


{grahicsDes && <div data-aos ="fade-down" className="work4">
  

  <div className='work1FlexerA' >

  <div className='provestPic' style={bgColor1}><img src={provestPic} alt="" className='todoList' /></div>


<div  className='text-center todoTxt'>
  <h1 className='text-4xl text-center pb-3'><span>Provest Brand Identity</span></h1>
  <p>
  Reaching New Heights with Real Estate Branding. In the cutthroat real estate industry, our dynamic brand identity design embodies elegance, trust, and forward-thinking vision, laying the groundwork for unmatched success.
  </p>
  </div>

  </div>

<div className='work1FlexerB'>

  <div className='workSpacer' ></div>
  
<div data-aos ="fade-right" className='todoButtons'>

<a href="https://www.behance.net/gallery/194489813/Provest-Brand-Identity" target='_blank' className='DownloadImgBtn'>View in Behance</a>

</div>

</div>

  </div>}


{/* work 6  */}


{webDev && <div data-aos ="fade-down" className="work4">
  

  <div className='work1FlexerA' >

  <div className='davidsWebstore' style={bgColor1}><img src={davidsWebStore} alt="" className='todoList' /></div>


<div  className='text-center todoTxt'>
  <h1 className='text-4xl text-center pb-3'><span>Fake Web Store</span></h1>
  <p>
 It's a showcase of React's prowess and API integration. With React's cutting-edge technology, coupled with seamless API utilization, Davids Webstore delivers a browsing experience like no other. Explore the future of web development, where React and APIs come together to redefine online shopping

  </p>
  </div>

  </div>

<div className='work1FlexerB'>

  <div className='workSpacer' ></div>
  
<div data-aos ="fade-right" className='todoButtons'>
<a href="https://davids-web-store.vercel.app" target='_blank' className='viewSite'>View Site</a>

<a href="https://github.com/Davia222/Davids-Web-Store.git" target='_blank' className='gitHubRepo'>GitHub Repo</a>

</div>

</div>

  </div>}


{/* work 7  */}


{uiUX && <div data-aos ="fade-down" className="work4">
  

  <div className='work1FlexerA' >

  <div className='welcomeDesignPic' style={bgColor1}><img src={welcomeDesignPic} alt="" className='todoList' /></div>


<div  className='text-center todoTxt'>
  <h1 className='text-4xl text-center pb-3'><span>Animated Welcome Screen</span></h1>
  <p>
  Explore my UI/UX expertise through a captivating interactive welcome screen on Figma. With advanced animations, the welcome screen not only greets users but also leaves a lasting impression.
  </p>
  </div>

  </div>

<div className='work1FlexerB'>

  <div className='workSpacer' ></div>
  
<div data-aos ="fade-right" className='todoButtons'>

<a href="https://www.figma.com/file/vQAEPjfu2XlRMtgpASCGNc/welcome-message?type=design&node-id=0%3A1&mode=design&t=XZTvBC2xnusWvuQL-1" className='viewInFigmaBtn' target='_blank'>View In Figma</a>

</div>

</div>

  </div>}


</section>

<div className='viewmoreFlexer'>

<Link to="/Services" className='viewMore2'  data-aos ="fade-up" ><span style={font}>Check out my Services</span></Link>

</div>

</section>

<div className='strecher2'></div>

<div className='copyright' style={font}><p style={fontColor2}> Copyright © 2024 General Dave</p></div>

   
   </>
  )
}

export default Works