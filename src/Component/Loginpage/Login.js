

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  
    return (
        <div className="main-box">
            <div className="login-container">
                <div className="login-form">
                <h1>Login</h1>
                
                <p className='Line'>You will be directed to the homepage</p>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Submit</button>
                </div>
            </div>
        </div> 
    );
  };
  
  export default Login;
