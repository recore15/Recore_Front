import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import data from "../../data.json";
import { getSuggestedQuery } from "@testing-library/react";
import Menu_Bar from "../../Menu_Bar";


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
    font-size: 16px;
    line-height: 32px
`;

const DeadlineText = styled.p`
    font-size: 16px;
    line-height: 32px
`;

const WriterText = styled.p`
    font-size: 16px;
    line-height: 32px
`;

const PlaceText = styled.p`
    font-size: 16px;
    line-height: 32px
`;

const ContentText = styled.p`
    font-size: 16px;
    line-height: 32px
`;

const PostInfo_R = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const PostInfo_C = styled.div`

`;

function VolPostView(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    return (
        <div>
        <Menu_Bar />
        <Wrapper>
            <Container>
                <Button
                    title="목록"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <PostInfo_R>
                        <TitleText>활동명 {post.title}</TitleText>
                        <p>분류</p><p>봉사/캠페인</p>
                    </PostInfo_R>
                    <PostInfo_R>
                        <DeadlineText>날짜 {post.deadline}</DeadlineText>
                        <WriterText>작성자 {post.writer}</WriterText>
                    </PostInfo_R>
                    <PostInfo_R>
                        <PlaceText>장소 {post.place}</PlaceText>
                    </PostInfo_R>
                
                    <ContentText>내용 {post.content}</ContentText>
                </PostContainer>
            </Container>
        </Wrapper>
        </div>
    )
}

export default VolPostView;