import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(currentNote) {
    setNoteArray(prevNoteArray => {
      return [...prevNoteArray, currentNote];
    });
  }

  function deleteNote(id) {
    setNoteArray(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteArray.map((noteObject, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteObject.title}
            content={noteObject.content}
            onClick={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
