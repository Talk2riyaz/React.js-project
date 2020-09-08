import React from 'react'

const Card = (props) => {
    return (
        <div>
             
            <div class="card" style={{ width: '18rem' }}>
                <img src={props.imgsrc} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                    <a href="#" class="btn btn-outline-primary">Click on</a>
                </div>
            </div>
            </div>
            
       
    )
}

export default Card
