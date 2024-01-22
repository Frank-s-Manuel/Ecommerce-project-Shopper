import React from 'react'
import './Css/Loginsignup.css'
const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fieldS">
           <input type="text" placeholder='Your Name' />
           <input type='email' placeholder='Email'/>
           <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name=''  id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup