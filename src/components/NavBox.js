import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import Button from './Button'


const NavBar = styled.div`
    // nav bar
    margin: 1rem 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    
   .back{
        content: "";
        position: absolute;
        top: 0%;
        right: 0%;
        z-index: -1;
        background-color: white;
        width: 70vw;
        height: 100vh;

    }
    
 .barBox{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.7rem;
    height: 1.6rem;
    
    transition: all 0.5s ease-in-out;
    z-index: 2;

    .bars{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 2em;
        height: 5px;
        border-radius: 2px;
        background:  hsla(0,0%, 25%, 1);
        transition: all 0.5s ease-in-out;
        z-index: 3;
    
        &::before, 
        &::after{
            content: "";
            cursor: pointer;
            position: absolute;
            z-index: 3;
            width: 2em;
            height: 5px;
            border-radius: 2px;
            /* box-shadow: 0 2px 10px hsla(190,30%, 55%, .9); */
            background: hsla(0,0%, 25%, 1);
            transition: all .4s ease-in;

        }
        &::before{
            transform: translateY(-10px);
        }    
        &::after{
            transform: translateY(10px);
        }    
    }
 }


`



const Navarea = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
z-index: 3;
top: 0%;
left: 0%;
z-index: 2;

display: flex;
flex-direction: column;
justify-content:center;
align-items: center;


background-color: hsla(0,0%,8%,.8);
color: black;

    .biglists {
        margin-top: 3rem;
        list-style-type: none;
        width: auto;

        display: flex;
        flex-direction: column;
        justify-content: flex-start; //for now
        align-items:flex-start;
    }
    .smalllist{
        display: flex;
        flex-direction: row;
        list-style-type: none;
    }
     

.inner{
    height: 2rem;
    margin-left: 2rem;
}
`

const Navrea = () => {

    let [one, oneView] = useState(false)
    let [two, twoView] = useState(false)

    return (
        <Navarea className='navearea'>
            <span className='back'>
                <ul className='biglists'>
                    <li > <Button
                        buttonName={"Features"}
                        dropDown={true}
                        onClick={() => {
                            oneView(one => !one)
                            twoView(false)
                        }} />
                    </li>

                    {
                        one ?
                            <>
                                <li className='inner'> <Button buttonName={"Calander"} iconName={"RiCalendarEventFill"} iconColor={"red"} /> </li>
                                <li className='inner'> <Button buttonName={"Reminders"} iconName={"AiTwotoneBell"} iconColor={"red"} /> </li>
                                <li className='inner'> <Button buttonName={"Planning"} iconName={"AiFillClockCircle"} iconColor={"red"} /> </li>
                                <li className='inner'> <Button buttonName={"Todo List"} iconName={"RiTodoLine"} iconColor={"red"} /> </li>
                            </> :
                            <></>
                    }

                    <li > <Button
                        buttonName={"Company"}
                        dropDown={true}
                        onClick={() => {
                            twoView(two => !two)
                            oneView(false)
                        }} />
                    </li>
                    {two ?
                        <>
                            <li className='inner' > <Button buttonName={"History"} /> </li>
                            <li className='inner'> <Button buttonName={"Our Team"} /> </li>
                            <li className='inner'> <Button buttonName={"Blog"} /> </li>
                        </> :
                        <></>
                    }

                    <li><Button buttonName={"Career"} /></li>
                    <li><Button buttonName={"About"} /></li>
                </ul>

                <ul className='smalllist'>
                    <li>
                        <Button buttonName={"Login"} />
                    </li>
                    <li>
                        <Button buttonName={"Register"} border={true} />
                    </li>
                </ul>

            </span>

        </Navarea >
    )
}



const NavBox = () => {
    let [open, setOpen] = useState(false)

    return (
        <NavBar className='navBar' >
            <img src={logo} alt="an-imge" />
            <div className='barBox' >
                <div className='bars' onClick={() => {

                    if (open === false) {
                        setOpen(true);
                    } else setOpen(false);
                }} ></div>
                {
                    open ? <Navrea /> : <></>

                }
            </div>
        </NavBar>
    )
}

export default NavBox