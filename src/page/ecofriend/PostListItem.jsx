import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 1020px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    width: 120px;
    margin-left: 30px;
`;

const TitleText = styled.p`
    display: inline;    
    font-size: 16px;
    width: 460px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 50px;
    align-items: center;
    padding: auto 0px;
`;

const Writer = styled.p`
    display: inline;
    font-size: 16px;
    width: 140px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 50px;
    align-items: center;
    padding: auto 0px;
`;

const Views = styled.p`
    font-size: 16px;
    margin-left: 70px;
    margin-right: 30px;
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