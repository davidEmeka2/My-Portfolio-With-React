import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "../Pages/contactPage.css"


function Contact({font,bgColor1,bgColor2,fontColor1,fontColor2}) {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const [changeAsh,SetChangeAsh]= useState("white")
  const [changeAsh2,SetChangeAsh2]= useState("white")
  const [changeAsh3,SetChangeAsh3]= useState("white")
  const [changeAsh4,SetChangeAsh4]= useState("white")
  const [changeAsh5,SetChangeAsh5]= useState("white")
  const [changeAsh6,SetChangeAsh6]= useState("white")
  const [changeAsh7,SetChangeAsh7]= useState("white")
  const [changeAsh8,SetChangeAsh8]= useState("white")
  const [changeAsh9,SetChangeAsh9]= useState("white")
  const [changeAsh10,SetChangeAsh10]= useState("white")

  const [tags, setTags] = useState("")
  const [tags2, setTags2] = useState("")
  const [tags3, setTags3] = useState("")
  const [tags4, setTags4] = useState("")
  const [tags5, setTags5] = useState("")
  const [tags6, setTags6] = useState("")
  const [tags7, setTags7] = useState("")
  const [tags8, setTags8] = useState("")
  const [tags9, setTags9] = useState("")
  const [tags10, setTags10] = useState("")


  const changeAshFunc = ()=>{
   if(changeAsh === "white") {
    SetChangeAsh("#dfdddd")
    setTags("Web design")
   }

   else if (changeAsh === "#dfdddd"){
    SetChangeAsh("white")
    setTags("")
   }

  }

  const changeAshFunc10 = ()=>{
    if(changeAsh10 === "white") {
     SetChangeAsh10("#dfdddd")
     setTags10("video Editing")
    }
 
    else if (changeAsh10 === "#dfdddd"){
     SetChangeAsh10("white")
     setTags10("")
    }
 
   }

   const changeAshFunc2 = ()=>{
    if(changeAsh2 === "white") {
     SetChangeAsh2("#dfdddd")
     setTags2("Web Redesign")
    }
 
    else if (changeAsh2 === "#dfdddd"){
     SetChangeAsh2("white")
     setTags2("")
    }
 
   }

   const changeAshFunc3 = ()=>{
    if(changeAsh3 === "white") {
     SetChangeAsh3("#dfdddd")
     setTags3("landing page Design")
    }
 
    else if (changeAsh3 === "#dfdddd"){
     SetChangeAsh3("white")
     setTags3("")
    }
 
   }

   const changeAshFunc4 = ()=>{
    if(changeAsh4 === "white") {
     SetChangeAsh4("#dfdddd")
     setTags4("Graphics Design")
    }
 
    else if (changeAsh4 === "#dfdddd"){
     SetChangeAsh4("white")
     setTags4("")
    }
 
   }

   const changeAshFunc5 = ()=>{
    if(changeAsh5 === "white") {
     SetChangeAsh5("#dfdddd")
     setTags5("UI Design")
    }
 
    else if (changeAsh5 === "#dfdddd"){
     SetChangeAsh5("white")
     setTags5("")
    }
 
   }

   const changeAshFunc6 = ()=>{
    if(changeAsh6 === "white") {
     SetChangeAsh6("#dfdddd")
     setTags6("Single Page Application")
    }
 
    else if (changeAsh6 === "#dfdddd"){
     SetChangeAsh6("white")
     setTags6("")
    }
 
   }

   const changeAshFunc7 = ()=>{
    if(changeAsh7 === "white") {
     SetChangeAsh7("#dfdddd")
     setTags7("Maintenance And Support")
    }
 
    else if (changeAsh7 === "#dfdddd"){
     SetChangeAsh7("white")
     setTags7("")
    }
 
   }

   const changeAshFunc8 = ()=>{
    if(changeAsh8 === "white") {
     SetChangeAsh8("#dfdddd")
     setTags8("Consultation and Training")
    }

 
    else if (changeAsh8 === "#dfdddd"){
     SetChangeAsh8("white")
     setTags8("")
    }
 
   }

   const changeAshFunc9 = ()=>{
    if(changeAsh9 === "white") {
     SetChangeAsh9("#dfdddd")
     setTags9("Photo Editing")
    }
 
    else if (changeAsh9 === "#dfdddd"){
     SetChangeAsh9("white")
     setTags9("")
    }
 
   }


const [form1, setform1] = useState({
  name:"",
  email:"",
  phone:"",
  tellMe:""
})

const formHandling = (e)=>{
 const {name, value} = e.target

 setform1((prev)=>{
  return{...prev, [name]: value}
 })
}




const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rwfu2d9',
       'template_rmevw8a', 
       form.current, {
        publicKey: 'eUKBV2tmntMQ6Hz-8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
    <header className='contactHeader'>

    <div className='contactPic'></div>

    <section className='contactHeaderSec' style={fontColor2}>

     

    <h1 className='text-4xl contactH1' style={font}>Let’s build an amazing project together.</h1>

    <p style={font} className='describe'>Describe your project and leave your contact info, I'll get back to you within 24 hours.
    </p>

    </section>

    </header>

    <section className='clickProject' style={font}>

    <div className='contactPic'></div>

    <h1 className='projectTypeH1 text-3xl' style={fontColor2}>What is your project about?</h1>

    </section>

    <section className='projects' style={font}>

    <div className='contactPic'></div>

   <div className='selectProjects' style={fontColor2}>

    <p style={{backgroundColor:changeAsh,
     width: "120px"}} onClick={changeAshFunc} >Website Design</p>

    <p style={{backgroundColor:changeAsh2,
     width: "120px"}} onClick={changeAshFunc2}>Website Redesign</p>

    <p style={{backgroundColor:changeAsh3, width: "150px"}} onClick={changeAshFunc3}>Landing Page Design</p>

    <p style={{backgroundColor:changeAsh4,
     width: "110px"}} onClick={changeAshFunc4}>Graphics Design</p>

    <p style={{backgroundColor:changeAsh5,
     width: "90px"}} onClick={changeAshFunc5}>UI Design</p>

    <p style={{backgroundColor:changeAsh6}} onClick={changeAshFunc6}>Single Page Applications</p>

    <p style={{backgroundColor:changeAsh10}} onClick={changeAshFunc10}>Maintenance and Support</p>

    <p style={{backgroundColor:changeAsh7}} onClick={changeAshFunc7}>Consultation and Training</p>

    <p style={{backgroundColor:changeAsh8,
     width: "110px"}} onClick={changeAshFunc8}>Photo Editing</p>

    <p style={{backgroundColor:changeAsh9,
     width: "110px"}} onClick={changeAshFunc9}>Video Editing</p>


   </div>
    
    </section>

    <section className='personInfo' style={font}>

<div className='contactPic'></div>

<form className='personsDetails' ref={form} onSubmit={sendEmail}>

  <input type="text" name='tags' value={[tags, tags2, tags3, tags4, tags5, tags6, tags7, tags8, tags9, tags10 ]} id='tags'/>

  <div className='personName'>

<h1 className='text-3xl' style={fontColor2}>Your Name</h1>

<input type="text" name="name" style={fontColor2} onChange={formHandling} placeholder='Ex: Davia Adiel' id='yourName' />
</div>

<div className='personEmail'>

<h1 className='text-3xl' style={fontColor2}>Your Email Address</h1>

<input type="email" name='email' style={fontColor2}  onChange={formHandling} placeholder='Ex: david@company.com' id='yourEmail'/>

</div>

<div className='personPhoneNo'>

<h1 className='text-3xl' style={fontColor2}>Phone</h1>

<input type="text" name='phone' style={fontColor2} onChange={formHandling} id='phoneNumber' placeholder='Ex: 999-999-9999'/>
</div>

<div className='tellmeabout'>

<h1 className='text-3xl'  style={fontColor2}>Tell me about your project</h1>

<input name="tellMe" id="tellMeAbout" style={fontColor2} onChange={formHandling}/>
</div>

<button className='sendButton'>Send Message</button>

</form>

</section>

<div className="strecher"></div>

<div className='copyright' style={font}><p style={fontColor2}> Copyright © 2024 General Dave</p></div>


    </>
  )
}

export default Contact 