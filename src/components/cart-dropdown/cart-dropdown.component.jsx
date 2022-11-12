import "../cart-dropdown/cart-dropdown.style.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.componment";

import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className=" cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to dropdown</Button>
    </div>
  );
};

export default CartDropdown;
