import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/portfolioBgImg1/image_part_001.png"
import img2 from "../assets/portfolioBgImg1/image_part_002.png"
import img3 from "../assets/portfolioBgImg1/image_part_003.png"
import img4 from "../assets/portfolioBgImg1/image_part_004.png"
import img5 from "../assets/portfolioBgImg1/image_part_005.png"
import img6 from "../assets/portfolioBgImg1/image_part_006.png"
import img7 from "../assets/portfolioBgImg1/image_part_007.png"
import img8 from "../assets/portfolioBgImg1/image_part_008.png"
import img9 from "../assets/portfolioBgImg1/image_part_009.png"
import img10 from "../assets/portfolioBgImg1/image_part_010.png"
import img11 from "../assets/portfolioBgImg1/image_part_011.png"
import img12 from "../assets/portfolioBgImg1/image_part_012.png"
import img13 from "../assets/portfolioBgImg1/image_part_013.png"
import img14 from "../assets/portfolioBgImg1/image_part_014.png"
import img15 from "../assets/portfolioBgImg1/image_part_015.png"
import img16 from "../assets/portfolioBgImg1/image_part_016.png"
import img17 from "../assets/portfolioBgImg1/image_part_017.png"
import img18 from "../assets/portfolioBgImg1/image_part_018.png"
import img19 from "../assets/portfolioBgImg1/image_part_019.png"
import img20 from "../assets/portfolioBgImg1/image_part_020.png"
import img21 from "../assets/portfolioBgImg1/image_part_021.png"
import img22 from "../assets/portfolioBgImg1/image_part_022.png"
import img23 from "../assets/portfolioBgImg1/image_part_023.png"
import img24 from "../assets/portfolioBgImg1/image_part_024.png"
import img25 from "../assets/portfolioBgImg1/image_part_025.png"

import img1_2 from "../assets/PortfolioBgImg2/image_part_001.png"
import img2_2 from "../assets/PortfolioBgImg2/image_part_002.png"
import img3_2 from "../assets/PortfolioBgImg2/image_part_003.png"
import img4_2 from "../assets/PortfolioBgImg2/image_part_004.png"
import img5_2 from "../assets/PortfolioBgImg2/image_part_005.png"
import img6_2 from "../assets/PortfolioBgImg2/image_part_006.png"
import img7_2 from "../assets/PortfolioBgImg2/image_part_007.png"
import img8_2 from "../assets/PortfolioBgImg2/image_part_008.png"
import img9_2 from "../assets/PortfolioBgImg2/image_part_009.png"
import img10_2 from "../assets/PortfolioBgImg2/image_part_010.png"
import img11_2 from "../assets/PortfolioBgImg2/image_part_011.png"
import img12_2 from "../assets/PortfolioBgImg2/image_part_012.png"
import img13_2 from "../assets/PortfolioBgImg2/image_part_013.png"
import img14_2 from "../assets/PortfolioBgImg2/image_part_014.png"
import img15_2 from "../assets/PortfolioBgImg2/image_part_015.png"
import img16_2 from "../assets/PortfolioBgImg2/image_part_016.png"
import img17_2 from "../assets/PortfolioBgImg2/image_part_017.png"
import img18_2 from "../assets/PortfolioBgImg2/image_part_018.png"
import img19_2 from "../assets/PortfolioBgImg2/image_part_019.png"
import img20_2 from "../assets/PortfolioBgImg2/image_part_020.png"
import img21_2 from "../assets/PortfolioBgImg2/image_part_021.png"
import img22_2 from "../assets/PortfolioBgImg2/image_part_022.png"
import img23_2 from "../assets/PortfolioBgImg2/image_part_023.png"
import img24_2 from "../assets/PortfolioBgImg2/image_part_024.png"
import img25_2 from "../assets/PortfolioBgImg2/image_part_025.png"
import aboutImg from "../assets/aboutImg.png"
import defautPic from "../assets/background Color icon/default.svg" 
import northMiracle from "../assets/background Color icon/North Miracle.svg"
import nightSky from "../assets/background Color icon/Night sky.svg"
import loveKiss from "../assets/background Color icon/Love kiss.svg"

