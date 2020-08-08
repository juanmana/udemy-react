import React from "react";
import { Card, CardContent } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import moment from "moment";
import "./Notes.scss";

const Notes = props => {
  const {
    nota: { name, nota, time },
    index,deleteNote
  } = props;

  console.log(nota);
  return (
    <Card className="nota">
      <CardContent>
        <div className="nota__header">
          <h5>{name}</h5>

          <DeleteTwoToneIcon onClick={()=> deleteNote(index)}/>
        </div>
        <p>{nota}</p>
        <div className="nota__date-add-nota">
            {moment(time).format('DD/MM/YYYY HH:mm')}
        </div>
      </CardContent>
    </Card>
  );
};

export default Notes;
