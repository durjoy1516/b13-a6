import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Pricing from "./components/Pricing";
import Steps from "./components/Steps";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart 🛒");
  };

  // REMOVE
  const removeFromCart = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    toast.error("Removed from cart ❌");
  };

  // CLEAR
  const clearCart = () => {
    setCart([]);
    toast.info("Checkout complete ✅");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      <Products
        addToCart={addToCart}
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Steps/>
      <Pricing/>
      <CTA />
      <Footer/>
      <ToastContainer position="top-right"/>
    </>
  );
}

export default App;