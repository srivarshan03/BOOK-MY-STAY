import React from 'react';
import { useState } from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.css';
import { Link } from 'react-router-dom';
const Register = () => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmpasswordChange = (event) => {
      setConfirmpassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Mobile No:', mobile);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmpassword);
    };
    
    return (
        <div className='page'>
        <div className='border'style = {{marginTop:"50px"}}>
        <div className='login-container'>
        <h1 id='log'>BookMyStay</h1>
        <p id='signup'>Already have an account? <Link to='/'>Sign in</Link></p>
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
          <input id='email' type="email" placeholder="Email" value={email} onChange={handleEmailChange} style={{ color: 'white' }} required/>
          </div>
          <div>
            <input id='email' type="text"  placeholder="Mobile Number" value={mobile} onChange={handleMobileChange} style={{ color: 'white' }} required/>
          </div>
          <div>
            <input id='password' type="password"  placeholder="Password" value={password} onChange={handlePasswordChange} style={{ color: 'white' }} required/>
          </div>
          <div>
            <input id='password' type="password" placeholder="Confirm Password" value={confirmpassword} onChange={handleConfirmpasswordChange} style={{ color: 'white' }} required/>
          </div>
          <Link to='/Home'><button id='login' type="submit">Sign up</button></Link>
        </form>
        </div>
      </div>
      </div>
      </div>
    );
  };

  export default Register ;