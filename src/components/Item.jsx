import React from "react";
import styles from "../styles/item.module.css";
import { NavLink } from "react-router-dom";

const Item = ({item}) => {
  return (
    <div className={styles.container}>
        <img src={item.picture} alt={item.title} className={styles.itemImage}/>
        <h2>{item.title}</h2>

        <span>${item.price}</span>
        <NavLink to={`/detail/${item.id}`}>
          <button className={styles.buttonInfo}>Mas Información</button>
        </NavLink>
    </div>
  )
}

export default Item