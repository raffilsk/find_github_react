import styled from "styled-components";

export const Title = styled.h1`
   font-size: 2rem;
   color: #ddd;
`;

export const Form = styled.form`
   margin-top: 2.5rem;
   max-width: 40rem;

   display: flex;

   input{
      flex: 1;
      height: 3rem;
      padding: 0 1rem;
      border: 0;

      &:focus{
         outline: none;
      }

      &::placeholder {
         color: #a8a8a8;
      }
   }

   button{
      width: 8rem;
      height: 3rem;
      background: #3333ff;
      border: 0;
      color: #fff;
      font-weight: bold;

      &:hover {
         filter: brightness(0.9);
      }
   }
`;

export const Error = styled.span`
   color: red;
   display: block;
`