import React from 'react'
import pic from "../../Animation/responsible.json";
import Lottie from "react-lottie";
import "../Bekinf/BeKind.css";
import useWebAnimations from "@wellyshen/use-web-animations";


export const  BeResponsible = () => {
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
        <div className="bg4" id="Responsible">
        <div className="main">
            <div className="pic">
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
            <div className="content">
                <h1 ref={text}>Be Responsible.</h1>
                               <p> <b>"</b> We all make mistakes – and since design involves a lot of creation and decision-making,
                     it’s even more prone to that – and
                     that’s ok. Take on your choices and accept their consequences; if they're positive, great, 
                     if not, you'll simply have th <b>opportunity to learn from it and improve</b>
                     . Either way, the goal is to be happy with what you do, even if your results aren’t achieved
                      in your first try (which, for the most part, they aren’t!). <b>"</b></p>
            </div>
            
        </div>
        </div>
    )
}
