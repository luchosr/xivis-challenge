import React from "react";

const Card = props => {
  return (
    <li className="card">
      <div className="card__img">
        <img src={props.picture} alt="item " />
      </div>
      <div className="card__description">
        <h3>{props.price}</h3>
        <input
          type="number"
          id="stock"
          name="stock"
          placeholder="0"
          min="0"
          max={props.stock}
        />
        <button className="card__description__adder">Agregar al carrito</button>
      </div>
    </li>
  );
};
export default Card;
