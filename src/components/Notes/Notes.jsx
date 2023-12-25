import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { Link  } from 'react-router-dom';
import { useState } from 'react';


import NoteItem from "../NoteItem/NoteItem";



const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

 const handleSearch = ()=>{
  setFilteredNotes(notes.filter(note=>{
    if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
      return note;
    }
  }))

 }

 useEffect(handleSearch, [text]);

  return (
    <section id='app'>
        <header className='notes_header'>
            {!showSearch && <h2>My Notes</h2>}
            { showSearch && <input type="text" value={text} onChange={(e)=>{setText(e.target.value); handleSearch();}} autoFocus placeholder='Keyword...' />}
            <button className='btn' onClick={()=>setShowSearch(prevState => !prevState)}><CiSearch /></button>
        </header>
        <div className="notes_container">
          {filteredNotes.length == 0 && <p className='empty_notes'>Note notes found....</p>}
            {
             notes.map(notes =><NoteItem key={notes.id} note={notes} />)
            }
        </div>
        <Link to='/create-note' className='btn add_btn'><BsPlusLg /></Link>
    </section>
  )
}

export default Notes;