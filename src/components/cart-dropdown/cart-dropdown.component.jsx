import "../cart-dropdown/cart-dropdown.style.scss";
import Button from "../button/button.component";

const CartDropdown = () => {
    return(
        <div className=" cart-dropdown-container">
            <div className="cart-items"></div>
            <Button>Go to dropdown</Button>
        </div>
    )
};

export default CartDropdown;