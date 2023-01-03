import React from "react";
import css from "./Products.module.css";
import Plant from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
function Products() {
  const [parent] = useAutoAnimate();
  const [menuProducts, setmenuProducts] = useState(ProductsData);
  const filtering = (type) => {
    setmenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.containar}>
      <img src={Plant} alt="Plant" />
      <h1>Our Featured Producats</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setmenuProducts(ProductsData)}>All</li>
          <li onClick={() => filtering("skin care")}>Skin Care</li>
          <li onClick={() => filtering("conditioner")}>Conditioners</li>
          <li onClick={() => filtering("foundation")}>Foundations</li>
        </ul>
        <div className={css.list} ref={parent}>
          {menuProducts.map((product, i) => {
            return (
              <div className={css.product}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>£{product.price}</span>
                  <div>Show Now</div>
                </div>
                <img src={product.img} alt="img" className="img-p" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
