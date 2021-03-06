import React from 'react';


function Slider() {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item">
            <img src='../images/hats-slider2.jpg' class="d-block w-100 h-200" alt="..." />
          </div>
          <div class="carousel-item active">
            <img src='../images/hats-slider1.jpg' class="d-block w-100 h-200" alt="..." />
          </div>
          <div class="carousel-item">
            <img src='../images/hats-slider3.jpg' class="d-block w-100 h-200" alt="..." />
          </div>
          <div class="carousel-item">
            <img src='../images/hats-slider4.jpg' class="d-block w-100 h-200" alt="..." />
          </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  )
}
export default Slider;