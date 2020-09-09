import React from 'react'
import pic from "../../Animation/responsible.json";
import Lottie from "react-lottie";
import "../Bekinf/BeKind.css"

export const  BeResponsible = () => {
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
                <h1>Be Responsible</h1>
                <p>We all make mistakes – and since design involves a lot of creation and decision-making,
                     it’s even more prone to that – and
                     that’s ok. Take on your choices and accept their consequences; if they're positive, great, 
                     if not, you'll simply have th <b>opportunity to learn from it and improve</b>
                     . Either way, the goal is to be happy with what you do, even if your results aren’t achieved
                      in your first try (which, for the most part, they aren’t!).</p>
            </div>
            
        </div>
        </div>
    )
}
