import React from "react";

// titulo
// url img
//description
// precio
// stock
const Article = () => {
  const article = JSON.parse(localStorage.getItem("articulo"));
  const { price, stock, name, picture, description } = article;

  console.log(
    "el articulo queda ",
    JSON.parse(localStorage.getItem("articulo"))
  );
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
          />
          <button
            className="card__description__adder"
            style={{ margin: "20px" }}
          >
            {" "}
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Article;
