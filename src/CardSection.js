import React from 'react'
import Card from './Card'
import chem from "./Imgs/chemicals.png"
import farm from "./Imgs/farm.png"
import money from "./Imgs/money.png"
import time from "./Imgs/24.png"

function CardSection() {
    return (
        <div class="py-5">
        <h1 class="my-5" style={{color:"black"}}>Benefits</h1>
        <div class="container d-flex flex-wrap justify-content-center align-items-center">
            <Card img={chem} text="No chemicals and pesticides"/>
            <Card img={farm} text="Fresh from the farms"/>
            <Card img={money} text="Cheaper than market price"/>
            <Card img={time} text="Providing 24/7 service"/>
            
        </div>
        </div>
    )
}

export default CardSection
