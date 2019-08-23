import React, { useState } from "react";
import { useCartActions, useCart } from "./cart/hooks";

const Cart = () => {
  const cart = useCart();
  const { add, remove } = useCartActions();
  const [total, setTotal] = useState([]);

  const check = cart.reduce((prev, curr) => {
    return prev + curr.price * curr.ammount;
  }, 0);

  return (
    <div>
      <div className="cart__bar">
        <h2>Cart</h2>
      </div>

      <ul className="cart__list">
        {cart.length === 0 && <li> Tu carrito está vacío. </li>}
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
                <h3> {item.ammount} * </h3>
                <h3>$ {item.price}</h3>
                <i onClick={remove}> delete</i>
              </div>
            </li>
          ))}
      </ul>
      <h2>total: $ {Math.round(check * 100) / 100} </h2>
    </div>
  );
};

export default Cart;
