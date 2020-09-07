import React from 'react'
import { Link } from "react-scroll";
import "./NewNav.css"


export const NewNav = () => {
    return (
        <div className="body">
            <div className="background">
                
            </div>
            <header className="header">
                <a href="/"  className="logo"> SPA </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
                <ul className="menu">
                <li><a href="#" ><Link activeClass="active" to="kind" spy={true} smooth={true} offset={0} duration={300}>Be Kind</Link></a></li>
                <li><a href="#" ><Link activeClass="active" to="assertive" spy={true} smooth={true} offset={0} duration={400}>Be Assertive</Link></a></li>
                <li><a href="#" ><Link activeClass="active" to="listen" spy={true} smooth={true} offset={0} duration={500}>Be Listen</Link></a></li>
                <li><a href="#" ><Link activeClass="active" to="Connect" spy={true} smooth={true} offset={0} duration={600}>Be Connect</Link></a></li>
                <li><a href="#" ><Link activeClass="active" to="Responsible" spy={true} smooth={true} offset={0} duration={700}>Be Responsible</Link></a></li>
                </ul>
            </header>
            
        </div>
    )
}
