import React from "react";
import { Grid } from "@material-ui/core";
import "./ListNotes.scss";
import Notes from "../Notes";

const ListNotes = props => {
  const { allNotes,deleteNote } = props;

  if (!allNotes || allNotes.length === 0) {
    return (
      <div className="list-notes-empty">
        <h2>No Hay notas..</h2>
      </div>
    );
  }

  return (
    <Grid container spacing={3} className="list-notes">
      {allNotes.map((nota, index) => (
        <Grid key={index} item xs={4}>
          <Notes nota={nota} index={index} deleteNote={deleteNote}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListNotes;
