import React from 'react'
import Common from './Common'
import hero2 from "../img/hero2.png"

const About = () => {
    return (
        <div>
              <section id="header" className="mt-5">
           <div className="container-fluid nav_bg ">
            <div className="row mt-5">
             <Common
             
             title="Welcome to our family Build the better way with"
             
             text="We are Team of Mern stack developer"
             imgsrc={hero2}
             
             
             
             />
            </div>
           </div>

           </section>
        </div>
    )
}

export default About
