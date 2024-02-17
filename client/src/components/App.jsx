import React from "react";
import Header from "./Header";
import Product_Block from "./Product_Block";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="product_container">
        <Product_Block />
        <Product_Block />
      </div>
    </div>
  );
}

export default App;
