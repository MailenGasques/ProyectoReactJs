import React, { createContext, useState } from "react";
import Swal from "sweetalert2";


export const Cart = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (product, productQuantity) => {
        const productInCart = isInCart(product.id);
        let cartUpdated = [...cart];

        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity,
                    };
                }
                return cartProduct;
            });
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity });
        }

        setCart(cartUpdated);
        Swal.fire({
            title: "Producto agregado al carrito",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
    };


    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId);
    };

    const emptyCart = () => {
        setCart([]);
        Swal.fire({
            title: "Carrito vaciado",
            icon: "info",
            confirmButtonText: "Aceptar",
        });
    };

    const deleteProduct = (productId) => {
        const cartUpdated = cart.filter(cartProduct => cartProduct.id !== productId);
        setCart(cartUpdated);
        Swal.fire({
            title: "Producto eliminado del carrito",
            icon: "warning",
            confirmButtonText: "Aceptar",
        });
    };

    return (
        <Cart.Provider value={{ cart, addCart, emptyCart, deleteProduct }}>
            {children}
        </Cart.Provider>
    );
};

export default CartProvider;
