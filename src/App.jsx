    import React, { useState } from 'react';
    import './App.css'
    import Note from './Note';
    import CreateArea from "./CreateArea"
    import Footer from "./Footer"
    import Header from './Header';

    function App() {
      const [item, setItem] = useState([]);

    function createNote(note) {
      setItem(
        prevValues =>{
        return [...prevValues ,note]
        }
      )
    }
    function deleteNote(id) {
      setItem ( prevValues =>prevValues.filter( (noteItems,index)=>  index  !== id ))
    }
   

      return (
        <div>
          <Header />
          <CreateArea saveNote={createNote} />
          <div>
          {item.map( (noteItems ,index) =>  {
            return <Note  key={index} id={index} title={noteItems.title} content={noteItems.content} deleteNote={deleteNote}/>})} 
          
              </div>
          <Footer />
        </div>
      );
    }
    export default App;
