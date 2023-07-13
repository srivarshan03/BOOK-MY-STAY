import React from 'react';
import GoogleLogin from 'react-google-login';


function test(){
    const handleFail = (result) =>{
        alert(result);
      };
      const handleLogin = (googleData) =>{
        console.log(googleData);
      }; 
return (
    <div>
    <h2>Google login</h2>
        <GoogleLogin
            cleintId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText ="Log in with google"
            onSuccess = {handleLogin}
            onFailure = {handleFail}
            cookiePolicy = {'single_host_orgin'}
            >
        </GoogleLogin>
    </div>
);
}
export default test ;