import musicIcon from "../assets/music icon.png"
import smoothSkinPic from "../assets/smoothSkin.jpg"
import figmaProjectPic from "../assets/Figma resturant work.png"
import todoListPic from "../assets/todo list.png"
import responsiveImage from "../assets/responsiveWebDesignImage-removebg-preview.png"
import graphicsImage from "../assets/graphicsDesignPics.png"
import uiUx from "../assets/UX-UI-DesignPic.png"
import spa from "../assets/Single-page-applicationPic.png"
import arrow from "../assets/arrow-up-right.png"

import Aos from "aos"
import 'aos/dist/aos.css'



function Home({Playfair, font, Roboto, Opensans, defaultFont, themeChanger, bgColor1, bgColor2, fontColor1, fontColor2, konoha, bigMoney, forever, pauser,themeChanger2,themeChanger3,defaultTheme}) {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(()=>{
    Aos.init({
      duration:800
    })
    return () =>{
      Aos.refresh()
      Aos.refreshHard()
    }
  },[])

const [imager, setImager] = useState(false)
const [imager2, setImager2] = useState(false)
const [imager3, setImager3] = useState(false)
const [imager4, setImager4] = useState(false)


const myRefElement = useRef(null)
const [smoother, setSmoother] = useState("")

const handleClick =()=>{
  if(myRefElement.current){

   myRefElement.current.scrollTo({
    left:myRefElement.current.scrollLeft + 3000,
    behavior:'smooth'})
    setSmoother("#smooth")
  }

 

}

const mouseWheel =(e)=>{
  if(myRefElement.current){
    myRefElement.current.scrollLeft += e.deltaY
    myRefElement.current.style.scrollBehaviour = "auto"
  }
}

const handleClick2 = ()=>{
  if(myRefElement.current){

    myRefElement.current.scrollTo({
     left:myRefElement.current.scrollLeft - 3000,
     behavior:'smooth'})
     setSmoother("#smooth")
   }
}

  
  return (
    <>
<section className='firstSec'>
    <section className='nameSection'>
      <h1 style={font}><span  className='hi' style={fontColor2}>Hi,</span> <span className="im" style={fontColor2}  >I'm</span> <span className='david' style={fontColor2}  >David</span> </h1>
    </section>

    <h1 className='youre' style={font}><span style={fontColor2} ><p >Front-End Web Developer.</p></span></h1>



    <section className='picSec'>
      <div className='firstPic'>
        <img src={img1} alt="" className='mov1'/>
         <img src={img2} alt="" className='mov2'/>
        <img src={img3} alt="" className='mov3'/>
       <img src={img4} alt="" className='mov4'/>
        <img src={img5} alt="" className='mov5'/>
        <img src={img6} alt="" className='mov6'/>
       <img src={img7} alt="" className='mov7'/>
        <img src={img8} alt="" className='mov8'/>
        <img src={img9} alt="" className='mov9'/>
        <img src={img10} alt="" className='mov10'/>
        <img src={img11} alt="" className='mov11'/>
        <img src={img12} alt="" className='mov12'/>
        <img src={img13} alt="" className='mov13'/>
        <img src={img14} alt="" className='mov14'/>
        <img src={img15} alt="" className='mov15'/>
        <img src={img16} alt="" className='mov16'/>
        <img src={img17} alt="" className='mov17'/>
        <img src={img18} alt="" className='mov18'/>
        <img src={img19} alt="" className='mov19'/>
        <img src={img20} alt="" className='mov20'/>
        <img src={img21} alt="" className='mov21'/>
        <img src={img22} alt="" className='mov22'/>
        <img src={img23} alt="" className='mov23'/>
        <img src={img24} alt="" className='mov24'/>
        <img src={img25} alt="" className='mov25'/>
    </div>

      <div className='secondPic'>
      <img src={img1_2} alt="" className='mov1'/>
        <img src={img2_2} alt="" className='mov2'/>
        <img src={img3_2} alt="" className='mov3'/>
        <img src={img4_2} alt="" className='mov4'/>
        <img src={img5_2} alt="" className='mov5'/>
        <img src={img6_2} alt="" className='mov6'/>
        <img src={img7_2} alt="" className='mov7'/>
        <img src={img8_2} alt="" className='mov8'/>
        <img src={img9_2} alt="" className='mov9'/>
        <img src={img10_2} alt="" className='mov10'/>
        <img src={img11_2} alt="" className='mov11'/>
        <img src={img12_2} alt="" className='mov12'/>
        <img src={img13_2} alt="" className='mov13'/>
        <img src={img14_2} alt="" className='mov14'/>
        <img src={img15_2} alt="" className='mov15'/>
        <img src={img16_2} alt="" className='mov16'/>
        <img src={img17_2} alt="" className='mov17'/>
        <img src={img18_2} alt="" className='mov18'/>
        <img src={img19_2} alt="" className='mov19'/>
        <img src={img20_2} alt="" className='mov20'/>
        <img src={img21_2} alt="" className='mov21'/>
        <img src={img22_2} alt="" className='mov22'/>
        <img src={img23_2} alt="" className='mov23'/>
        <img src={img24_2} alt="" className='mov24'/>
        <img src={img25_2} alt="" className='mov25'/> 
      </div>
    </section>

    </section>
    
<section className='customizeSec'>

<div className="lighterBG" style={bgColor2} data-aos="slide-right"> </div>
<div className="DarkerBG" style={bgColor2} data-aos="slide-left"> </div>

<div className='customizeH1 text-center' data-aos="fade-right" style={font}>Personalize Your Experience To Suit Your Style</div>

<div className='themeH1 text-center' data-aos="fade-right" style={font}><p>Select Theme</p></div>

<section className='themeOptions' data-aos="fade-right">
  <div data-aos ="fade-right" className='themeDefault' onClick={defaultTheme}><img src={defautPic} alt="" className='aThemePic'/></div>
  <div data-aos ="fade-right" className='theme1' onClick={themeChanger}><img src={northMiracle} alt="" className='aThemePic'/></div>
  <div data-aos ="fade-right" className='theme2' onClick={themeChanger2}><img src={nightSky} alt="" className='aThemePic'/></div>
  <div data-aos ="fade-right" className='theme3' onClick={themeChanger3}><img src={loveKiss} alt="" className='aThemePic'/></div>


  <div data-aos ="fade-up" className='font3P'  style={font}><p>Default Theme</p></div>
  <div data-aos ="fade-up" className='fontDefaultP'  style={font}><p>North Miracle</p></div>
  <div data-aos ="fade-up" className='font1P'  style={font}><p>Night Sky</p></div>
  <div data-aos ="fade-up" className='font2P'  style={font}><p>Love Kiss</p></div>

</section>


<div className='fontH1 text-center' data-aos="fade-right" style={font}><p>Select Font Style</p></div>

<section className='fontOptions' data-aos="fade-right">
  <div data-aos ="fade-right" className='fontDefault' onClick={defaultFont}>Aa</div>
  <div data-aos ="fade-right" className='font1' onClick={Opensans}><p>Aa</p></div>
  <div data-aos ="fade-right" className='font2' onClick={Roboto}><p>Aa</p></div>
  <div data-aos ="fade-right" className='font3'onClick={Playfair}><p>Aa</p></div>


  <div data-aos ="fade-up" className='fontDefaultPf'><p>Default Font</p></div>
  <div data-aos ="fade-up" className='font1Pf'><p>Open Sans</p></div>
  <div data-aos ="fade-up" className='font2Pf'><p>Roboto Slabs</p></div>
  <div data-aos ="fade-up" className='font3Pf'><p>Playfair Display</p></div>
</section>


<div className='bgMusicH1 text-center' data-aos="fade-right"  style={font}><p>Select Background Music</p></div>

<section className='bgMusicOptions' data-aos="fade-right">
  <div data-aos ="fade-right" className='bgMusicStop' onClick={pauser}><div className="stopIcon"></div></div>
  <div data-aos ="fade-right" className='bgMusic1' onClick={konoha}><img src={musicIcon} alt="" className='musicIcon'/></div>
  <div data-aos ="fade-right" className='bgMusic2' onClick={bigMoney}><img src={musicIcon} alt="" className='musicIcon'/></div>
  <div data-aos ="fade-right" className='bgMusic3' onClick={forever}><img src={musicIcon} alt="" className='musicIcon'/></div>


  <div data-aos ="fade-up" className='fontDefaultP'  style={font}><p>Stop Music</p></div>
  <div data-aos ="fade-up" className='font1P'  style={font}><p>Konoha Gravy Beats</p></div>
  <div data-aos ="fade-up" className='font2P'  style={font} ><p>Bupa Beats Big Money</p></div>
  <div data-aos ="fade-up" className='font3P'  style={font}><p>Anno Domini Beats Forever</p></div>

</section>


</section>
<section className='aboutSec' style={bgColor2}>


<div className="lighterBG2" data-aos="slide-right"> </div>
<div className="DarkerBG2" data-aos="slide-left"> </div>

<div className='aboutPicAndTxt' style={font} data-aos ="fade-right">
  <div data-aos ="fade-right"><h1 className='text-7xl aboutH1' style={fontColor2}>About Me</h1></div>

  <div className='aboutImg' style={bgColor2} data-aos ="fade-right"><div className='AboutFrame'><img src={aboutImg} alt="" style={{height:"97%",width:"97%"}}/></div></div>


<div className='aboutTxt' style={fontColor2} data-aos ="fade-up"><p> A front-end enthusiast with experience in graphics design, UI/UX, and front-end web development.</p></div>


<Link to="/About"  className='viewMore' style={bgColor2} data-aos ="fade-right"><span style={{color:"white"}}>View More</span></Link>

</div>

</section>

<section className='worksSec'>

<div className="lighterBG" style={bgColor2} data-aos="slide-right"> </div>
<div className="DarkerBG" style={bgColor2} data-aos="slide-left"> </div>



<section className='allWorks' style={font}>

<div data-aos ="fade-right" style={font}><h1 className='text-7xl text-center worksH1'>Works</h1></div>

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

</div>

{/* work 3 */}

<div data-aos ="fade-down" className="work3" >

<div className='work3FlexerA'>

   <div className='smoothSkinPicDiv'  style={bgColor1} ><img src={smoothSkinPic} alt="" className='smoothSkinPic'/></div>
   

<div className='text-center smoothTxt' >
<h1 className='text-4xl text-center pb-3' ><span>Face Smooth</span></h1>
<p>
Experience the transformation with my advanced Photoshop skills! I've expertly smoothed and perfected skin texture, utilizing advanced tricks to turn rough and wrinkled skin into a flawless masterpiece. Elevate your image with the power of professional photo editing!
</p>
  </div>

  </div>

  <div className='work3FlexerB'>

<div className="work3Spacer"></div>

  <div data-aos ="fade-right"  className='downloadButtons'>

  <a href={smoothSkinPic} download className='DownloadImgBtn'>Download Image</a>

  </div>

</div>

</div>



</section>

<div className='viewmoreFlexer'>

<Link to="/Works" className='viewMore2'  data-aos ="fade-up" ><span style={font}>View More Works</span></Link>

</div>

</section>


<section className='servicesSec' style={bgColor2} >

<div className="lighterBG4" data-aos="slide-right"> </div>
<div className="DarkerBG4" data-aos="slide-left"> </div>

<div className='servicesSecFlexer' style={font}>

<div className='servicesH1' data-aos ="fade-right" style={fontColor2}><h1 >Services</h1></div>

  <div className='responsive' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager(true)
  }} onMouseLeave={()=>{
    setImager()
  }}> <h1>Responsive</h1> <div> {imager &&<img src={responsiveImage} alt="" className='responsImg'/>}</div> <h1> Web Design</h1> </div>

  <div className='graphicsDes' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager2(true)
  }} onMouseLeave={()=>{
    setImager2()
  }}> <h1>Graphics</h1> <div>{imager2 &&<img src={graphicsImage} alt="" className='graphicsImg'/>}</div> <h1>Design</h1> </div>

  <div className='ui' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager3(true)
  }} onMouseLeave={()=>{
    setImager3()
  }}> <h1>UI/</h1> <div>{imager3 &&<img src={uiUx} alt="" className='uiUxImg'/>}</div> <h1>UX</h1> </div>

  <div className='spas' data-aos ="fade-right" style={fontColor2} onMouseOver={()=>{
    setImager4(true)
  }} onMouseLeave={()=>{
    setImager4()
  }}> <h1>Single Page</h1> <div>{imager4 &&<img src={spa} alt="" className='spasImg'/>}</div> <h1>Applications</h1></div>

  <div className='viewmoreFlexer2'>

