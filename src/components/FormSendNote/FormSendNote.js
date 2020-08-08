import React,{useState} from 'react';
import {FormControl, FormGroup, TextField, Button} from '@material-ui/core';
import './FormSendNote.scss';



const FormSendNote = (props) => {

const {sendNote} = props;

const [formValue, setFormValue]= useState({

    name:'',
    nota:''
})


const onFormChange = e => {
    setFormValue({
        ...formValue,
        [e.target.name]: e.target.value
    })
}

    return ( 

<div className="form-send-note">
<h2 className="form-send-note__title">Enviar Nota</h2>

<form className="form-send-note__form" onSubmit={event=>sendNote(event,formValue)} onChange={onFormChange}>

    <FormControl>
        <FormGroup>

            <TextField 
            className="form-send-note"
            type='text'
            name='name'
            placeholder='Nombre de usuario'
            margin='normal'
            />

        </FormGroup>

        <FormGroup>
            <TextField 
            className="form-send-note__form-textarea"
            name="nota"
            multiline
            rows='6'
            placeholder = "Escribe Tu Nota"
            margin='normal'
            />
        </FormGroup>

        <FormGroup>
            <Button type="submit"> Enviar Nota</Button>
        </FormGroup>
    </FormControl>
</form>

</div>


     );
}
 
export default FormSendNote;