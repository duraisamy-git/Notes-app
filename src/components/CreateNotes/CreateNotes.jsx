import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import {v4 as uuid} from 'uuid';

import useCreateDate from '../Date/useCreateDate';

const CreateNotes = ({setNotes}) => {
  const[title, setTitle] = useState('');
  const[details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(title && details){
      const note = {id: uuid(), title, details, date}

      setNotes(prevNotes =>[note, ...prevNotes]);
      navigate('/home')
    }

    
  }
  return (
    <section  id='app'>
        <header className='create-note_header'> 
           <Link to="/home" className='btn'><IoIosArrowBack/> </Link>
           <button className='btn lg primary' onClick={handleSubmit}>Save</button>
        </header>
        <form  className="create-note_form" onSubmit={handleSubmit} >
          <input type="text"  value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)} autoFocus/>
          <textarea  rows="28" value={details} onChange={(e) =>setDetails(e.target.value)} placeholder='Note details...'></textarea>
        </form>
    </section>
  )
}

export default CreateNotes