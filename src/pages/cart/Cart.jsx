import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './cart.css'

const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get the cart items from the location state or fallback to an empty array
    const { cart } = location.state || { cart: [] };

    // Local state for the cart (this could be a context if you need it to be global)
    const [cartItems, setCartItems] = useState(cart);

    // Increment quantity of an item
    const handleIncrement = (index) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity += 1;
        setCartItems(updatedCart);
    };

    // Decrement quantity of an item
    const handleDecrement = (index) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setCartItems(updatedCart);
        }
    };

    // Remove item from the cart
    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCart);
    };

    // Navigate to the checkout page
    const handleCheckout = () => {
        navigate("/checkout", { state: { cartItems } });
    };

    return (
        <div className="cart-main">
            <div className="cart-page">
                <h1>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty. Add some items to your cart.</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <p>Price: ₦{item.price}</p>
                                    <div className="cart-controls">
                                        <div className="quantity-controls">
                                            <button onClick={() => handleDecrement(index)} className="red-btn">-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleIncrement(index)} className="green-btn">+</button>
                                        </div>
                                        <button
                                            className="remove-item-button"
                                            onClick={() => handleRemoveItem(index)}
                                        >
                                            Remove Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="cart-total">
                    <h3>Total: ₦{cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}</h3>
                </div>

                <button className="checkout-button" onClick={handleCheckout}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
