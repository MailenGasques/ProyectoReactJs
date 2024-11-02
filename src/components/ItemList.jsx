import React from "react";
import Item from "./Item";
import styles from "../styles/itemlist.module.css";

const ItemList = ({ products }) => {
    if (products.length === 0) { 
        return <h1>No se encontraron productos</h1>;
    }
    
    return (
        <div className={styles.container}>
            {products.map((product) => (
                <Item item={product} key={product.id} />
            ))}
        </div>
    );
}

export default ItemList;