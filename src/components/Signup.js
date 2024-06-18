import React, { useState } from 'react'
import './Signup.css'

function Signup() {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '',
      password: '',
      passwordConfirm: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic
      console.log('Form data submitted:', formData);
    };
  

  return (
  
    <div className="signup-container">
      <div className="signup-header">
          <h2>Create Account</h2>
        </div>  

        <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            placeholder='First and last name'
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder='Email'
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile number</label>
          <input
            type="tel"
            placeholder='Mobile number'
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder='Password'
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirm">Re-enter password</label>
          <input
            type="password"
            placeholder='Re-enter Password'
            id="passwordConfirm"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">Create account</button>

        <div className='redirect'>

        </div>
      </form>  
    </div>
  )
}

export default Signup