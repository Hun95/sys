import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    html{
        margin:0;
        padding:0;
        font-size:100%;
        box-sizing:border-box;
        -webkit-box-sizing : inherit;
        scroll-behavior :smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        

    }
    
    *, *::before, *::after{
        font-family: 'NotoSan', sans-serif;
         -webkit-box-sizing: inherit;
        box-sizing:inherit;
     } 

     body {
         margin:0;
         padding:0;
         line-height: 1.3;
         font-size: 1.125rem;
         display:block;
   
     font-family: 'NotoSan', sans-serif;


     }
     a{
    text-decoration: none;
     }
  
     a:link, a:visited {
         text-decoration:none;
     }
  
  
 

`;
