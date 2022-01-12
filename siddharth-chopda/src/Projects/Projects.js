import React from 'react'
// import Project from './Project/Project'
import  './projects.css'
import Typewriter from 'typewriter-effect';
// import ProjectLink from './Project/ProjectLink';


function Projects() {
    return (
        <div className="projects">
            <h1><Typewriter
              options={{
                strings: ['PROJECTS👨‍💻','javascript👨‍💻','Reactjs👨‍💻','Html👨‍💻','Css👨‍💻','Vscode👨‍💻','Github👨‍💻','Php👨‍💻','Mongodb👨‍💻','Mysql👨‍💻'],
                autoStart: true,
                loop: true,
              }}
            /></h1>

              <div className="about_project">
                    <p>I believe <b> Project based learning</b> is the best way to learn programming .</p>
                    <p>Here are some projects I made during my learning and will be adding some <b> more interesting projects soon....</b> </p>
                </div>

 
        </div>
    )
}

export default Projects
