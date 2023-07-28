import React from 'react'
import './Signin.css'

const Signin = () => {
  return (
    <div id="signincontainer">
        <h1 id="logo">INSTAGRAM</h1>

        <div id="inputs">
            <input type="text" className="userinput"  placeholder='phone number,Username,Or EMail'/>
            <input type="password" className="userinput" placeholder='Password' />
        </div>

        <button id="login">Log In</button>
    </div>
  )
}

export default Signin