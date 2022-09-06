import { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";

const Shop = () => {
  const {   products } = useContext(ProductContext);
  return (
    <div>
      {products.map(({ name, id }) => {
        return (
          <div key={id}>
            <h2>{name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
