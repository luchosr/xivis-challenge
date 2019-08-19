import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ItemsList from "./ItemsList";
import Article from "./Article";
import Cart from "./Cart";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ItemsList} />
          <Route path="/article" component={Article} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
