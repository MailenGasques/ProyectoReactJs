import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import ItemDetail from "./ItemDetail";
import styles from "../styles/itemdetailcontainer.module.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    (async () => {
      setCargando(true);
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({...docSnap.data(), id});
        } else {
          Swal.fire({
            title: "No se encontró el producto solicitado.",
            icon: "warning",
            confirmButtonText: "Aceptar",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Ocurrió un error al cargar el producto: " + error.message,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } finally {
        setCargando(false);
      }
    })();
  }, [id]);

  return (
    <>
      {cargando ? (
        <h1>Cargando información del producto...</h1>
      ) : (
        <div className={styles.detailcontainer}>
          {product ? (
            <ItemDetail product={product} />
          ) : (
            <h1>Producto no encontrado</h1>
          )}
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
