import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carrito")));
  return (
    <div>
      <div className="cart__bar">
        <h2>Items en tu carrito</h2>
      </div>
      <ul className="cart__list">
        {cart.length > 0 &&
          cart.map(item => (
            <li className="cart__list__item">
              <div className="cart__item__description">
                <div className="cart__item__img">
                  <img src={item.picture} alt="" />
                </div>
                <h3>{item.name}</h3>
              </div>
              <div className="cart__item__description__price">
                <h3>{item.price}</h3>
                <i>X</i>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
