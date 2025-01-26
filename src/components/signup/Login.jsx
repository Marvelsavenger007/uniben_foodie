import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the website
    navigate('/uniben-foodie/home'); // Replace '/website' with the actual route of your website's homepage
  };

  return (
    <div className='body'>
      <div className="container">
        <div className="form-card">
          <h1 className="form-title">{isSignUp ? 'Sign Up' : 'Log In'}</h1>
          {isSignUp ? (
            <form className="form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" className="input-field" required />
              <input type="email" placeholder="Email" className="input-field" required />
              <input type="text" placeholder="Address" className="input-field" required />
              <select className="input-field" required>
                <option value="">Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="date" placeholder="Date of Birth" className="input-field" required />
              <input type="tel" placeholder="Phone Number" className="input-field" required />
              <input type="password" placeholder="Password" className="input-field" required />
              <button type="submit" className="btn">Sign Up</button>
            </form>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="input-field"
                required
              />
              <input type="password" placeholder="Password" className="input-field" required />
              <button type="submit" className="btn">Log In</button>
            </form>
          )}
          <p className="toggle-text">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span className="toggle-link" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Log In' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
