import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop.data.json";

import {} from "../utils/firebase/firebase.utils";

// value you want to access
export const ProductContext = createContext({
  products: [],
});

// component you want to access
export const ProductProvider = ({ children }) => {
  useEffect(() => {}); 

  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
