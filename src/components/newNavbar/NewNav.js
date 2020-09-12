import React from 'react'
import { Link } from "react-scroll";
import "./NewNav.css"
import useWebAnimations from "@wellyshen/use-web-animations";



export const NewNav = () => {
    const { ref: text } = useWebAnimations({
        keyframes: [
            { transform: "scale(0.95) " },
            { transform: "scale(1.3)" },
        ],
        timing: {
            // delay: 500, // Start with a 500ms delay
            duration: 2000, // Run for 1000ms
            direction: "alternate", // Run the animation forwards and then backwards
            iterations: Infinity, // Repeat once

            easing: "ease-in-out", // Use a fancy timing function
        },
    });
    return (
        <div className="body">
           
            <header className="header">
                <a href="/" className="logo"> SPA </a>
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
            <header className="showcase">
                <div className="container showcase-inner">
                    <h1 ref={text}>WELLCOME</h1>
                    <p>A designer's manifesto.
                    Hey, there! Don’t worry – this is not yet another one of those how-to-be-a-designer recipes – every designer’s
                    process is different and that’s why this industry is so rich. This is simply a collection of ideas – or guidelines, if you will – that I always try to follow when I’m working because
                    they help me be a better designer. I hope you can feel that this could be your manifesto as well.</p>
                    <a href="https://github.com/saoud-ahmed-khan/" class="btn">Code</a>
                </div>

            </header>
           
        </div>
    )
}
