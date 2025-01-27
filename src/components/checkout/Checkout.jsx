import React, { useState } from "react";
import './checkout.css';
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";


const Checkout = () => {
  const navigate = useNavigate();
  const [paymentOption, setPaymentOption] = useState("");
  const [details, setDetails] = useState({
    location: "",
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  
  const publicKey = "pk_test_999774c3ffd5de139267f035f7c11c898141e07e"; 
  const amount = 5000 * 100; 
  const paystackEmail = details.email;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    if (paymentOption === "cash") {
      alert("Order confirmed! Pay on delivery.");
      navigate("/home");
    }
  };

  const componentProps = {
    email: paystackEmail,
    amount,
    metadata: {
      fullName: details.fullName,
      phone: details.phoneNumber,
    },
    publicKey,
    text: "Pay with Paystack",
    onSuccess: () => {
      alert("Payment successful! Your order has been placed.");
      navigate("/home");
    },
    onClose: () => alert("Payment canceled."),
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={details.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={details.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={details.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Pickup Location:</label>
          <input
            type="text"
            name="location"
            value={details.location}
            onChange={handleInputChange}
            placeholder="Enter your location"
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <div>
            <input
              type="radio"
              name="paymentOption"
              value="card"
              onChange={(e) => setPaymentOption(e.target.value)}
              required
            />
            Card
            <input
              type="radio"
              name="paymentOption"
              value="cash"
              onChange={(e) => setPaymentOption(e.target.value)}
              required
            />
            Cash
          </div>
        </div>
      </form>

      {paymentOption === "card" ? (
        <PaystackButton {...componentProps} className="paystack-button" />
      ) : paymentOption === "cash" ? (
        <button className="confirm-order-button" onClick={handleConfirmOrder}>
          Confirm Order
        </button>
      ) : (
        <p>Please select a payment option.</p>
      )}
    </div>
  );
};

export default Checkout;
