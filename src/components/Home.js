import React from 'react'
import hero1 from "../img/hero1.png"

import Common from "./Common"

const Home = () => {
    return (
        <div>
           <section id="header" className="my-5">
           <div className="container-fluid nav_bg ">
            <div className="row mt-5">
             <Common
             
             title="Build the better way with"
             owener="Riyaz Ahemad"
             text="We are Team of Mern stack developer"
             imgsrc={hero1}
             btn="Get Started"
             
             
             />
            </div>
           </div>

           </section>
        </div>
    )
}

export default Home
