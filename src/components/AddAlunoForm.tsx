import React, { useState, FormEvent} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contato from '../models/Contato';
//import styled from "styled-components";

type props = {
    onAddAluno:( contato: Contato)=> void;
}



const AddAlunoForm = ({ onAddAluno }: props) => {

    const [name, setName] = useState("")
    const [curso, setCurso ] = useState("")
    const [ra, setRa ] = useState("")
    const [email, setEmail] = useState("")

    const hadleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        onAddAluno({

            id: uuidv4(),
            name,
            curso,
            ra,
            email
        })
    }

  

    return (
    <>
    
        
        <form onSubmit={hadleSubmit}>
           
        <div>
            <label htmlFor="input-name">Nome</label>
            <input
            id="input-name" 
            type="text"
            value={name} 
            onChange={event => setName(event.target.value)} />
        </div>
        <div>
            <label htmlFor="input-name">Curso</label>
            <input 
            id="input-name"
            type="text"
            value={curso}
            onChange={event => setCurso(event.target.value)}
            />
        </div>
        <div>
            <label htmlFor="input-name">Ra</label>
            <input 
            id="input-name"
            type="text"
            value={ra}
            onChange={event => setRa(event.target.value)}
            />
        </div>
        <div>
            <label htmlFor="input-name">E-mail</label>
            <input 
            id="input-name"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
        </div>
        

        
        <button type="submit">Criar Aluno</button>
        
        
        
        </form>
        

        </>
    );

}

export default AddAlunoForm;