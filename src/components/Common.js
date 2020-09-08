import React from 'react'
import { NavLink } from 'react-router-dom'


const Common = (props) => {
    return (
        <div>
              <div className="col-10 mx-auto mt-5 ">
                   <div className="row"> 
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"> 
                      <h1 className="my-3">{props.title} <strong className="brand-name">{
                      props.owener}</strong></h1>
                      <h5 className="mt-2">{props.text}</h5>
                      <div className="mt-4">
                      <NavLink to="/service" className="btn-get-started"> {props.btn}</NavLink>
                      </div>
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2 header-img">
                   <img src={ props.imgsrc } className="img-fluid " alt="img"/>
                     </div>
               </div>

                     
               </div>  
        </div>
    )
}

export default Common
