import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Pages/Login/Login';
import Home from './components/Pages/Home/Home';
import CreateNotes from './components/CreateNotes/CreateNotes';
import EditNotes from './components/EditNotes/EditNotes';
import Signup from './components/Pages/Signup/Signup';
// import { useDispatch } from "react-redux";
// import { handleLogin } from "./slices/user";

// import dummyNotes from "./DummyNotes/dummy_notes";


const App = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     dispatch(handleLogin(token));
  //   }
  // },);

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  
  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  return (
       
      <BrowserRouter>
    <Routes>
      <Route path="/signup" element = {<Signup />} />
      <Route path="/" element = {<Home notes={notes} />} />
      <Route path="/create-note" element = {<CreateNotes setNotes={setNotes} />} />
      <Route path="/edit-note/:id" element = {<EditNotes notes={notes} setNotes={setNotes} />} />
      <Route path="/login" element = {<Login />} />
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App