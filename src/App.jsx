import ItemListContainer from "./components/ItemListContainer";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart";
import Checkout from './components/Checkout'


function App() {
  return (
    <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/detail/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
