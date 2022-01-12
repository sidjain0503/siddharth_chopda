import React from 'react'
import './skill.css'

function Skill({image}) {
    return (
        <div>
            <div className="image">
                <img src={image} alt="" />
            </div>
            
        </div>
    )
}

export default Skill
