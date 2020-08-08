import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendNote from "../FormSendNote";
import { NOTAS_STORAGE } from "../../utils/contants";
import "./SendNote.scss";


const SendNote = props => {
  const { setToastProps, allNotes} = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendNote = (event, formValue) => {
    event.preventDefault();

    const { name, nota } = formValue;
    let allNotesarray = [];

    if(allNotes){

        allNotesarray = allNotes;
    }

    if (!name || !nota) {
      setToastProps({
        open: true,
        text: "faltan campos"
      });
    } else {
      formValue.time = moment();
      allNotesarray.push(formValue);
      localStorage.setItem(NOTAS_STORAGE, JSON.stringify(allNotesarray));
      setToastProps({
        open: true,
        text: "enviado"
      });

setIsOpenModal(false)
      
    }
    allNotesarray = [];
  };

  return (
    <div className="send-note">
      <Fab
        className="send-note__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendNote sendNote={sendNote} />
      </ModalContainer>
    </div>
  );
};

export default SendNote;
