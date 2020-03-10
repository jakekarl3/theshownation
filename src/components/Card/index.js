import React from "react";
import "./style.css";

import Rating from "../Rating";

function Card() {
  return (
    <div>
      <div className="card">
        <div className="card__rating">
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default Card;