import React from "react";

function TheGeneric() {
  return (
    // <div className='h-36 text-center font-extrabold text-4xl md:text-6xl lg:text-8xl text-gray-100 flex bg-slate-500 items-center justify-center'>
    //   TheGeneric
    // </div>
    
      <div
        id="carouselExampleCaptions"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/phase3/PC-Header_event_unrec_v3_EN.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5></h5>
              <p>
               
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/phase3/PC-Header_event_unrec_v3_EN.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5> */}
              <p>
                {/* Some representative placeholder content for the second slide. */}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/phase3/PC-Header_event_unrec_v3_EN.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5> */}
              <p>
                {/* Some representative placeholder content for the third slide. */}
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    
  );
}

export default TheGeneric;
