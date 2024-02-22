import  { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  }
    

  function  saveNote(event) {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.saveNote(note)
    setNote({
      title: "",
      content: "",
      })
    }
  

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={saveNote}>
        <AddIcon/>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
