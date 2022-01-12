import React from 'react'
import './projectlink.css'

function ProjectLink({url,ptitle}) {
    return (
        <div>
            <div className="dropdown-content">
              <a href={url} target="_blank">{ptitle}</a>
  </div>
        </div>
    )
}

export default ProjectLink
