import React from 'react'
import './Timeline.css'
import amazon1 from "../img/amazon-clone-cart.png";
import amazon2 from "../img/amazon-clone-home.png";
import amazon3 from "../img/amazon-clone-loginSignup.PNG";

//forum
import forum1 from "../img/forum1.PNG";
import forum2 from "../img/forum2.PNG";
import forum3 from "../img/forum3.PNG";

// note
import note1 from "../img/note1.PNG";
import note2 from "../img/note2.PNG";
import note3 from "../img/note3.PNG";

// crud
import scramble1 from "../img/scramble1.PNG";
import scramble2 from "../img/scramble2.PNG";
import scramble3 from "../img/scramble3.PNG";


import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";

  import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import "react-vertical-timeline-component/style.min.css";
import Project from '../Projects/Project/Project';


  

function Timeline() {
    return (
        <div className='Timeline'>
            <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August-2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <Project title="1.Amazon-Clone" frameurl="https://challenge-c03b5.web.app"  image1={amazon1} image2={amazon2} image3={amazon3} />
         <h3 className="vertical-timeline-element-title">
            Amazon-clone using Reactjs, material-ui and firebase
          </h3>
          {/* <img src={amazon1} alt="jkb" /> */}
          <h4 className="vertical-timeline-element-subtitle">Learning project</h4>
          <p>This project is a mini clone of the original
            ”amazon.com”, Containing features like login and
            authentication via firebase , add to cart functionality
            for the products listed.
            This website has google firebase support for database
            and hosting
            The frontend design for this project is made using css
            , reactjs and material-ui.<br/>
            <b>The designing of this website is not responsive so it may not function well on small devices.</b> <br />
             <h2> <a href="https://challenge-c03b5.web.app" target='_blank'>Click here to see live</a></h2>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September-October 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
<Project title="2.Forum" frameurl="https://github.com/sidjain0503/onlineforum"  image1={forum1} image2={forum2} image3={forum3} />

          <h3 className="vertical-timeline-element-title">Forum website using php,mysql,jquery</h3>
          <h4 className="vertical-timeline-element-subtitle">
          Learning project
          </h4>
          <p>
          A forum is a platform where multiple users can post
          their questions regarding specific topics and get them
          answered by some other in the platform .
          This website runs php in the backend , and uses
          mysql(phpmyadmin) as its database.
          The frontend design for this project uses bootstrap. <br />
          <h2><a href="https://github.com/sidjain0503/onlineforum" target='_blank'>Click here to see Code</a></h2>
          <h2><a href="https://www.youtube.com/watch?v=PgEHwl7ledM" target='_blank' >Click here to see video</a></h2>

          </p>
          

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September-October 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <Project title="3.CRUD app" frameurl="http://localhost/sidjain/CRUD-app" image1={note1} image2={note2} image3={note3}/>

          <h3 className="vertical-timeline-element-title">Note taking app using php,mysql,jquery</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Learning project
          </h4>
          <p>A note taking app is a simple crud application that is
            used to create , read , update and delete notes
            created by the user
            This website runs php in the backend , and uses
            mysql(phpmyadmin) as its database.
            The frontend design for this project uses bootstrap
            ,jquery and datatable. <br /> 
            <h2><a href="https://github.com/sidjain0503/Notes-app" target='_blank'>Click here to see code</a></h2>
            <h2><a href="https://www.youtube.com/watch?v=Om2d8XIglIk" target='_blank'>Click here to see video</a></h2>

            </p>
        </VerticalTimelineElement>

       
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
        </div>
    )
}

export default Timeline
