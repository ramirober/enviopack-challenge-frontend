import React, { useEffect, useState } from 'react';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Layout from './components/Layout/Layout';
import { products, profile } from './data/data';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [checkoutStatus, setCheckoutStatus] = useState(true);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    setCatalog(products.productos);
    setTotalPrice(
      cart.reduce(function (init, current) {
        return init + +current.price;
      }, 0)
    );
  }, [cart]);

  function addToCart(item) {
    cart.push(item);
    setCart(cart);
  }

  function deleteFromCart(name) {
    const newCart = cart.filter((item) => item !== name);
    setCart(newCart);
  }

  function checkoutValidation(total) {
    if (total < profile.profile.credit) {
      return setCheckoutStatus(true);
    }
    return setCheckoutStatus(false);
  }

  function sortCatalog() {
    const sortedCatalog = catalog.sort((a, b) => a.price - b.price);
    setSort(true);
    setCatalog(sortedCatalog);
  }

  return (
    <Layout cart={cart} quantity={quantity} profile={profile.profile}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Catalog
              catalog={catalog}
              addToCart={addToCart}
              quantity={quantity}
              setQuantity={setQuantity}
              sortCatalog={sortCatalog}
              sort={sort}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              quantity={quantity}
              setQuantity={setQuantity}
              deleteFromCart={deleteFromCart}
              checkoutValidation={checkoutValidation}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              quantity={quantity}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              profile={profile.profile}
              checkoutStatus={checkoutStatus}
              checkoutValidation={checkoutValidation}
              setCart={setCart}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
