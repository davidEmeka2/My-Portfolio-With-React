import React, { useEffect, useState } from 'react'
import aboutImg from "../assets/resumeimg.png"
import aboutImg2 from "../assets/glichtEffect.gif"
import resume from '../assets/IgwezeDavidResume_main.pdf'
import { Link, useLocation } from 'react-router-dom'
import "./Pages.css"
import { refresh } from 'aos'





function About({font,bgColor1,bgColor2,fontColor1,fontColor2}) {

 
  const [scrollMe, setScrollMe] = useState("")
  const [scrollMe2, setScrollMe2] = useState("")
  const [scrollMe3, setScrollMe3] = useState("")
  const [scrollMe4, setScrollMe4] = useState("")
  const [scrollMe5, setScrollMe5] = useState("")
  const [scrollMe6, setScrollMe6] = useState("")
  const [scrollMe7, setScrollMe7] = useState("")
  const [scrollMe8, setScrollMe8] = useState("")
  

let scroller = document.documentElement.scrollTop



  const handleEvent = ()=>{
  

    if(scroller > 300){
      setScrollMe("scaleX")
      setScrollMe2("scaleX2")
      setScrollMe3("scaleX3")
      setScrollMe4("scaleX4")
      setScrollMe5("scaleX5")
      setScrollMe6("scaleX6")
      setScrollMe7("scaleX7")
      setScrollMe8("scaleX8")
    }
  
    if(scroller > 1000 ){
      setScrollMe("scaleX_")
      setScrollMe2("scaleX2_")
      setScrollMe3("scaleX3_")
      setScrollMe4("scaleX4_")
      setScrollMe5("scaleX5_")
      setScrollMe6("scaleX6_")
      setScrollMe7("scaleX7_")
      setScrollMe8("scaleX8_")
    }
  
    else if(scroller < 200 ){
      setScrollMe("scale-X")
      setScrollMe2("scale-X")
      setScrollMe3("scale-X")
      setScrollMe4("scale-X")
      setScrollMe5("scale-X")
      setScrollMe6("scale-X")
      setScrollMe7("scale-X")
      setScrollMe8("scale-X")
    }
  
    
  }
  
    window.addEventListener("scroll", handleEvent);
  
    useEffect(() => {
      window.scrollTo(0,0);
    }, [About]);
  

  const [bringDown, setBringDown] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      window.scrollTo(0,1000)

      setBringDown(false)

setTimeout(() => {
  window.scrollTo(0,0)
}, 100);
     
    }, 200);
  },[About])
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
 
  
  return (
   <>
   <section className='aboutPage' style={font}>

{/* image and H1's */}

    <div className='ImageAndH1s'>

    <div className='aboutPageImg' style={bgColor2} data-aos ="fade-right">

    <div className='AboutFrame'>

    <img src={aboutImg} alt="" style={{height:"97%",width:"97%"}}/>

    </div>

  </div>

  {/* h1's */}

<div className='myIntroAndAboutPageH1' style={fontColor2}>

   <p className='myIntro'>My Intro</p>

  <div data-aos ="fade-right" className='aboutPageH1'>

    <h1 className='text-6xl' style={fontColor2}>About Me</h1>

  </div>

{/* h1's closing Tag */}
  </div>

{/* image and H1's closing tag*/}
  </div>


<div className='pAboutMe' style={fontColor2}>

  <div className='aboutSpacer'></div>

<div className='aboutPageTxt' style={fontColor2} data-aos ="fade-up">

  <p style={fontColor2}>I'm Igweze Chukwuemeka David, a professional with expertise in front-end programming, UI/UX design, graphics, video editing, and photography. After high school, my coding path sparked an interest in creating visually appealing digital experiences. I thrive on accuracy and originality, instilling life into concepts. Join me on this thrilling adventure, and we'll bring your idea to reality. </p>

  <a href={resume} download className='DownloadResumeBtn' style={bgColor2}>Download CV</a>

  </div>

</div>

<div className='nameAndPhoneAlpha'>

<div className='aboutSpacer'></div>

<div className='mainNameAndPhone' data-aos ="fade-up" style={fontColor2}>

  <p>Name : Igweze Chukwuemeka David</p>
  <p>Phone : +234-704-433-4946</p>
  <p>Website : generaldave.com</p>
 </div>

</div>

<div className='myInterestAlpha' >

<div className='aboutSpacer'></div>

<div className='myInterest' style={fontColor2}>

<h1 style={fontColor2} className='text-center text-2xl' >My Interests</h1>

<p style={bgColor2} className='text-center pt-2 hobbies'>
  <span style={{backgroundColor:"white"}} className='hobbySpan'>Music | Game | Movie | Mountain Climbing</span>
   </p>

</div>

</div>


{/* my experitise */}

<section className='myExpertise' style={fontColor2}>


  <h1 className='text-6xl expertiseH1' style={fontColor2}>
  <p className='text-center text-base'>What I know</p>
    My Expertise </h1>

<div className="skill1" style={fontColor2}>


<div className="skill" data-aos="fade-right">

  <h1 className=''>Web Design (HTML,CSS and Javscript)</h1>

  <div className='percentAndScaleDiv'>

  <div className='WebDesignScale'>

 <div className={scrollMe} style={bgColor2} ></div>

</div>

<p className='percent'> 90%</p>

  </div>


</div>

<div className="skill" data-aos="fade-right"> 

<h1 className=''> React JS</h1>

  <div className='percentAndScaleDiv'>

  <div className='WebDesignScale'>

 <div className={scrollMe2} style={bgColor2}></div>

</div>

<p className='percent'> 90%</p>

</div>

</div>

</div>




<div className="skill2">


<div className="skill" data-aos="fade-right">

  <h1 className=''>Graphics Design </h1>

  <div className='percentAndScaleDiv'>

  <div className='WebDesignScale'>

 <div className={scrollMe3} style={bgColor2}></div>

</div>

<p className='percent'> 90%</p>

  </div>


</div>

<div className="skill-2" data-aos="fade-right"> 

<h1 className=''> Next JS</h1>

  <div className='percentAndScaleDiv'>

  <div className='WebDesignScale'>

 <div className={scrollMe4} style={bgColor2}></div>

</div>

<p className='percent'> 80%</p>

</div>

</div>


</div>

<div className="skill3">

<div className="skill" data-aos="fade-right">

  <h1 className=''>UI/UX</h1>

  <div className='percentAndScaleDiv'>

  <div className='WebDesignScale'>

 <div className={scrollMe} style={bgColor2}></div>

</div>

<p className='percent'> 90%</p>

  </div>


</div>

<div className="skill-2" data-aos="fade-right"> 

<h1 className=''> Typescript</h1>

  <div className='percentAndScaleDiv'>

  <div className='WebDesignScale'>

 <div className={scrollMe6} style={bgColor2}></div>

</div>

<p className='percent'> 85%</p>

</div>

</div>

</div>

<div className="skill4">

<div className="skill" data-aos="fade-right">

  <h1 className=''>Photo Editing (Photoshop)</h1>

  <div className='percentAndScaleDiv'>

  <div className='WebDesignScale'>

 <div className={scrollMe} style={bgColor2}></div>

</div>

<p className='percent'> 90%</p>

  </div>


</div>

<div className="skill-2" data-aos="fade-right"> 

<h1 className=''> Video Editing and Filmmaking </h1>

  <div className='percentAndScaleDiv'>

  <div className='WebDesignScale'>

 <div className={scrollMe} style={bgColor2}></div>

</div>

<p className='percent'> 90%</p>

</div>

</div>

</div>


</section>

<div className='toServiceButton'>
<Link to="/Works" className='viewWorks' style={bgColor2} data-aos ="fade-right"><span style={{color:"white"}}> Check Out My Works</span></Link>
</div>

</section>

  <div className='strecher2'></div>

<div className='copyright' style={font}><p style={fontColor2}> Copyright © 2024 General Dave</p></div>

{bringDown && <div style={{height:"1000px", width:"100px",flexShrink:"0"}}></div>}

   </>
  )
}

export default About