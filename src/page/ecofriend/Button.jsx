import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
    padding: 8px 8px;
    font-size: 16px;
    color: #FFFFFF;
    border-width: 1px;
    border-radius: 8px;
    border: none;
    background-color: #ADC178;
    cursor: pointer;
`;


function Button(props) {
    const { title, onClick } = props;
    
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;