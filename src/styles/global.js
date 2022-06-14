import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body{
   background-color: #121212;
}

body, input, button{
   font: 1rem Poppins, sans-serif;
}

button{
   cursor: pointer;
}

#root{
   max-width: 960px;
   margin: 0 auto;
   padding: 2.5rem 1rem;
}
`