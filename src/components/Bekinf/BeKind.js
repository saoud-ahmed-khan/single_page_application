import pic from "../../Animation/29734-hello-hi.json";
import Lottie from "react-lottie";
import "./BeKind.css"
import React from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
AOS.init();
export const BeKind = () => {

    return (
        <div className="bg" id="kind">
            <div className="main">
                <div   data-aos="flip-left"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic">
                    <div className="pic"   data-aos="flip-left"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic">
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
                </div>
                <div className="content"   data-aos="flip-left"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic" >
                    <h1>Be Kind ...</h1>
                    <br />
                    <p> <b>"</b> If this sounds like a basic human rule – that’s
                    because it is. But, sometimes, we can forget about that when working with others. Clients don’t need to know the importance of typography – that’s why they need you; a fellow designer might not
                    be as good as you are in some areas and that’s ok – that’s why you are working together. <b>Bringing empathy</b> to the table is your ticket to success <b>"</b></p>
                </div>

            </div>
        </div>
    )
}
