import React,{useState,useEffect} from "react";
import { Container, Snackbar } from "@material-ui/core";

import Header from "./components/Header";

import SendNote from "./components/SendNote";
import ListNotes from './components/ListNotes'
import {NOTAS_STORAGE } from './utils/contants'




function App() {


const [toastProps, setToastProps] = useState({

  open:false,
  text:null
});

const [allNotes, setAllNotes] = useState([])

const [reloadedNote, setReloadedNote] = useState(false)


useEffect(()=>{

const AllNotesStorage = localStorage.getItem(NOTAS_STORAGE )
const allNotesArray = JSON.parse(AllNotesStorage);
setAllNotes(allNotesArray)
setReloadedNote(false)

},[reloadedNote])



const deleteNote = (index)=>{

allNotes.splice(index,1)
setAllNotes(allNotes)
localStorage.setItem(NOTAS_STORAGE,JSON.stringify(allNotes))
setReloadedNote(true)
}





  return (
    <Container className="notes-simulator" maxWidth={false}>
      <Header />
      <SendNote setToastProps={setToastProps} allNotes={allNotes} />
<ListNotes allNotes={allNotes}  deleteNote={deleteNote}/>
      <Snackbar
 anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
 open={toastProps.open}
 autoHideDuration={1000}
 message={<span id='message-id'>{toastProps.text}</span>}    
    
    />
    </Container>
  );
}

export default App;
