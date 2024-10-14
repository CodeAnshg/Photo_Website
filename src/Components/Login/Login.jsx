// AuthForm.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSignUpClick = () => {
        setIsSignIn(false);
    };

    const handleSignInClick = () => {
        setIsSignIn(true);
    };

    return (
        <div className='main'>
            <div className={`wrapper ${isSignIn ? 'animate-signIn' : 'animate-signUp'}`}>
            <div className={`form-wrapper sign-up ${!isSignIn ? 'active' : ''}`}>
                <form>
                    <h2>Login</h2>
                    <div className="input-group">
                        <input type="text" required />
                        <label>Username</label>
                    </div>
                    
                    <div className="input-group">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                    <div className="sign-link">
                        <p>Already have an account? <a href="#" onClick={handleSignInClick}>Sign In</a></p>
                    </div>
                </form>
            </div>
            
            <div className={`form-wrapper sign-in ${isSignIn ? 'active' : ''}`}>
                <form>
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" required />
                        <label>Username</label>
                    </div>
                    <div className="input-group">
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="sign-link">
                        <p>Don't have an account? <a href="#" onClick={handleSignUpClick}>Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
