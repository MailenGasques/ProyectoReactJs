import React from "react";
import styles from "../styles/navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className={styles.navbar} >
            <img src={logo} alt="logo" className={styles.logo} />
            <ul className={styles.categories}>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/"}
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/category/agendas"}
                    >
                        Agendas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/category/cuadernos"}
                    >
                        Cuadernos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/category/anotadores"}
                    >
                        Anotadores
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/category/accesorios"}
                    >
                        Accesorios
                    </NavLink>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar