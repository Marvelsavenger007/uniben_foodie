import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from "./pages/profile/Profile.jsx";
import Vendor from "./pages/vendors/Vendor.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Checkout from './components/checkout/Checkout.jsx';
import Home from './pages/home/Home.jsx';
import CartProvider from './components/cartcontext/CartProvider.jsx';
import Login from './components/signup/Login.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
        <Route path="" element={<Login />} />
          <Route path="/" element={<App />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path='vendors' element={<Vendor />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="home" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
