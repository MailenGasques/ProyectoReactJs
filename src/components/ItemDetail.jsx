import React, { useState, useEffect } from "react";
import styles from "../styles/itemDetail.module.css"; 

const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <h3>Cargando...</h3>;
    }

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count > 1 ? count - 1 : 1);

    return (
        <div className={styles.card}>
            <img src={product.picture} alt={product.title} className={styles.image} />
            <div className={styles.details}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Precio: ${product.price.toFixed(2)}</p>
                <div className={styles.counter}>
                    <button onClick={handleDecrease}>-</button>
                    <span>{count}</span>
                    <button onClick={handleIncrease}>+</button>
                    <button className={styles.addToCart}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;