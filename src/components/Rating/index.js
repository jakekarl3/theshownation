import React from "react";
import "./style.css";
import diamond from "../../assets/images/shield-diamond.png";

function Rating() {
  return (
    <div className="rating__container">
      <img
        className="card__image"
        src={diamond}
        alt="diamond"
        />
      <div className="rating__number">
        99
      </div>
    </div>
  );
}

export default Rating;