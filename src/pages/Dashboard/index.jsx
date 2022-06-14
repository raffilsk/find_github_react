import { Form, Title } from './styles';

export function Dashboard() {
   return(
      <>
         <Title>Buscar Repositório</Title>
         <Form>
            <input type="text" placeholder='Nome do usuário'/>
            <button type='submit'>Buscar</button>
         </Form>
      </>
      )
   }