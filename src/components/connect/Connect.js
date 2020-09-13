import React from 'react'
import pic from "../../Animation/28416-connection.json";
import Lottie from "react-lottie";
import "../Bekinf/BeKind.css"

export const Connect = () => {
    return (
        <div className="bg3" id="Connect">
            
        <div className="main">
        <div className="content">
                <h1>Connect ...</h1>
                <br/>
                <p> <b>"</b>You can have talent as an individual, sure, but you’ll never truly be outstanding if you keep 
                    working as a lone wolf. Connecting with other designers
                     (with people from any field of work, really) helps us shift our
                      perspective and enhances our critical eye. Don’t be afraid to <b> share what you think and what you know</b>
                      – nobody’s going to “steal your creativity”. Different visions can work out amazing solutions. <b>"</b></p>
            </div>

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
           
            
        </div>
        </div>
    )
}
