import React, { useState } from "react";
import styles from "../styles/itemcount.module.css";

const ItemCount = ({ stock, inicial, addCart }) => {
    const [count, setCount] = useState(inicial);

    const aumentarCantidad = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const reducirCantidad = () => { 
        if (count > 1) {
            setCount(count - 1); 
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.operators}>
                <button className={styles.button} onClick={reducirCantidad}>-</button>
                <h3 className="cantidadProducto"> {count}</h3>
                <button className={styles.button} onClick={aumentarCantidad}>+</button>
            </div>
            <button className={styles.button} onClick={() => addCart(count)} disabled={count === 0 || stock === 0}> {/* Comprobación adicional */}
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;