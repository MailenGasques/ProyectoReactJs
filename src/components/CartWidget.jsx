import React from "react";
import cartIcon from "../assets/cart.svg";
import styles from "../styles/cartwidget.module.css"; 

const CartWidget = () => {
  const itemCount = 2;
  return (
    <div className={styles["cart-widget"]}> 
      <img src={cartIcon} alt="Cart" className={styles["cart-icon"]} /> 
      <span className={styles["notification"]}>{itemCount}</span> 
    </div>
  );
};

export default CartWidget;