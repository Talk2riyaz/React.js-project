import React from 'react'
import Card from "./Card"
import img1 from "../img/s1.jpg"
import img2 from "../img/s2.jpg"
import img3 from "../img/s3.jpg"
import img4 from "../img/s4.jpg"
import img5 from "../img/s5.jpg"
import img6 from "../img/s6.jpg"

const Service = () => {
    return (
        <div>
            <div class=" container-fluid my-5">
                <h1 class="text-center">
                    Our Services
             </h1>
            </div>
            
                    <div class="container-fluid row gy-4 my-5">
                            <div class="col-md-4 col-10 ">
                               <Card
                                  imgsrc={ img1 }
                                  title="Android"
                                  text="Some quick example text to build on the card title and make up the bulk of the card's content"

                               />

                                </div>

                                <div class="col-md-4 col-10 ">
                               <Card
                                  imgsrc={ img2 }
                                  title="React.js"
                                  text="Some quick example text to build on the card title and make up the bulk of the card's content"

                               />

                                </div>

                                <div class="col-md-4 col-10 ">
                               <Card
                                  imgsrc={ img3 }
                                  title="Flutter development"
                                  text="Some quick example text to build on the card title and make up the bulk of the card's content"

                               />

                                </div>

                                <div class="col-md-4 col-10 ">
                               <Card
                                  imgsrc={ img4 }
                                  title="Website"
                                  text="Some quick example text to build on the card title and make up the bulk of the card's content"

                               />

                                </div>

                                <div class="col-md-4 col-10">
                               <Card
                                  imgsrc={ img5 }
                                  title="Web development"
                                  text="Some quick example text to build on the card title and make up the bulk of the card's content"

                               />

                                </div>

                                <div class="col-md-4 col-10">
                               <Card
                                  imgsrc={ img6 }
                                  title="Android "
                                  text="Some quick example text to build on the card title a content"

                               />

                                </div>


                            </div>
                        </div>
 
          
    )
}

export default Service
