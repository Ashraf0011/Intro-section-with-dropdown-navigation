import styled from "styled-components";

export const NavStyled = styled.nav`
display:flex;
justify-content: space-between;
ul.left {
    list-style-type:none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    img{
        margin: 18px 18px;
    }
    li{
        list-style-type: none;
    }
}
ul.right {
    list-style-type:none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    
    li{
        list-style-type: none;
    }
}
`
export const ListNav = styled.ul`
position: absolute;
top: 0;
left: 113px;

padding: 0px;
width: 153px;
height: 160px;

/* Pure White */
background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.149126);
border-radius: 10px;

    list-style-type: none ;
    
    li{
         list-style-type: none ;
    }

`
export const SecListNav = styled(ListNav)`
position: absolute;
width: 116px;
height: 110px;
left: 306px;
top: 0;
   
    button{
        margin: 0px 4px;
        padding: 6px 10px;
    }
`