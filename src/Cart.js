import React, { useState } from "react";
import { useCartActions, useCart } from "./cart/hooks";

const Cart = () => {
  const cart = useCart();
  const { add, remove } = useCartActions();

  console.log("cart es al final ", { cart });
  return (
    <div>
      <div className="cart__bar">
        <h2>Cart</h2>
      </div>

      <ul className="cart__list">
        {cart.length === 0 && (
          <li> No hay items en tu carrito hasta el momento </li>
        )}
        {cart &&
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
                <i onClick={remove}> X</i>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
