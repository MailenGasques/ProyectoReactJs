import React from "react";
import styles from "../styles/cartItem.module.css";

const CartItem = ({ item, deleteProduct }) => {
    return (
        <div className={styles.cartItem}>
            <img src={item.picture} alt={item.title} className={styles.image} />
            <div className={styles.itemDetails}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.priceQuantity}>
                    <p className={styles.price}>Precio: ${item.price}</p>
                    <p className={styles.quantity}>Cantidad: {item.quantity}</p>
                </div>
                <button 
                    className={styles.buttonDelete} 
                    onClick={() => deleteProduct(item.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CartItem;