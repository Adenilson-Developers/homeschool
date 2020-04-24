//Responsavel por mostrar as informações 
import React from 'react';
import Contato from "../models/Contato";
import styled from "styled-components";

type props = {
    contato: Contato;
    onRemoveAluno: (id: string) => void;
};



const Card = styled.li`
padding: 16px;

background-color:#FFFFE0;

& + & {
    margin-top:16px;
}

`;


const ContatoItem = ({ contato, onRemoveAluno }: props) =>(
    
    
        <Card>
        <div>
            <p>Nome: {contato.name}</p>
            <p>Curso: {contato.curso}</p>
            <p>Ra: {contato.ra}</p>
            <p>Email: {contato.email}</p>
        </div>
        <button onClick={() => onRemoveAluno(contato.id)}>
            Excluir Aluno
        </button>
        </Card>
    
)
    


export default ContatoItem;