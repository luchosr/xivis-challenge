import React from "react";

const Card = ({ id, picture, price, stock }) => {
  return (
    <li className="card">
      <div className="card__img">
        <img src={picture} alt="item " />
      </div>
      <div className="card__description">
        <h3>{price}</h3>
        <input
          className="card__description__input"
          type="number"
          id="stock"
          name="stock"
          placeholder="1"
          min="1"
          max={stock}
        />
        <button className="card__description__adder">Agregar al carrito</button>
      </div>
    </li>
  );
};
export default Card;
