import React from 'react'
import pic from "../../Animation/29734-hello-hi.json";
import Lottie from "react-lottie";
import "./BeKind.css"

export const BeKind = () => {
    return (
        <div className="bg" id="kind">
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
                <h1>Be Kind</h1>
                <br/>
                <p>If this sounds like a basic human rule – that’s 
                    because it is. But, sometimes, we can forget about that when working with others. Clients don’t need to know the importance of typography – that’s why they need you; a fellow designer might not 
                    be as good as you are in some areas and that’s ok – that’s why you are working together. <b>Bringing empathy</b> to the table is your ticket to success</p>
            </div>
            
        </div>
        </div>
    )
}
