import React,{useState} from 'react'
import './Project.css'
import SimpleImageSlider from "react-simple-image-slider";




  // let proj = document.getElementsByClassName("project");
  // onMouseEnter={()=>this.handleMouseEnter()}
  


function Project({title,frameurl,image1,image2,image3}) {

  let images = [
    { url: image1 },
    { url: image2 },
    { url: image3}

  ];


  let proj = document.getElementsByClassName("project");
  // console.log(proj.text())
  console.log(proj)
  // console.log(proj.childNodes)

  const [style, setStyle] = useState("project");

  const changeStyle = () => {

    
    setStyle("project2");
  };

  const changeStyle2 = () => {
    console.log("you just exited");
  
    setStyle("project");
  };

  const urlclick = ()=>{
    console.log("clicked");
    window.open(frameurl,"_blank ")
  }
    

  const height = 290;
  const width = 300;
  
    return (
      
        <div className={style} onMouseEnter={changeStyle} onMouseLeave={changeStyle2}>
          <h2 onClick={urlclick}>{title}</h2> 
          <div className="frame">
            
          <SimpleImageSlider id="slide_img"
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={true}
      />
            {/* <img src={image1} alt="nothing"  /> */}
          {/* <iframe src={frameurl} height="200" width="280" ></iframe> */}
          </div>
          
        </div>
    )
}

export default Project
