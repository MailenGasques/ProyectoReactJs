import React, { useContext, useMemo } from "react";
import { Cart as CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import styles from "../styles/cart.module.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart, emptyCart, deleteProduct } = useContext(CartContext);
    const precioTotal = useMemo(() => {
        return cart.reduce((acumulador, item) => acumulador + item.price * item.quantity, 0);
    }, [cart]);

    return (
        <div className={styles.container}>
            <h1>PRODUCTOS</h1>
            {cart.length ? (
                <>
                    {cart.map((cartItem) => (
                        <CartItem 
                            item={cartItem} 
                            key={cartItem.id} 
                            deleteProduct={deleteProduct} 
                        />
                    ))}
                    <button onClick={emptyCart} className={styles.emptyButton}>
                        Vaciar Carrito
                    </button>
                    <h2>TOTAL: $ {precioTotal.toFixed(2)}</h2>
                    <NavLink to="/checkout" className={styles.buttonCheckout}>
                        Comprar
                    </NavLink>
                </>
            ) : (
                <div className={styles.emptyCart}>
                    <h2>Aún no tienes productos en el Carrito</h2>
                    <NavLink to="/" className={styles.linkInicio}>
                        Ir al inicio
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Cart;