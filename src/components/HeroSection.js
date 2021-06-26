import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './HeroSection.css';


function HeroSection({
    lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
    return (
        <>

        <div className={false ? 'home__hero-section': 'home__hero-section darkBg'}>
            <div className='container'>
                <div className='row home__hero-row' style={{display:'flex',flexDirection: imgStart==='start'? 'row-reverse' :'row'}}>
                    <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <div className='top-line'>

                            React Js Project

                            </div>
                            <h1 className={true ? 'heading' : 'heading dark'}>The Technicals</h1>
                            <p className={true ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>This is a small React JS project made by me. In this project i have used Html , CSS , Bootstrap, Media Query, Javascrip and React Js. This is a responsive website in which i have used functional components and also used Hooks in it. It has three main pages Home, About and Contact Us which is also shown is Navigation Bar. </p>
                            
                            <div className='top-line'>

                     Github Link: 

                  </div>
                  <p className={true ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>https://github.com/shahabkhan12342/TheTechnicals </p>

                        </div>

                    </div>
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
        <ReactPlayer
          className='react-player' controls
          url='https://www.youtube.com/watch?v=0T5x_SilXh4'
          width='460px'
          height='300px'
        />

                        </div>

                    </div>

                </div>

            </div>

        </div>



        <div className={true ? 'home__hero-section': 'home__hero-section darkBg'}>
            <div className='container'>
                <div className='row home__hero-row' style={{display:'flex',flexDirection: imgStart==='start'? 'row-reverse' :'row'}}>
                    <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <div className='top-line'>

                            React Js Project

                            </div>
                            <h1 className={false ? 'heading' : 'heading dark'}>Facebook Clone by Shahab Khan</h1>
                            <p className={false ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>This is a facebook clone made by me using React Js and Firebase. I have used context api to share data with multiple components and used Firebase for Authentication and Cloud Database in which data of Post and Messages is also storing in database and then retrieving it in feed section. For icons and buttons i have used Material UI too and you can also access source code from below Github Link  </p>
                            
                            <div className='top-line'>

                     Github Link: 

                  </div>
                  <p className={false ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>https://github.com/shahabkhan12342/Facebook-Clone-by-Shahab-Khan </p>

                        </div>

                    </div>
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
        <ReactPlayer
          className='react-player' controls
          url='https://www.youtube.com/watch?v=qje8JZh7FJg'
          width='460px'
          height='300px'
        />

                        </div>

                    </div>

                </div>

            </div>

        </div>





        
        <div className={false ? 'home__hero-section': 'home__hero-section darkBg'}>
            <div className='container'>
                <div className='row home__hero-row' style={{display:'flex',flexDirection: imgStart==='start'? 'row-reverse' :'row'}}>
                    <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <div className='top-line'>

                            React Js Project

                            </div>
                            <h1 className={true ? 'heading' : 'heading dark'}>Responsive Website of Card Selling Starter, Gold And Diamond Card</h1>
                            <p className={true ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>This is a React JS project made by me. In this project i have used Html , CSS , Bootstrap, Media Query, Javascrip and React Js. In this project i have used UseState and Use Effect Hooks, In this project i have passed data from one component to another by using props which has also improved reusabilty of component. You can also access source code from below Github Link </p>
                            
                            <div className='top-line'>

                     Github Link: 

                  </div>
                  <p className={true ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>https://github.com/shahabkhan12342/React-Js-Responsive-Website-of-Card-Selling-Starter-Gold-And-Diamond-Card </p>

                        </div>

                    </div>
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
        <ReactPlayer
          className='react-player' controls
          url='https://www.youtube.com/watch?v=i41w5FFVl0g&t=5s'
          width='460px'
          height='300px'
        />

                        </div>

                    </div>

                </div>

            </div>

        </div>

        

        <div className={true ? 'home__hero-section': 'home__hero-section darkBg'}>
            <div className='container'>
                <div className='row home__hero-row' style={{display:'flex',flexDirection: imgStart==='start'? 'row-reverse' :'row'}}>
                    <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <div className='top-line'>

                            React Js Project

                            </div>
                            <h1 className={false ? 'heading' : 'heading dark'}>Shahab's Adventure</h1>
                            <p className={false ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>This is a small React JS project made by me. In this project i have used Html , CSS , Bootstrap, Media Query, Javascrip and React Js. This is a responsive website in which i have used functional components and also used Hooks in it. In this project i have also used Card Components and added multiple cards in home page which are also responsive as you can see in the video and you can also access source code from below Github Link  </p>
                            
                            <div className='top-line'>

                     Github Link: 

                  </div>
                  <p className={false ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>https://github.com/shahabkhan12342/Proj3ShahabAdventureReact </p>

                        </div>

                    </div>
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
        <ReactPlayer
          className='react-player' controls
          url='https://www.youtube.com/watch?v=Yz6tS9V3l-g'
          width='460px'
          height='300px'
        />

                        </div>

                    </div>

                </div>

            </div>

        </div>



        <div className={false ? 'home__hero-section': 'home__hero-section darkBg'}>
            <div className='container'>
                <div className='row home__hero-row' style={{display:'flex',flexDirection: imgStart==='start'? 'row-reverse' :'row'}}>
                    <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <div className='top-line'>

                            Mobile Accessories

                            </div>
                            <h1 className={true ? 'heading' : 'heading dark'}>Mobile Accessories</h1>
                            <p className={true ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>This is a Mobile Accessories webpage, I have made it using React.Js. You can also access source code from below Github Link  </p>
                            
                            <div className='top-line'>

                     Github Link: 

                  </div>
                  <p className={true ? 'home__hero-subtitle': 'home__hero-subtitle  dark'}>https://github.com/shahabkhan12342/MobileProj</p>

                        </div>

                    </div>
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
        <ReactPlayer
          className='react-player' controls
          url='https://www.youtube.com/watch?v=8usNj20JUNU'
          width='460px'
          height='300px'
        />

                        </div>

                    </div>

                </div>

            </div>

        </div>





            
        </>
    )
}

export default HeroSection
