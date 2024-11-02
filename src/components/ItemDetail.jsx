import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Cart } from "../context/CartProvider";
import { NavLink } from "react-router-dom";
import styles from '../styles/itemDetail.module.css'; 
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
    if (!product) {
        return <h2>El producto no existe</h2>;
    }

    const { addCart } = useContext(Cart);
    const [itemCountVisibility, setItemCountVisibility] = useState(true);
    const stock = product.stock || 0;

    const handleCart = (quantity) => {
        setItemCountVisibility(false);
        addCart(product, quantity);

        Swal.fire({
            icon: "success",
            title: "Se agregó el producto al carrito",
            text: `Agregaste ${product.title} - Unidades: ${quantity}`,
            confirmButtonText: "Aceptar",
        });
    };

    return (
        <div className={styles.card}>
            <img src={product.picture} alt={product.title} className={styles.image} />
            <div className={styles.details}>
                <h1 className={styles.title}>{product.title}</h1>
                <span className={styles.description}>{product.description}</span>
                
                {stock === 0 ? (
                    <h3 className={styles.outOfStock}>No hay unidades disponibles en este momento. Por favor, vuelva a consultar más tarde.</h3>
                ) : (
                    <>
                        {itemCountVisibility ? (
                            <div className={styles.itemCountContainer}>
                                <ItemCount inicial={1} stock={stock} addCart={handleCart} />
                            </div>
                        ) : (
                            <div className={styles.buttonsContainer}>
                                <NavLink to="/cart" className={styles.botonIrAlCarrito}>IR AL CARRITO</NavLink>
                                <NavLink to="/" className={styles.botonVolverHome}>VOLVER AL INICIO</NavLink>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;