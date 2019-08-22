import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { useCartActions } from "./cart/hooks";

const Card = ({ id, picture, price, stock, name, description }) => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito"))
  );
  const { add, remove } = useCartActions();

  const agregarAlCarrito = () => {
    const item = {
      id: id,
      picture: picture,
      price: price,
      stock: stock,
      description: description,
      name: name
    };
    add(item);
  };
  const guardarArticulo = () => {
    const articulo = {
      id: id,
      picture: picture,
      price: price,
      stock: stock,
      description: description,
      name: name
    };
    localStorage.setItem("articulo", JSON.stringify(articulo));
  };
  return (
    <li className="card">
      <div className="card__img">
        <Link to="/article">
          {" "}
          <img src={picture} alt="item " onClick={guardarArticulo} />
        </Link>
      </div>
      <div className="card__description">
        <div className="card__pricing">
          <h2>{name}</h2>
          <h3>{price}</h3>
        </div>

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
          Add to cart{" "}
        </button>
      </div>
    </li>
  );
};
export default Card;
