import React from 'react'
import "./Cards.css"
function Card(props) {
    return (
        <div class="card_main d-flex align-items-center mx-3 my-3">
        <div class="d-flex flex-column align-items-center m-3">
            <img src={props.img} class="card_img mt-2 img-fluid" width="130"/>
            <p class="m-3" style={{fontSize:"1.1rem"}}>{props.text}</p>
        </div>
        </div>
    )
}

export default Card
