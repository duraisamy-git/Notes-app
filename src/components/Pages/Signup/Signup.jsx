import React, { useState } from 'react';
import './signup.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",

  });

 const handleChange = (e) =>{
     const {name, value} = e.target
     setFormData({...formData, [name]:value});
 };
 const handleSubmit =  async (e) =>{
  e.preventDefault();
  
  

  
  try {
    const response = await axios.post("http://localhost:4000/user/signup",formData);
    console.log(response);
    if(response.data === true){
      alert("User added successfully");

    }else if(response.data === false){
      alert("User already exits");
    }
    alert(response.data.msg);
    navigate("/login");
      } catch (e) {
    console.error("Error during Registeration", e);
  }
}

  
  return (
    <div className='signup_header'>
      
      
        <form className="signup_form" onSubmit={handleSubmit}>
       <h1>Signup</h1>
        <input type="text" name='name' value={formData.name} onChange={handleChange} required placeholder='Name' /> <br />
        <input type="email" name='email' value={formData.email} onChange={handleChange} required placeholder='Email' /> <br />
        <input type="password" name='password' value={formData.password} onChange={handleChange} required placeholder='Password' /> <br />
        <button  className='btn-btn' type='submit' > Submit</button>
        <p className='para-login'>Do you have an accunt?<a href="/login">login</a></p>
        </form>
       

    </div>
  )
}

export default Signup