import React from 'react';
import { useState } from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
        <div className='page'>
        <div className='border'style = {{marginTop:"70px"}}>
        <div className='login-container'>
        <p id='log'><span style={{ fontSize: '50px'}}>BookMyStay</span></p>
        <p id='signup'>Don't have an account? <Link to='/Register'>Sign up</Link></p>
        <div className='main'>
        <div id="fb">
            <a href='#'>
            <FontAwesomeIcon icon={faFacebook} />
            <p>Sign in with Facebook</p>
            </a>
        </div>
        <div id="go">
            <a href='#'>
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png" height={30}/>
            <p>Sign in with Google</p>
            </a>
        </div>
        <form onSubmit={handleSubmit}>
        <div>
        <input id='email' type="email" title='Email' placeholder="Email" value={email} onChange={handleEmailChange} style={{ color: 'white' }} required/>
        </div>
        <div>
        <input id='password' type="password" title='Password' placeholder="Password" value={password} onChange={handlePasswordChange} style={{ color: 'white' }} required/>
        </div>
          <p id='forget'><a href='#'>Forgot your password?</a></p>
          <button id='login' type="submit">Sign in</button>
        </form>
        </div>
      </div>
      </div>
      </div>
    );
  };

  export default Login ;