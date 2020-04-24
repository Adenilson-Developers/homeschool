import React, {useState} from 'react';
import styled from 'styled-components';
import Contato from '../models/Contato';

import CONTATOS from '../containers/contatos';
import ContatoItem from '../components/Contatoitem';
import AddAlunoForm from '../components/AddAlunoForm';



const Wrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
background:#D3D3D3;
`;

const Card = styled.div`
width: 500px;
padding: 16px;
background-color: #4F4F4F;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
overflow: auto;
`;




const ContatotList = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`;



const ContactsAlunos = () =>{
    const [isAddAluno, setAddinAluno] = useState(false)
    const [ contatos, setContatos ] = useState(CONTATOS);

    const HandleRemoveAluno = ( removeAlunoId: string) =>{
        setContatos(contatos => contatos.filter(contato => contato.id !== removeAlunoId)
        )
    }

    const handleAddAlunos = (contato: Contato) =>{
        setContatos(contatos => contatos.concat(contato))
        setAddinAluno(false);
    }


    return (

    <Wrapper>

        <Card >
            
            <header>
                {isAddAluno && <AddAlunoForm onAddAluno={handleAddAlunos}/>}
                <button onClick={() => setAddinAluno(true)}>Adicionar Aluno</button>
            </header>

            <ContatotList>
        <ul>
            {
                contatos.map(contato =>(
                    <ContatoItem key={contato.id} contato={contato} onRemoveAluno={HandleRemoveAluno}/>
                ))
            }
        </ul>
        </ContatotList>

        </Card>
    </Wrapper>
    );
}

export default ContactsAlunos;