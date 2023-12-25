import React from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";



const Login = () => {
  
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })
  const navigate = useNavigate();
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData, [name]: value});

  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    
    try {
      const response = await axios.post("http://localhost:4000/user/login",formData);
      console.log(response);
      if(!response.data === "No user found"){
        alert("No user found");
  
      }else if(!response.data === "wrong password"){
        alert("wrong Password");
       }else if(response?.status){
        localStorage.setItem("userinfo", JSON.stringify(response.data));
        alert(response.data.msg);
        navigate("/home")
    }
      
      
        } catch (e) {
      console.error("Error during Registeration", e);
    }
  }
  
   
  

  




  return (
    <div className='login_header'>
      
       
        <form className="login_form" onSubmit={handleSubmit} >
       <h1>Login</h1>
        <input type="email" 
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
         placeholder='Email' /> <br />
        <input type="password"
        name='password'
        value={formData.password}
        onChange={handleChange}
        required 
         placeholder='Password' /> <br />
        <button  className='btn-btn' type='submit'> Submit</button>
        <p className='para-login'>Don't you have an accunt?<a href="/">signup</a></p>
        </form>
       

    </div>
  )
  }

export default Login