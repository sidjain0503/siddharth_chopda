import React from 'react'
import './mainbody.css'
import Skill from './Skill/Skill'
import Typewriter from 'typewriter-effect';
import javascript from './Skill/Image/javascript-logo.png'
import reactLogo from './Skill/Image/react-logo.png'
import materialui from './Skill/Image/materialui-logo.png'
import html from './Skill/Image/html-logo.png'
import css from './Skill/Image/css-logo.png'
import vscode from './Skill/Image/VSCODE-logo.png'
import github from './Skill/Image/github.png'
import php from './Skill/Image/php-1-logo.png'
import mysql from './Skill/Image/mysql-logo.png'
import mongodb from './Skill/Image/mongodb.png'
import sidjain from './Skill/Image/profile.jpg'





function Mainbody() {
    return (
        <div className="mainbody">
            <div className="maintop">
            <img src={sidjain} alt="" />

            <div className="info">
            
            <h1 className="top">Hey!🙋‍♂️<i>Siddharth Chopda</i> Here!</h1><br />
            <h1 className="left" >Full-stack Developer/intern</h1><br />
            <h1 className="bottom">An Enthusiastic Learner, and a Student.   </h1>
            
            <div className="back_design">
                <div className="c1"></div>
                <div className="c2">
                </div>
                <div className="c3"></div>
            </div>
           
        </div>

        
            </div>


                <div className="about">
                    <h1>About me </h1>
                    <p>I am a  <b>B.tech [Computer Science]</b> Student at <b><a href="https://gecraipur.ac.in/" target="_blank">Government Engineering College ,Raipur</a></b></p>
                    <p>I love to <b>build things</b> and <b>solve problems</b> through programming.</p> <br /><br />

                    <h1>Contact Info</h1>
                    <p> <b> Contact : +916264537931</b> <br /> Mon-Fri 9am-5pm</p>
                    <p> <b> Address : Government Engineering College Raipur, Chattisgarh</b></p>
                    <p><a href="https://drive.google.com/file/d/1bO_xVgI79tiU2hPhNoO05b4YTnMOZU5k/view?usp=sharing" target="_blank" id='resume'>Download Resume </a></p><br /><br />
                    <p>I Build <b>Websites and Web Apps </b> ,<br /> Have a look at <b>Tools and technologies </b> i use to build things :</p>
                </div>
           

             <div className='TandT'> 
             {/* <img  className='img1' src={profile} alt="nothing" /> */}

             <div className="skillTitle">
                 <h1>
                 <Typewriter
                options={{
                    strings: ['TOOLS AND TECHNOLOGIES'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </h1>        
                <h2>
                <Typewriter
                options={{
                    strings:  ['javascript👨‍💻','Reactjs👨‍💻','Html👨‍💻','Css👨‍💻','Vscode👨‍💻','Github👨‍💻','Php👨‍💻','Mongodb👨‍💻','Mysql👨‍💻'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </h2>

  
             </div>
             <div className="skills">
                 <Skill image={javascript}/>
                 <Skill image={reactLogo}/>
                 <Skill image={materialui}/>
                 <Skill image={html}/>
                 <Skill image={css}/>
                 <Skill image={vscode}/>
                 <Skill image={github}/>
                 <Skill image={php}/>
                 <Skill image={mongodb}/>
                 <Skill image={mysql}/>





                 </div>
                 
             </div>
        </div>
    )
}

export default Mainbody
