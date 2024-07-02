import React, { useState } from 'react'
import "./Signin.css"
import { loginAPI } from '../services/allAPI';

function Signin() {

    const [userData, setUserData] = useState({
    
      username: "",
      password: ""
  })
  console.log(userData);

  const handleLogin = async (e) => {
    e.preventDefault()

    const {username, password} = userData

    if(!username || !password){
      alert('Please fill the form')
    }
    else{
      const result = await loginAPI(userData)
      console.log(result);

      if(result.status === 200){
        alert('Login Successfull')
      }
      else{
        
      }
    }
  }


  return (

      <div className="signin-container">
      <div className="signin-header">
          <h2>Sign in</h2>
        </div>  

        <form className="signin-form">

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
          onChange={(e) => setUserData({ ...userData, username: e.target.value })} value={userData.username}
            type="email"
            placeholder='username'
            id="username"
            name="username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
          onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password}
            type="password"
            placeholder='Password'
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit" onClick={handleLogin} className="signin-button">Login</button>
      </form>  
    </div>
  )
}

export default Signin