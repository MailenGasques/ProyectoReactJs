import React, { useContext, useMemo } from "react"; 
import cartIcon from "../assets/cart.svg";
import styles from "../styles/cartwidget.module.css"; 
import { Cart } from '../context/CartProvider'; 
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(Cart); 

    const cantidadTotal = useMemo(() => {
        return cart.reduce((acumulador, item) => acumulador + item.quantity, 0); 
    }, [cart]);
     
    return (
        <NavLink to="/cart" className={styles.cartWidget}>
            <img src={cartIcon} alt="Ícono del carrito" />
            <span>({cantidadTotal})</span>
        </NavLink>
    );
};

export default CartWidget;