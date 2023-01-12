import React from "react";
import styled from "styled-components";
import temporary from '../../../public/Img/temporary.png'

const Wrapper = styled.div`
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    border: none;
`;

const popPost = styled.p`
    font-size: 20px;
`;

function VolPoplistItem(props) {
    const { popPost, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <img src={temporary} alt="이미지" />
            <popPost>활동명</popPost>
        </Wrapper>
    )
}

export default VolPoplistItem;