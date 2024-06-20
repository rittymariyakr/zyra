import React, { useState } from 'react'
import './Signup.css'
import { getUsers, registerAPI } from '../services/allAPI';

function Signup() {
  




    
    const [userData, setUserData] = useState({
      username: "",
      email: "",
      mobile:"",
      password: ""
  })
  console.log(userData);
  
  const handleRegister = async (e) =>{
    e.preventDefault()

    const {username, email, mobile, password} = userData

    if(!username || !email || !mobile || !password){
      alert('Please Enter Details')
    }
    else{
      const result = await registerAPI(userData)
      console.log(result.data);


    }
  }

  const getAllUsers = async()=>{
    const response = await getUsers()
    console.log(response.data);
  }
   

//   const fetchData = async () => {
//     try {
//         const result = await get('http://127.0.0.1:8000/api/users/register/'); // Replace with your actual endpoint
//         setData(result);
//         alert('try')
//         console.log('try');
//     } catch (error) {
//         setError(error);
//         console.log('catch');
//         alert('catch')
//     } finally {
//         setLoading(false);
//     }
// };

  

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

        <div className="form-group">
          <label htmlFor="mobile">Mobile number</label>
          <input
          onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} value={userData.mobile}
            type="tel"
            placeholder='Mobile number'
            id="mobile"
            name="mobile"
            
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
        {/* <div className="form-group">
          <label htmlFor="passwordConfirm">Re-enter password</label>
          <input
            type="password"
            placeholder='Re-enter Password'
            id="passwordConfirm"
            name="passwordConfirm"
            
            required
          />
        </div> */}
        <button type="submit" onClick={handleRegister} className="signup-button">Create account</button>

        <div className='redirect'>

        </div>
      </form>  
    </div>
    </>
  )
}

export default Signup