<Link to="/Services" className='viewMore3'  data-aos ="fade-right" style={bgColor2} ><span style={font}>View All Services</span></Link>

</div>

</div>

<h1 className='text-5xl text-center mt-6' style={fontColor2} data-aos="fade-right"><span style={font}>Reviews</span></h1>

</section>


<section className='reviews-main' style={font} data-aos="fade-right">

  <div className='arrow-left' onClick={handleClick2}></div>

<div className='reviews mt-10' id={smoother} ref={myRefElement} style={fontColor2} onWheel={mouseWheel}>

<div className="pic" style={font} data-aos="fade-right">
<h1 className='h1fontsizer' >Adaigwe Adiel</h1>

<p>Exceptional work! My website turned out exactly how I envisioned it. The design is modern, the navigation seamless, and the responsiveness is top-notch. Highly recommend!
</p>

</div>

<div className="pic" style={font} data-aos="fade-right">

<h1 className='h1fontsizer'>John Wilson</h1>

<p>
  Incredible transformation! My website went from outdated to outstanding thanks to this developer's expertise. The new design is sleek, user-friendly, and has already boosted engagement. Thank you!
</p> 

</div>

<div className="pic" style={font} data-aos="fade-right">
<h1 className='h1fontsizer'>Emily Moore</h1>

