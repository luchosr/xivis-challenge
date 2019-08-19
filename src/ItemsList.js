import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";

const ItemsList = () => {
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [items, setItems] = useState([]);

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

  return (
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
            name={item.name}
            description={item.description}
          />
        ))}
    </ul>
  );
};

export default ItemsList;
