import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ItemsList from "./ItemsList";
import Article from "./Article";
import Cart from "./Cart";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as CartProvider } from "./cart/context";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <CartProvider>
        <div className="app">
          <Navbar />
          <Switch>
            <Route path="/" exact component={ItemsList} />
            <Route path="/article" component={Article} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>{" "}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
