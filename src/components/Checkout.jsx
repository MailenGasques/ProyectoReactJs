import React, { useState, useContext } from 'react';
import { Cart as CartContext } from '../context/CartProvider';
import { db } from "../firebase/config";
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';
import "../styles/checkout.module.css";

const Checkout = () => {
    const { cart, emptyCart } = useContext(CartContext); 
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [ordenId, setOrdenId] = useState(null);
    const [estadoOrden, setOrderState] = useState('generada');
    const [cargando, setCargando] = useState(false);

    const manejarSubmit = async (evento) => {
        evento.preventDefault();

        if (email !== confirmarEmail) {
            Swal.fire({
                title: "Error!",
                text: "Los emails ingresados no coinciden",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            return;
        }

        setCargando(true);

        const nuevaOrden = {
            buyer: { nombre, apellido, email, telefono, domicilio },
            items: cart,
            total: cart.reduce((acumulador, item) => acumulador + item.price * item.quantity, 0),
            timestamp: serverTimestamp(),
            estado: estadoOrden
        };

        try {
            const orderRef = await addDoc(collection(db, 'orders'), nuevaOrden);
            setOrdenId(orderRef.id);

            await Promise.all(cart.map(async (product) => {
                const productoRef = doc(db, 'products', product.id);
                await updateDoc(productoRef, { stock: product.stock - product.quantity });
            }));

            emptyCart(); 

            Swal.fire({
                title: "Éxito!",
                text: `La compra se ha realizado con éxito. Tu número de orden es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        } catch (error) {
            console.error("Error al crear la orden:", error);
            Swal.fire({
                title: "Error!",
                text: `Ocurrió un error al crear la orden: ${error.message}`,
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className='contenedorCheckout'>
            <h1>FINALIZAR COMPRA</h1>
            {cargando ? (
                <div>
                    <h2>Aguarde mientras se genera su orden...</h2>
                </div>
            ) : ordenId ? (
                <div>
                    <h2>Gracias por tu compra! La orden es número: {ordenId}</h2>
                </div>
            ) : (
                <div className='contenedorFormulario'>
                    <h2>Ingrese sus datos de facturación</h2>
                    <form onSubmit={manejarSubmit}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(evento) => setNombre(evento.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Apellido"
                            value={apellido}
                            onChange={(evento) => setApellido(evento.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(evento) => setEmail(evento.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Confirmar Email"
                            value={confirmarEmail}
                            onChange={(evento) => setConfirmarEmail(evento.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Teléfono"
                            value={telefono}
                            onChange={(evento) => setTelefono(evento.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Domicilio"
                            value={domicilio}
                            onChange={(evento) => setDomicilio(evento.target.value)}
                            required
                        />
                        <button className='botonSubmitFormulario' type="submit">Confirmar Compra</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;