<p>
Absolutely stunning graphics! The designs perfectly capture the essence of my brand and have taken my visual identity to the next level. Professional, creative, and delivered with precision. Couldn't be happier!
</p> 

</div>

<div className="pic" style={font} data-aos="fade-right">

<h1 className='h1fontsizer'>Samantha Taylor</h1>

<p>
A total game-changer! This developer breathed new life into my website with his redesign. The layout is intuitive, and the overall user experience has significantly improved. Highly impressed!
</p> 

</div>

<div className="pic" style={font} data-aos="fade-right">

<h1 className='h1fontsizer'> Benjamin Rodriguez</h1>

<p>
Creative genius at work! The graphics created for my project are simply outstanding. Each design reflects a deep understanding of my brand and has added a distinctive flair to my visuals. Remarkable talent!
</p> 

</div>

<div className="pic" style={font} data-aos="fade-right">
<h1 className='h1fontsizer'>Chigozie Okoro</h1>

<p>
The website surpassed my expectations in every aspect. It's visually captivating, functions seamlessly, and has already garnered praise from users. A true master of Creating Websites!
</p> 
</div>

</div>

 <div className='arrow-right' onClick={handleClick}></div>

</section>


<section className='contactSec' style={font}>

<div className="lighterBG" style={bgColor2} data-aos="slide-right"> </div>
<div className="DarkerBG" style={bgColor2} data-aos="slide-left"> </div>

  <section className='constactSecFlexer'>
    <div className='letsH1' ><h1 data-aos ="fade-right">Let's Collaborate and Elevate!</h1> <h1 data-aos ="fade-right">igwezedavid@gmail.com</h1></div>

    <div className='transform'>

      <p data-aos ="fade-right"> Transforming Your Ideas into Stunning Realities!</p> 

<div className='socailHandles'>
      <div className='linkedIn' data-aos ="fade-right">

        <a href="https://www.linkedin.com/in/chukwuemeka-david-4309ab2b3/" target='_blank'>LinkedIn
      </a>

      <img src={arrow} alt="" className='arrow'/>
      
      </div>

      <div className='behance' data-aos ="fade-right">

        <a href="https://www.behance.net/davidemeka4" target='_blank'>Behance
      </a>

      <img src={arrow} alt="" className='arrow'/>

      </div>

  </div>
     
</div>

<div className='viewmoreFlexer2'>
<Link to="/Contact" className='viewMore4'  data-aos ="fade-right"  ><span style={font}>Let's Get In Touch</span></Link> </div>

    <div className='reachOut'></div>
    </section>

    
  
</section>

<div className='strecher2'></div>

<div className='copyright' style={font}><p style={fontColor2}> Copyright © 2024 General Dave</p></div>
    </>
  )
}

export default Home
