import React, { useState } from "react";
import { useCartActions, useCart } from "./cart/hooks";
const Article = () => {
  const [ammount, setAmmount] = useState(1);
  const article = JSON.parse(localStorage.getItem("articulo"));
  const { price, stock, name, picture, description, id } = article;

  console.log(
    "el articulo queda ",
    JSON.parse(localStorage.getItem("articulo"))
  );
  const { add, remove } = useCartActions();

  const handleNumber = event => {
    setAmmount(event.target.value);
  };

  const agregarAlCarrito = () => {
    const item = {
      id: id,
      picture: picture,
      price: price,
      stock: stock,
      description: description,
      name: name,
      ammount: ammount
    };
    add(item);
  };
  return (
    <div className="article">
      <div className="article__img">
        <img src={picture} alt="article" />
      </div>
      <div className="article__description">
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p>{description}</p>
        <div className="article__events">
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
          <button
            className="card__description__adder"
            style={{ margin: "20px" }}
            onClick={agregarAlCarrito}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Article;
