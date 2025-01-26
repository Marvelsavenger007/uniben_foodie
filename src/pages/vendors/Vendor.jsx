import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './vendor.css';
import avatar from "../../images/avatar.png";
import tacos from "../../images/tacos.jpeg";
import burger from "../../images/burger.jpeg";
import egusi from "../../images/egusi.jpeg";
import jollof from "../../images/jollof.jpg";
import spag from "../../images/spags.jpeg";
import pizza from "../../images/pizza.jpeg";
import afang from "../../images/afang.jpeg";
import chips from "../../images/chips.jpeg";
import hotdog from "../../images/hotdog.jpeg";
import applepie from "../../images/applepie.jpeg";
import ofada from "../../images/ofada.jpg";
import bread from "../../images/bread.jpg";
import puffpuff from "../../images/puffpuff.webp";
import nuggets from "../../images/nuggets.webp";
import shawarma from "../../images/shawarma.jpeg";
import friedyam from "../../images/friedyam.webp";



const Vendor = () => {
    
    const vendors = [
        {
            id: 1,
            name: "Mama's Kitchen",
            image: egusi,
            services: [
                { id: 1, name: "Jollof Rice", price: 7500, quantity: 1, image: jollof },
                { id: 2, name: "Fried Rice", price: 9000, quantity: 1, image: avatar },
                { id: 3, name: "Egusi Soup", price: 11250, quantity: 1, image: egusi },
                { id: 4, name: "Afang Soup", price: 11250, quantity: 1, image: afang },
                { id: 5, name: "Ofada Rice", price: 11250, quantity: 1, image: ofada },
            ],
        },
        {
            id: 2,
            name: "Chef's Delight",
            image: pizza,
            services: [
                { id: 1, name: "Pizza", price: 15000, quantity: 1, image: pizza },
                { id: 2, name: "Pasta", price: 13500, quantity: 1, image: spag },
                { id: 3, name: "Garlic Bread", price: 6000, quantity: 1, image: bread },
                { id: 4, name: "Chicken & Chips", price: 6000, quantity: 1, image: chips },
                { id: 5, name: "Nuggets", price: 6000, quantity: 1, image: nuggets },
            ],
        },
        {
            id: 3,
            name: "Street Treats",
            image: tacos,
            services: [
                { id: 1, name: "Burger", price: 9000, quantity: 1, image: burger },
                { id: 2, name: "Garlic bread", price: 9000, quantity: 1, image: bread },
                { id: 3, name: "Tacos", price: 9000, quantity: 1, image: tacos },
                { id: 4, name: "Puff-Puff", price: 7500, quantity: 1, image: puffpuff },
                { id: 5, name: "Shawarma", price: 10500, quantity: 1, image: shawarma },
                { id: 6, name: "Hotdog", price: 10500, quantity: 1, image: hotdog },
                { id: 7, name: "Fried Yam", price: 10500, quantity: 1, image: friedyam },
            ],
        },
        {
            id: 4,
            name: "Burger Bliss",
            image: burger,
            services: [
                { id: 1, name: "Burger", price: 9000, quantity: 1, image: burger },
                { id: 2, name: "Garlic Bread", price: 9000, quantity: 1, image: bread },
                { id: 3, name: "Hotdog", price: 10500, quantity: 1, image: hotdog },
                { id: 4, name: "Apple Pie", price: 10500, quantity: 1, image: applepie },
            ],
        },
        {
            id: 5,
            name: "Chef Italiano",
            image: spag,
            services: [
                { id: 1, name: "Pizza", price: 15000, quantity: 1, image: pizza },
                { id: 2, name: "Shawarma", price: 10500, quantity: 1, image: shawarma },
                { id: 3, name: "Spaghetti Bolognese", price: 10500, quantity: 1, image: spag },
                { id: 4, name: "Apple Pie", price: 10500, quantity: 1, image: applepie },
            ],
        },
        {
            id: 6,
            name: "Mama's Kitchen",
            image: egusi,
            services: [
                { id: 1, name: "Jollof Rice", price: 7500, quantity: 1, image: jollof },
                { id: 2, name: "Fried Rice", price: 9000, quantity: 1, image: avatar },
                { id: 3, name: "Egusi Soup", price: 11250, quantity: 1, image: egusi },
                { id: 4, name: "Afang Soup", price: 11250, quantity: 1, image: afang },
                { id: 5, name: "Ofada Rice", price: 11250, quantity: 1, image: ofada },
            ],
        },
    ];
    

    const [selectedVendor, setSelectedVendor] = useState(null);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const handleVendorClick = (vendor) => {
        setSelectedVendor(vendor);
    };

    const handleAddToCart = (dish) => {
        setCart((prevCart) => [...prevCart, dish]);
    };

    const handleViewCart = () => {
        navigate("uniben-foodie/cart", { state: { cart } });
    };

    return (
        <div>
            <div className="food-vendors-page">
                <div className="vendors-list">
                    <h2>Food Vendors</h2>
                    <ul>
                        {vendors.map((vendor) => (
                            <li
                                key={vendor.id}
                                onClick={() => handleVendorClick(vendor)}
                                className="vendor-item"
                            >
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="vendor-image"
                                />
                                {vendor.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="services-list">
                    {selectedVendor ? (
                        <>
                            <h2>Services from {selectedVendor.name}</h2>
                            <ul>
                                {selectedVendor.services.map((service) => (
                                    <li key={service.id} className="service-item">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="service-image"
                                        />
                                        <span>{service.name} - ₦{service.price}</span>
                                        <button onClick={() => handleAddToCart(service)}>
                                            Add to Cart
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <h2>Select a vendor to view their services</h2>
                    )}
                </div>

                <div className="cart">
                    <h2>Cart</h2>
                    {cart.length > 0 ? (
                        <>
                            <button className="view-cart-button" onClick={handleViewCart}>
                                View Cart
                            </button>
                        </>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Vendor;
