import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    border-style: solid;
    border-width: 1px 0px;
    border-color: #D7D6D6;
    cursor: PointerEvent;
    background: white;
    :hover {
        background: #D7D6D6;
    }
`;

const Deadline = styled.p`
    font-size: 16px;
    color: #ADC178;
`;

const TitleText = styled.p`
    font-size: 16px;
`;

const Writer = styled.p`
    font-size: 16px;
`;

const Views = styled.p`
    font-size: 16px;
`;

function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <Deadline>{post.deadline}</Deadline>
            <TitleText>{post.title}</TitleText>
            <Writer>{post.writer}</Writer>
            <Views>{post.views}</Views>
        </Wrapper>
    );
}

export default PostListItem;