import React from 'react'
import './footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="Smedia_icons">
                    {/* Social media Handles Icons  */}
                    <a href="https://www.instagram.com/siddharth.chopda_/" target="_blank"> <InstagramIcon  className="icons" /></a>
                    <a href="https://twitter.com/universalsid" target="_blank">  <TwitterIcon className="icons"/></a>
                    <a href="https://www.linkedin.com/in/siddharth-chopda-a15946201/" target="_blank"> <LinkedInIcon  className="icons"/></a>
                    <a href="https://github.com/sidjain0503" target="_blank"> <GitHubIcon className="icons" /></a>
                    <a href="mailto:greatsid2003@email.com" target="_blank"> <EmailIcon className="icons" /></a>

      
                </div>
                <div className="nav_list">
                    <ul>
                     <Link to="/"  className="links"><li>Home</li></Link>  
                     <Link to="/Projects" className="links" id="projects"><li>Projects</li></Link>  
                     {/* <Link to="/Contact" className="links"><li>Contact</li></Link>    */}
                
                    </ul>
                    {/* Side list Links to home,projects and contact  */}
                </div>
            </div>
            <div className="footer_bottom">
                <div>Copyright &copy; 2021
                    designed and developed by Siddharth Chopda
                    </div> 
            </div>



        </div>
    )
}

export default Footer
