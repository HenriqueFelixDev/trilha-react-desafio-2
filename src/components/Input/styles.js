import styled from "styled-components";

export const Input = styled.input`
    background: transparent;
    border: 1px solid #656565;
    border-radius: 0.75rem;
    color: #FFFFFF;
    outline: none;
    
    font-size: 1.25rem;
    padding: 0 20px;
    height: 62px;
    width: 100%;

    transition: all .15s linear;

    &:focus {
        border-color: #F0F0F0;
    }
`