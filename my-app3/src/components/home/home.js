import React from "react";

function Card() {
  return (
    <div className="Card">
      <h3>Trip Events</h3>
      <div className="row row-cols-1 row-cols-md-3 card-hotel">
        <div className="col mb-4">
          <div className="card">
            <img
              src="../munnar.jpg"
              className="card-img-top"
              alt="carlton"
              height="300px"
              width="300px"
            />
            <div className="card-body">
              <h5 class="card-title">Munnar</h5>
              <p class="card-text">
               {/* Rating : <span class="fa fa-star ch ecked"></span>  */}
                 {/* <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
           
           
            <div className="card-body">
              <h5 className="card-title">Shimla and Manali</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span classNameName="fa fa-star checked"></span>
                <span classNameName="fa fa-star checked"></span>
                <span classNameName="fa fa-star checked"></span>
                <span classNameName="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="../udaipur.jpg" className="card-img-top"   height="300px"
              width="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Holyplaces</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="../hyderabad.jpg" className="card-img-top"  height="300px"
              width="300px"
              alt="..." />
            <div className="card-body">
              <h5 className="card-title">Forts and Flimcity</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="../img3.jpg" className="card-img-top"  height="300px"
              width="300px"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Boating </h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="../img2.png" className="card-img-top"   height="300px"
              width="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Foriegn tour</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;