import React from "react";
import { useHistory, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import data from "../../data.json"
import Menu_Bar from "../../Menu_Bar";

const Wrapper = styled.div`

`;

const Container = styled.div`

`;

const PostContainer = styled.div`

`;

const TitleText = styled.p`

`;

const DeadlineText = styled.p`

`;

function VolPostView(props) {
    const navigate = useNavigate();

    const { postId } = useParams();
    const post = data.find((item) => {
        return item.id === postId;
      });

    return (
        <Wrapper>
            <Menu_Bar />
            <Container>
                <PostContainer>
                    <TitleText>활동명{post.title}</TitleText>
                    <DeadlineText>날짜{post.deadline}</DeadlineText>
                </PostContainer>
                <Button
                    title="목록"
                    onClick={() => {
                        navigate("/volMain")
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default VolPostView;