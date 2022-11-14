import styled from "styled-components";



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
width:1440px;
height: 700px;
justify-content: center;
align-items: center;
margin: auto;


.grids{

width: 1440px;
min-width:1160px;
height: 700px;
display: grid;

grid-template-columns:repeat(12, 1fr);
grid-template-rows:repeat(12, 1fr);

/* background: hsla(24,50%,60%,0.1); */


    
   
    .headings {
        width: 100%;
        margin-left:50px;
        grid-column: 2 / 7;
        grid-row: 4 / 5;
       
        font-size: 80px !important;
        line-height: 80px !important;
        font-weight: 800 !important;
       
    }

    .description{
        margin-left:50px;
        grid-column: 2 / 6;
        grid-row: 6 / 7;
    
    }

    button{
        margin-left:50px;
        margin-top: 50px;
        width: 163px;
        height: 56px;
        
        font-size: 18px;
        font-weight: 700;

        background: black;
        color: #fffffd;
        border: 0px;
        border-radius: 15px;

        grid-column: 2 / 7;
        grid-row: 7/9 ;
    }

    .brands{
        grid-column: 2 / 8;
        grid-row: 11/12 ;
        
        
    }
    
    
    img {
        margin-left: 55px;
        grid-column: 7/-1;
        grid-row: 1/-1;
        &.ig{
            width: 480px;
            height: 640px;
         }
    }


}



`