import { useContext } from "react";

import ProductCard from "../product-card/product-card.component"

import { ProductContext } from "../../contexts/product.context";

import './shop.style.scss'

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default Shop;
