import React from 'react'
import { IconContext } from "react-icons";
import { AiFillCaretDown } from "react-icons/ai";
import { RiTodoLine, RiCalendarEventFill, } from "react-icons/ri";
import { AiTwotoneBell, AiFillClockCircle } from "react-icons/ai";
// import { BorderedBtn, RegBtn, DropBtn, IconedBtn } from './styles/Button.styled.js';
import styled from "styled-components";

const RegBtn = styled.button`
    border: none;
    margin: 10px 20px;
    padding: 16px 0;
    background: #ffffff;
    color: #686868;
    font-family: 'Epilogue', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    
    &:hover{
       cursor: pointer;
    }
`

const BorderedBtn = styled(RegBtn)`
    border: 1.5px ;
    border-style: solid;
    border-radius: 14px;
    padding: 14px;
    height: 42px;   
`
const DropBtn = styled(RegBtn)`
width: 83px;
`

const IconedBtn = styled(RegBtn)`
    // width: 110px;
    margin: 0px 4px;
    padding: 4px 10px;
svg{
    padding: 8px;
}
`






function Button({ buttonName, border, iconName, iconColor, dropDown, img, onClick }) {

    if (iconName && iconColor) {
        switch (iconName) {
            case "RiTodoLine":
                return (
                    <IconedBtn onClick={onClick}>
                        {/* for styling use icon-contxt-provider  {} */}
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', color: "orange" } }}>  <RiTodoLine /></IconContext.Provider>
                        {buttonName}
                    </IconedBtn>)

            case "RiCalendarEventFill":
                return (
                    <IconedBtn onClick={onClick}>
                        {/* for styling use icon-contxt-provider  {} */}
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', color: "red" } }}>
                            <RiCalendarEventFill />
                        </IconContext.Provider>
                        {buttonName}
                    </IconedBtn>)
            case "AiTwotoneBell":
                return (
                    <IconedBtn onClick={onClick}>
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', color: "brown" } }}>
                            <AiTwotoneBell />
                        </IconContext.Provider>
                        {buttonName}
                    </IconedBtn>)
            case "AiFillClockCircle":
                return (
                    <IconedBtn onClick={onClick}>
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', color: "blue" } }}>
                            <AiFillClockCircle />
                        </IconContext.Provider>
                        {buttonName}
                    </IconedBtn>)
            default:
                break;
        }

    } else if (dropDown) {
        return (
            <DropBtn onClick={onClick}>
                {buttonName} <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                    <AiFillCaretDown />
                </IconContext.Provider>
            </DropBtn>
        )
    } else if (border) {
        return (

            <BorderedBtn onClick={onClick}>
                {buttonName}
            </BorderedBtn>

        )
    } else {
        return (
            <RegBtn onClick={onClick}>
                {buttonName}
            </RegBtn>

        )
    }

}

export default Button