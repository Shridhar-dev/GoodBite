import React from 'react'

function Footer() {
    return (
        <div class="container-fluid mb-0" style={{backgroundColor:"black"}}>
           <div class="row pt-5">
                <div class='col-12 col-md-6 col-xl-6 py-3'>
                    <div style={{textAlign:"start"}}>
                    <h3 class="mx-5" style={{color:"white"}}>GoodBite</h3>
                    <p class="mx-5 mt-4" style={{fontWeight:"100",color:"white"}}> Health and Taste Simplified</p>
                    </div>
                </div>
                <div class='col-12 col-md-6 col-xl-6'>
                    <div class="row">
                        <div class="col-12 col-md-6 col-xl-6 py-3">
                        <div style={{textAlign:"start"}}>                            
                        <h5 class="mx-5"style={{color:"white"}}>Follow</h5>
                        <h6 class="mt-4 mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px"}}>YouTube</h6>
                        <h6 class="mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px"}}>Twitter</h6>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-6 py-3">
                        <div style={{textAlign:"start"}}>                            
                        <h5 class="mx-5" style={{color:"white"}}>Explore</h5>
                        <h6 class="mt-4 mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px",textDecoration:"none"}}>Home</h6>
                        <h6 class="mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px",textDecoration:"none"}}>Work</h6>
                        <h6 class="mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px",textDecoration:"none"}}>Testimonials</h6>
                        <h6 class="mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px",textDecoration:"none"}}>About</h6>
                        </div>
                        </div>
                    </div>
                </div>
           </div>
           <h6 style={{fontWeight:"100",color:"white"}}>Copyright © 2020 GoodBite. All rights reserved.</h6>
           <br />
        </div>
    )
}

export default Footer
