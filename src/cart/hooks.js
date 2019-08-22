import React from "react";

import CartContext from "./context";

export function useCart() {
  const {
    state: { cart }
  } = React.useContext(CartContext);

  return cart;
}

export function useCartActions() {
  const { actions } = React.useContext(CartContext);

  return actions;
}
