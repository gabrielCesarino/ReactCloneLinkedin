import React from 'react'
import './Login.css'

function Login() {

    const register = () => {};
    const loginToApp = () => {};

    return (
        <div className="login">
            <img 
                src="https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo.png"
                alt="LinkedIn Logo"
            />
            <form>
                <input type="text" placeholder="Full name (required if registering)" />

                <input placeholder='Profile pic URL (optional)' type="text" />

                <input placeholder="Email" type="email" />

                <input placeholder="Password" type="password" />
            </form>
            <button type="submit" onClick={loginToApp}>Sign In</button>


            <p>Not a member?  
                <span className="login__register" onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
