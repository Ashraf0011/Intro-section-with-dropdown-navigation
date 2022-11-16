import { createGlobalStyle } from "styled-components";


/**
 * The challenge with using ems is that they are relative to the parent of 
 * the object or entity in question. So if the "html" element is set to 100%, 
 * 'body' copy is set to 1em, and 'p' is set to 1em, 'p' text would render 
 * (as expected) at 16px. But if you applied font-size: 1.25em to 'body', 
 * 'p' would now render at 20px, or 1.25 times the 100% size. 
 * In order to get 'p' to render at 16px, you would need to apply font-size: 0.8em to the 'p'. 
 * It can make your brain hurt quite quickly.
 * 
 * However, there is a really simple fix: don’t apply font-size to containers. 
 * Only apply it to elements of text themselves (i.e., the 'h2', the 'p', 
 * or to any class which is used on one of those text elements). 
 */


export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Epilogue';
    src: url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400&display=swap');
    font-weight:normal;
    font-style: normal;
}
@font-face {
    font-family: 'Epilogue';
    src: url('https://fonts.googleapis.com/css2?family=Epilogue:wght@700&display=swap');
    font-weight:bold;
    font-style: normal;
}

html{
    font-family: 'Epilogue', sans-serif;
    font-size: 18px;
    font-weight: 400;
}


*{
    margin: 0;
    padding: 0;
   
}
h1, h2, h3, h4, h5, h6{
    
    font-weight: 700;
    font-style: Bold;
}
p{
    font-size: 1rem;
    font-style: normal;
}

`