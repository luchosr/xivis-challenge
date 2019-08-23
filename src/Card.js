import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { useCartActions } from "./cart/hooks";

const Card = ({ id, picture, price, stock, name, description }) => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito"))
  );
  const [ammount, setAmmount] = useState(1);
  const { add, remove } = useCartActions();

  const handleNumber = event => {
    setAmmount(event.target.value);
  };

  console.log("la id del articulo es ", id);

  const agregarAlCarrito = () => {
    const item = {
      id: id,
      picture: picture,
      price: Number(price.replace(/[^0-9.-]+/g, "")),
      stock: stock,
      description: description,
      name: name,
      ammount: ammount
    };
    add(item);
  };
  const guardarArticulo = () => {
    const articulo = {
      id: id,
      picture: picture,
      price: Number(price.replace(/[^0-9.-]+/g, "")),
      stock: stock,
      description: description,
      name: name,
      ammount: ammount
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
          value={ammount}
          onChange={handleNumber}
        />
        <button className="card__description__adder" onClick={agregarAlCarrito}>
          Add to cart{" "}
        </button>
      </div>
    </li>
  );
};
export default Card;
