import styled from "styled-components";

/**
 * responsive part left to do
 */

/**
 * For Grid system we would devide the full width into 12 column sections.
 * and the the grids will be streched. margin 32px and gutter 16px || 20px.
 * Few things to remember:
 *           total area: 1920px;
 *    unavailable space: 240px;  (two margins: 32px * 2 = 64px) + (16px * 11 = 176px)
 *      available space: 1680px;
 *     number of column: 12 columns;
 *  width of one column: 140px;  (1680px/12)= 140px
 * 
 * 
 *  Now if an Elemnt takes 3 column space then, it's total width will be:
 *  (140+20+140+20+140)px = 460px
 * 
 */
export const Page = styled.main`
width:100vw;
height: 31.8rem;
justify-content: center;
align-items: center;
margin: auto;




.grids{ 
width: 100%;
height: 100%;
display: grid;
grid-template-columns:repeat(7, 1fr);
grid-template-rows:repeat(12, 1fr);
   
    img {
     
        /* margin-left: 2.7rem; */
        grid-column: 1/-1;
        grid-row: 1/6;
        &.ig{
            width: 100%;
            height: 12.6rem;
         }
    }
    .headings { 
        text-align: center;
        /* width: 100%; */
        /* margin-left:2.7rem; */
        grid-column: 1/-1;
        grid-row: 6/8 ;
       
        font-size: 1.5rem;
        line-height: 2.5rem;
        font-weight: 700;

       /* margin: 1.7rem  1.7rem; */
    }

    .description{
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 500;
        font-size: .9rem; 
        line-height: 1rem;
        
        text-align: center;
        grid-column: 1 / -1;
        
        grid-row: 9 ;
margin: 0% 1rem;
        color: #686868;
    }

    button{
       
        width: 8rem;
        height: 2.5rem;
        
        font-size: 1rem;
        

        background: black;
        color: #fffffd;
        border: 0px;
        border-radius: 0.6rem;

        grid-column: 4 ;
        grid-row: 11 ;

        align-self: start;


        :hover{
            background-color: white;
            color: black;
            border: 2px solid black;
            cursor: pointer;
        }
        
    }

    .brands{
        grid-column: 1 / -1;
        grid-row: -1 ;
       margin: 1rem;
        display: flex;
        justify-content: space-around;
        img{
         width   : 5.4rem;
         height: 1rem;
        }
    }
    
}    
@media only screen and (max-width: 500px) {
.grids{ 
width: 100%;
height: 100%;
display: grid;
grid-template-columns:repeat(7, 1fr);
grid-template-rows:repeat(12, 1fr);
   
    img {
     
        /* margin-left: 2.7rem; */
        grid-column: 1/-1;
        grid-row: 1/6;
        &.ig{
            width: 100%;
            height: 12.6rem;
         }
    }
    .headings { 
        text-align: center;
        /* width: 100%; */
        /* margin-left:2.7rem; */
        grid-column: 1/-1;
        grid-row: 6/8 ;
       
        font-size: 1.5rem;
        line-height: 2.5rem;
        font-weight: 700;

       /* margin: 1.7rem  1.7rem; */
    }

    .description{
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 500;
        font-size: .9rem; 
        line-height: 1rem;
        
        text-align: center;
        grid-column: 1 / -1;
        
        grid-row: 9 ;
        margin: 0% 1rem;
        color: #686868;
    }

    button{
       
        width: 8rem;
        height: 2.5rem;
        
        font-size: 1rem;
        

        background: black;
        color: #fffffd;
        border: 0px;
        border-radius: 0.6rem;

        grid-column: 4 ;
        grid-row: 11 ;

        align-self: start;
        
    }

    .brands{
        grid-column: 1 / -1;
        grid-row: -1 ;
       margin: 1rem;
        display: flex;
        justify-content: space-around;
        img{
         width   : 8.4rem;
         height: 1rem;
        }
    }
    
}    
}    


/* Extra small devices (phones, 500px and up) */
@media only screen and (min-width: 500px) {
    .grids{
        display: grid;
        width: 100%;
        height: 100%;
        grid-gap: 10px;
        grid-template-columns:repeat(5, 1fr);
        grid-template-rows:repeat(5, 1fr);
        
    img{ 
            grid-column: 1 / span 11;
            grid-row: 1/2;
            
            &.ig{
                margin: auto;
                width: 20.7rem;
                height: 16rem;
            }
        }

    .headings{ 
        grid-column: 1 / span 11;
        grid-row: 2/3;
        /* display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; */
        text-align: center;
        }
    .description{ 

        grid-column: 1 / span 11;
        grid-row: 3/4;
        }
    button{  

        grid-column:  3/4; 
        grid-row:5/6;
        }
    .brands{

        margin:auto;
        grid-column:1/ span 11; 
        grid-row:12;
         img{
            width: 2.2rem;
            margin-left: 1rem;
            height: auto;
        }
        }
    
 }
} 




/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .grids{
    img{ 
            grid-column: 6/10;
            grid-row: 2/ span 10; 
        &.ig{
                width: 18.7rem;
                height: 24rem;
            }
        }


    .headings{ 
        font-size:3.1rem;
        text-align: left;
        grid-column: 2/ span 4; 
        grid-row: 3 / span 2;
        margin: 0;
        }
    .description{ 
    
        text-align: left;
        grid-column: 2 / span 4; 
        grid-row: 5/ span 2;
       margin: 0;
        }
    button{  
 
        grid-column: 2/ span 5 ; 
        grid-row:10 / span 1;
       
        }
    .brands{
        grid-column: 1 / span 5; 
        grid-row:12; 
        margin: auto;
         img{
 
            margin: 0 1rem;
            width: 2rem;
            height: auto;
            
        }
       
    }
    
 }
}
/* Medium devices (landscape tablets, 900px and up) */
@media only screen and (min-width: 900px) {
   .grids{
        width: 100vw;
        height: 40rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
    

    img{ 
        grid-column: 8/11;
        grid-row: 1/ span 11; 
    &.ig{
            width: 18.7rem;
            height: 24rem;
        }
    }


    .headings{  
        font-size: 3.4rem;
        line-height: 3.7rem;
        font-weight: 700;
        text-align: left;
        grid-column: 2 / span 6;
        grid-row: 3/ span 2;
        }
    .description{ 
         font-size: 1rem;
        line-height: 1.4rem;
        font-weight: 500;
        text-align: left;
        margin-left: 1rem;
        grid-column: 2 / span 5;
        grid-row: 6/span 2;
        
        }
    button{  
         font-size: 1rem;
          margin-left: 1rem;
        font-weight: 500;
        width: 8rem;
        height: 2.4rem;
        grid-column: 2 / span 2;
        grid-row: 9/ span 1;
        }
    .brands{  
        grid-column: 2 / span 5;
        grid-row: 10;
        margin: auto;
          img{
 
            margin: 0 1rem;
            width: 70px;
            height:1rem;
            
        }}

    }

}

/* Extra large devices (large laptops and desktops, 1600px and up) */
@media only screen and (min-width: 1200px) {

    .grids{
        width: 100vw;
        height: 45rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
    
img{ 
        grid-column: 7/span 4;
        grid-row: 1/ span 10; 
    &.ig{
            width: 26.7rem;
            height: 30rem;
        }
    }


    .headings{  
        font-size: 4.4rem;
        line-height: 4.7rem;
        font-weight: 700;
        text-align: left;
        grid-column: 2 / 7;
        grid-row: 3/ span 2;
        }
    .description{ 
         font-size: 1rem;
        line-height: 2rem;
        font-weight: 500;
        text-align: left;
        margin: 0;
        grid-column: 2 / 6;
        grid-row: 7/span 2;
        }
    button{  
        font-size: 1.2rem;
        margin:0;
        font-weight: 500;
        width: 8.8rem;
        height: 3rem;
        grid-column: 2 / span 2;
        grid-row: 10/ span 1;
        }
    .brands{  

        grid-column: 1 / span 5;
        grid-row: 11;
        margin: auto;
        }

    }
}




`