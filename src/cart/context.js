import React from "react";

const CartContext = React.createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(
    JSON.parse(localStorage.getItem("carrito") || "[]")
  );

  function add(item) {
    setCart(cart => cart.concat(item));
  }

  function remove(index) {
    cart.splice(index, 1);
    setCart([...cart]);
    localStorage.setItem("carrito", JSON.stringify([...cart]));
  }

  const state = { cart };
  const actions = { add, remove };
  console.log(cart);

  React.useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ state, actions }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext as default, CartProvider as Provider };
