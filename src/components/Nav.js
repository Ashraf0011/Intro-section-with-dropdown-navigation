
import React, { useState } from 'react'
import Button from './Button';
import logo from '../images/logo.svg'
import styled from "styled-components";
import OutsideClickHandler from 'react-outside-click-handler';


const NavStyled = styled.nav`
margin: .8rem 7.4rem;
display:flex;
justify-content: space-between;
ul.left {
    list-style-type:none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    img{
        margin: 18px 50px;
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
const ListNav = styled.ul`
position: absolute;
top: 70px;
left: 113px;
padding: 10px;
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
const SecListNav = styled(ListNav)`
position: absolute;
z-index: 2;
left: 306px;
top: 70px;
width: 116px;
height: 110px;
   
    button{
        margin: 0px 4px;
        padding: 8px 10px;
    }
`


export default function Nav() {

    let [isOnView, placeView] = useState(false)
    let [secOnView, place2View] = useState(false)

    const FirstList = () => {

        return (
            <ListNav className='newView' >
                <li> <Button buttonName={"Calander"} iconName={"RiCalendarEventFill"} iconColor={"red"} /> </li>
                <li> <Button buttonName={"Reminders"} iconName={"AiTwotoneBell"} iconColor={"red"} /> </li>
                <li> <Button buttonName={"Planning"} iconName={"AiFillClockCircle"} iconColor={"red"} /> </li>
                <li> <Button buttonName={"Todo List"} iconName={"RiTodoLine"} iconColor={"red"} /> </li>
            </ListNav>
        )
    }

    const SecondList = () => {
        return (
            <SecListNav className='newView' >
                <li> <Button buttonName={"History"} /> </li>
                <li> <Button buttonName={"Our Team"} /> </li>
                <li> <Button buttonName={"Blog"} /> </li>
            </SecListNav>
        )
    }


    return (

        <NavStyled  >
            <ul className='left'>
                <img src={logo} alt="an-imge" />
                <li >
                    <OutsideClickHandler onOutsideClick={() => {
                        placeView(false)
                    }}>
                        <Button
                            buttonName={"Features"}
                            dropDown={true}
                            onClick={() => {
                                placeView(isOnView => !isOnView)
                                place2View(false)
                            }} />
                    </OutsideClickHandler>

                </li>

                {isOnView ? <FirstList /> : <></>}

                <li >
                    <OutsideClickHandler onOutsideClick={() => { place2View(false) }}>
                        <Button
                            buttonName={"Company"}
                            dropDown={true}
                            onClick={() => {
                                place2View(secOnView => !secOnView)
                                placeView(false)
                            }} />
                    </OutsideClickHandler>


                </li>
                {secOnView ? <SecondList /> : <></>}

                <li>
                    <Button buttonName={"Career"} />

                </li>
                <li>
                    <Button buttonName={"About"} />

                </li>
            </ul>


            <ul className='right'>
                <li>
                    <Button buttonName={"Login"} />
                </li>
                <li>
                    <Button buttonName={"Register"} border={true} />
                </li>
            </ul>
        </NavStyled>
    )
}






