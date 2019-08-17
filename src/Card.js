import React, { useState } from "react";
const Card = ({ id, picture, price, stock }) => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito"))
  );

  const agregarAlCarrito = () => {
    const item = { id: id, picture: picture, price: price, stock: stock };
    if (carrito === null) {
      localStorage.setItem("carrito", JSON.stringify([item]));
    } else {
      localStorage.setItem("carrito", JSON.stringify([...carrito, item]));
    }
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
  };
  console.log("carrito queda como ", carrito);
  console.log("el storage queda como ", localStorage.getItem("carrito"));
  // console.log("carrito2 es ", carrito);
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
        <button className="card__description__adder" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </li>
  );
};
export default Card;
