import styled from "styled-components";


export const Container = styled.div`
display: flex;
column-gap: 1rem;
list-style: none;

   section{
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 22rem;
   height: 100vh;
   padding: 1rem;
   font-size: 1rem;
   background: #232323;
   color: #ddd;   

   li{
      display: flex;
      list-style: none;
      align-items: center;
      }


   .personalInfos{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;

      img{
      width: 10rem;
      border-radius: 50%;
      border: 1px solid white;
   }
      
   }

   .aditionalInfos{
      ul{
      display: flex;
      column-gap: 2rem;
      }

      li{
      flex-direction: column;
      list-style: none;
      align-items: center;
      }
   }
}

main{
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 1;
   padding: 1rem;
   font-size: 1rem;
   color: #ddd;
   background: #232323;

   h1{
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;

   }
   a{
      text-decoration: none;
      color: #ddd;
   }

   ul{
      width: 100%;
   }
   
   li{
      display: flex;
      flex-direction: column;
      height: 4rem;
      border: 1px solid #666;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      margin-bottom: 0.5rem;
   }
}
`
