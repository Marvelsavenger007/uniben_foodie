import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './home.css'
import { CartContext } from "../../components/cartcontext/CartProvider";
import cart from "../../images/cartwhite.png";
import tacos from "../../images/tacos.jpeg";
import burger from "../../images/burger.jpeg";
import egusi from "../../images/egusi.jpeg";
import jollof from "../../images/jollof.jpg";
import spag from "../../images/spags.jpeg";
import pizza from "../../images/pizza.jpeg";




const Home = () => {
    const navigate = useNavigate(); // Define navigate
    const { addToCart } = useContext(CartContext);

    // Local state to track cart items
    const [cartItems, setCartItems] = useState([]);

    const trendingVendors = [
        { id: 1, name: "Mama's Palace", image: egusi },
        { id: 2, name: "Burger Bliss", image: burger },
        { id: 3, name: "Tacos World", image: tacos },
        { id: 3, name: "Chef Italiano", image: pizza },
    ];

    const bestDishes = [
        { id: 1, name: "Spaghetti Bolognese", image: spag, price: 4500 },
        { id: 2, name: "Jollof Rice & Chicken", image: jollof, price: 2500 },
        { id: 3, name: "Tacos", image: tacos, price: 2000 },
    ];

    const promoDishes = [
        { id: 1, name: "Discounted Pizza", image: pizza, price: 7000, discount: -20 },
        { id: 2, name: "Half-Price Burgers", image: burger, price: 1500, discount: -20 },
    ];

    const mostPopularDish = {
        id: 101,
        name: "Jollof Rice & Chicken",
        image: jollof,
        price: 2500
    };

    const handleAddToCart = (dish) => {
        // Update local cart state
        setCartItems((prevItems) => [
            ...prevItems,
            { ...dish, quantity: 1 },
        ]);
    };

    const handleViewCart = () => {
        navigate("/uniben-foodie/cart", {
            state: { cart: cartItems },
        });
    };

    // Animation Variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="homepage"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
        >
            {/* Header */}
            <motion.header
                className="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="header-title">UNIBEN Foodie Express</h1>
                <p className="header-subtitle">Delivering Happiness To Your Doorstep</p>
            </motion.header>

            {/* Trending Vendors */}
            <section className="trending-vendors-section">
                <h2 className="section-title">Trending Vendors</h2>
                <div className="carousel">
                    <div className="carousel-track">
                        {trendingVendors.map((vendor) => (
                            <div key={vendor.id} className="carousel-card">
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="card-image"
                                />
                                <h3 className="card-title">{vendor.name}</h3>
                            </div>
                        ))}
                        {/* Duplicate the array to create an infinite effect */}
                        {trendingVendors.map((vendor) => (
                            <div key={`duplicate-${vendor.id}`} className="carousel-card">
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="card-image"
                                />
                                <h3 className="card-title">{vendor.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Most Popular Dish */}
            <motion.section
                className="section popular-dish"
                variants={sectionVariants}
            >
                <h2 className="section-title">Most Popular Dish</h2>
                <div className="popular-dish-container">
                    <motion.img
                        src={mostPopularDish.image}
                        alt={mostPopularDish.name}
                        className="popular-dish-image"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <div>
                        <h3 className="popular-dish-title">{mostPopularDish.name}</h3>
                        <p>₦{mostPopularDish.price}</p>
                        <button
                            className="add-to-cart-button"
                            onClick={() => handleAddToCart(mostPopularDish)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* Best Dishes */}
            <motion.section className="section" variants={sectionVariants}>
                <h2 className="section-title">Best Dishes</h2>
                <div className="grid">
                    {bestDishes.map((dish) => (
                        <motion.div key={dish.id} className="card" variants={cardVariants}>
                            <img src={dish.image} alt={dish.name} className="card-image" />
                            <h3 className="card-title">{dish.name}</h3>
                            <p>₦{dish.price}</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => handleAddToCart(dish)}
                            >
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Promo Dishes */}
            <motion.section className="section" variants={sectionVariants}>
                <h2 className="section-title">Promo Dishes</h2>
                <div className="grid">
                    {promoDishes.map((promo) => (
                        <motion.div key={promo.id} className="card" variants={cardVariants}>
                            <img src={promo.image} alt={promo.name} className="card-image" />
                            <h3 className="card-title">{promo.name}</h3>
                            <p>₦{promo.price}</p>
                            <p>{promo.discount}%</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => handleAddToCart(promo)}
                            >
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* View Cart Button */}
            {cartItems.length > 0 && (
                <div className="view-cart-container">
                    <button className="view-cart-button" onClick={handleViewCart}>
                        <img
                            src={cart}
                            width="30px"
                            height="30px"
                            alt="icon"
                        />
                        <p>({cartItems.length} items)</p>
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default Home;
