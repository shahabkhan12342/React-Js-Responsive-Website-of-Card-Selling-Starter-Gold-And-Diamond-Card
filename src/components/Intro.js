import React, { useEffect, useRef } from 'react';
import './intro.scss';
import pic from './pages/qr.jpg'
import { init } from 'ityped';
function Intro() {
  const textRef=useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor:false,
      strings:['React Developer','Frontend Developer', 'React Native Developer', 'C# Developer', 'Python Developer']
    })
    
  },[])
  return (
    <div className='intro' id='intro'>
     

      <div className='left'>
        <div className='imgContainer'>
          <img src={pic} alt=''/>

        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
        <h2>Hey, I'm</h2>
        <h1>Shahab Khan</h1>
        <h3><span ref={textRef}>React Developer</span></h3>
        </div>

      </div>

      
    </div>
  )
}

export default Intro
