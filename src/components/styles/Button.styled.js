import styled from "styled-components";

export const RegBtn = styled.button`
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

export const BorderedBtn = styled(RegBtn)`
    border: 1.5px ;
    border-style: solid;
    border-radius: 14px;
    padding: 14px;
    height: 42px;   
`
export const DropBtn = styled(RegBtn)`
width: 83px;
`

export const IconedBtn = styled(RegBtn)`
    // width: 110px;
    margin: 0px 4px;
    padding: 4px 10px;
svg{
    padding: 8px;
}
`