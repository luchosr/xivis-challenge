import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Card from "./Card";
import "./App.css";

function App() {
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [items, setItems] = useState([]);

  // if (localStorage.getItem("carrito") === null) {
  //   localStorage.setItem("carrito", JSON.stringify([]));
  // }

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setisLoading(true);
    await fetch("https://api.myjson.com/bins/wyjyh")
      .then(response => response.json())
      .then(response => {
        setItems(response);
      })
      .catch(error => seterror(error))
      .finally(() => setisLoading(false));
  };
  // console.log(items);

  return (
    <div className="app">
      <div className="app__navbar">
        <h1 className="app__navbar__title">
          <a href="#">e-Commerece</a>
        </h1>
        <i className="app__navbar__icon">
          {items.length}
          <FaShoppingCart size={30} />
        </i>
      </div>

      <ul className="app__itemsList">
        {!error &&
          items.length > 0 &&
          items.map(item => (
            <Card
              key={item.index}
              id={item.index}
              picture={item.picture}
              price={item.price}
              stock={item.stock}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
