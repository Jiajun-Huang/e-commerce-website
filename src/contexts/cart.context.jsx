import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd

  //FIXME: cartItem can't add propority. map function DNE,
  //TODO:
  const existingCartItem = cartItems.find((cartItem) => {
    console.log(123);
    return cartItem.id === productToAdd.id;
  });

  if (existingCartItem) {
    // if find the item exist cart in the cart
    // then perform maps
    // if the item to add is same as the item in the cart, quantity +1, if not return original item
    console.log(cartItems);
    const cartArray = cartItems.maps((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return cartArray;
  } else return [...cartItems, { ...productToAdd, quantity: 1 }];

  // if found, increment quantity
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
