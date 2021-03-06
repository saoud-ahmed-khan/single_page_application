import React from 'react'
import pic from "../../Animation/29774-dance-party.json";
import Lottie from "react-lottie";
import "../Bekinf/BeKind.css"
import useWebAnimations from "@wellyshen/use-web-animations";


export const BeAssertive = () => {
    const { ref: text } = useWebAnimations({
        keyframes: [
            { transform: "scale(1) " },
            { transform: "scale(1.1)" },
        ],
        timing: {
            // delay: 500, // Start with a 500ms delay
            duration: 3000, // Run for 1000ms
            direction: "alternate", // Run the animation forwards and then backwards
            iterations: Infinity, // Repeat once

            easing: "ease-in-out", // Use a fancy timing function
        },
    });
    return (
        <div className="bg1" id="assertive">
            
        <div className="main">
        <div className="content">
                <h1 ref={text}>Be Assertive ...</h1>
                <br/>
                <p> <b>"</b> Being confident in the choices you make is essential to be perceived
                     as an expert in your area (as opposed to actually saying that you are an expert). Present your ideas with the
                     right arguments: everything you do was done with purpose and nothing was 
                     left to chance; so <b>share your vision and defend it</b>(just don’t forget to be kind about it). <b>"</b></p>
            </div>

            <div className="pic" >
            <Lottie options={{ animationData: pic , loop: true, autoplay: true, rendererSettings: { preserveAspectRatio: "xMidYMid slice", }, }}
                height={"100%"}
                width={"100%"}
                style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                }}
            />
            </div>
           
            
        </div>
        </div>
    )
}
