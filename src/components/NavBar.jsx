import React from "react";
import styles from "../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <NavLink
                        className={ ({ isActive }) => {
                            return isActive ? styles.isActive : styles.notActive
                        }}
                        to={"/"}
                    >
                        Home
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
        </nav>
    )
}

export default NavBar