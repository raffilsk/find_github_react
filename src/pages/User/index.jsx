import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import { Container } from "./styles";

export function User() {
   const [user, setUser] = useState({});
   const [repos, setRepos] = useState([]);
   const params = useParams();

   useEffect(() => {

      api.get(`users/${params.user}`).then((response) => {
         setUser(response.data)
      })
      api.get(`users/${params.user}/repos`).then((response) => {
         setRepos(response.data)
      })

   }, [])



   return (

      <Container>
         <section>
            <div className='personalInfos'>
               <img src={user.avatar_url} alt="" />
               <ul>
                  <li>
                     User: {user.login}
                  </li>
                  <li>
                     Email: {user.email}
                  </li>
                  <li>
                     Bio: {user.bio}
                  </li>
               </ul>
            </div>

            <div className='aditionalInfos'>
               <ul>
                  <li>
                     <strong>{user.followers}</strong>
                     <span>Seguidores</span>
                  </li>
                  <li>
                     <strong>{user.following}</strong>
                     <span>Seguindo</span>
                  </li>
               </ul>
            </div>
         </section>
         <main>
            <h1>Repositórios</h1>
            <ul>
               {
                  repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
                     .map((repo) => (
                        <a href={repo.html_url}>
                           <li key={repo.id}>
                              <strong>{repo.name}</strong>
                              <span>Star: {repo.stargazers_count}</span>
                           </li>
                        </a>
                     ))
               }
            </ul>
         </main>
      </Container>
   )
}