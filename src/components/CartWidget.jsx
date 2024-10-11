import React from "react";
import cartIcon from "../assets/cart.svg";
import "../styles/cartwidget.css";
const CartWidget = () => {
  const itemCount = 2;
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart" className="cart-icon" />
      <span className="notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
