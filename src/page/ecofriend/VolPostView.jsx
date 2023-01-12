import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import data from "../../data.json";
import { getSuggestedQuery } from "@testing-library/react";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    $ > * {
        :Notification(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid getSuggestedQuery;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 20px;
    line-height: 32px
    white-space: pre-wrap;
`;

const ContentText = styled.p`
    font-size: 16px;
    font-weight: 500;
`;


function VolPostView(props) {
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            <PostContainer>
                <TitleText>{post.title}</TitleText>
                <ContentText>{post.content}</ContentText>
            </PostContainer>
            </Container>
        </Wrapper>
    )
}

export default VolPostView;