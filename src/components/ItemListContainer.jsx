import React, { useEffect, useState } from "react"; 
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        let productFilter = [];

        if (categoryId) {
          const q = query(
            collection(db, "products"),
            where("category", "==", categoryId)
          );

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            productFilter.push({ id: doc.id, ...doc.data() });
          });
        } else {
          const querySnapshot = await getDocs(collection(db, "products"));
          querySnapshot.forEach((doc) => {
            productFilter.push({ id: doc.id, ...doc.data() });
          });
        }
        setProducts(productFilter);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Ocurrió un error al cargar los productos: " + error.message,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [categoryId]);

  if (!loading && products.length === 0) {
    return <h1>No se encontraron productos</h1>;
  }

  return (
    <>
      {loading ? (
        <h1>Aguarde mientras se carga el sitio web...</h1>
      ) : (
        <div>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;