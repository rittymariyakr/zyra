import React, { useState } from 'react'
import './Signup.css'
import { getUsers, registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function Signup() {
  




    const navigate = useNavigate()
    const [userData, setUserData] = useState({
      name: "",
      email: "",
      // mobile:"",
      password: "",
      confPassord : ""
  })

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
    if (passwordConfirm) {
      validatePassword(e.target.value, passwordConfirm);
    }
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
    validatePassword(userData.password, e.target.value);
  };

  const validatePassword = (password, passwordConfirm) => {
    if (password && passwordConfirm && password !== passwordConfirm) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  console.log(userData);
  
  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password } = userData;

    // if (!name || !email || !password) {
    //     alert('Please Enter Details');
    // } else {
        const result = await registerAPI(userData);
        console.log(result.data);

        if (result.status === 200) {  // Corrected 'satus' to 'status'
            alert(`${result.data.username} is successfully registered`);

            setUserData({
              username:"",
                name: "",
                email: "",
                password: "",
                passwordConfirm:""
            });
            navigate('/signin')
        } else {
            alert(`${result.response.data} failed registration`);
        }
    // }
};


  const getAllUsers = async()=>{
    const response = await getUsers()
    console.log(response.data);
  }
   


  

  return (
    <>
  
    <div className="signup-container">
      <div className="signup-header">
          <h2>Create Account</h2>
        </div>  

        <form  className="signup-form">

          
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            onChange={(e) => setUserData({ ...userData, username: e.target.value })} value={userData.username}
            type="text"
            placeholder='First and last name'
            id="name"
            name="name"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
          onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email}
            type="email"
            placeholder='Email'
            id="email"
            name="email"
            required
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="mobile">Mobile number</label>
          <input
          onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} value={userData.mobile}
            type="tel"
            placeholder='Mobile number'
            id="mobile"
            name="mobile"
            
            required
          />
        </div> */}

        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={handlePasswordChange}
          value={userData.password}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="passwordConfirm">Re-enter password</label>
        <input
          onChange={handlePasswordConfirmChange}
          value={passwordConfirm}
          type="password"
          placeholder="Re-enter Password"
          id="passwordConfirm"
          name="passwordConfirm"
          required
        />
      </div>
      {error && <span style={{ color: 'red' }}>{error}</span>}

        <button type="submit" onClick={handleRegister} className="signup-button">Create account</button>

        <div className='redirect'>

        </div>
      </form>  
    </div>
    </>
  )
}

export default Signup