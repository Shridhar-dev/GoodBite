import React from 'react'
import "./Header.css"
import hi from "./Imgs/header_img.png"

function Header() {
    return (
        <>
        <nav class="navbar navbar-expand-lg px-3 py-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GoodBite🥗</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      
      <svg width="2rem" height="2rem" viewBox="0 0 16 16" class="bi bi-list" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">YouTube</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Insta</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


        
        <div class="container-fluid main p-5 ">
           <div class="row d-flex align-items-center">
               <div class="col-12 col-md-6 col-xl-6 head-text">
                    <h1 class="start-text">Eat the ✔️ food</h1>
                    
                    <p class="sub-text">Make your every bite <strong>Healthy</strong> & <strong>Tasty</strong></p>
                        <div class="mx-5 d-flex flex-column align-items-center mt-5">
                        <iframe src="https://shridharkamat.substack.com/embed"  width="300" height="80" style={{border:"0px solid #EEE", background:"transparent"}} frameborder="0" scrolling="no">
                 
                 </iframe>
                        <p class="mt-2">Subscribe to our monthly newsletter
                       </p>

                       </div>
                       
               </div>
               <div class="col-12 col-md-6 col-xl-6 ">
                    <img src={hi} class="img-fluid" />
               </div>
            </div> 
        </div>
        </>
    )
}

export default Header
