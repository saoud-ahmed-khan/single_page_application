import pic from "../../Animation/29734-hello-hi.json";
import Lottie from "react-lottie";
import "./BeKind.css"
import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const BeKind = () => {
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
        <div className="bg" id="kind">
            <div className="main">

                <div className="pic w3-animate-left"   >
                    <Lottie options={{ animationData: pic, loop: true, autoplay: true, rendererSettings: { preserveAspectRatio: "xMidYMid slice", }, }}
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
                    <h1 ref={text}>Be Kind ...</h1>
                    <br />
                    <p> <b>"</b> If this sounds like a basic human rule – that’s
                    because it is. But, sometimes, we can forget about that when working with others. Clients don’t need to know the importance of typography – that’s why they need you; a fellow designer might not
                    be as good as you are in some areas and that’s ok – that’s why you are working together. <b>Bringing empathy</b> to the table is your ticket to success <b>"</b></p>
                </div>

            </div>
        </div>
    )
}
