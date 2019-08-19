import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carrito")));
  const [carrito, setCarrito] = useState(!(cart >= 0));
  // ---> https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274

  return (
    <div>
      <div className="cart__bar">
        <h2>Items en tu carrito</h2>
      </div>

      <ul className="cart__list">
        {cart >= 0 && <li>No hay items en tu carrito</li>}
        {carrito &&
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
