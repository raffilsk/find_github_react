import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Error, Form, Title } from './styles';

export function Dashboard() {
   const [newUser, setNewUser] = useState('');
   const [inputError, setInputError] = useState('');
   const navigate = useNavigate();


   async function handleAddNewUser(event) {
      event.preventDefault();
      

      if (!newUser) {
         setInputError('Digite o nome do usuário');
         return;
      }

      try {
         const response = await api.get(`users/${newUser}`)
         setInputError('')
         navigate(`users/${newUser}`)         

      } catch (err) {
         setInputError('Este usuário não existe')
      }
   }

   return (
      <>
         <Title>Buscar Usuário Github</Title>
         <Form onSubmit={handleAddNewUser}>
            <input
               type="text"
               placeholder='Nome do usuário'
               value={newUser}
               onChange={(e) => setNewUser(e.target.value)}
            />
            <button type='submit'>Buscar</button>
         </Form>
         {inputError && <Error>{inputError}</Error>}
      </>
   )
}