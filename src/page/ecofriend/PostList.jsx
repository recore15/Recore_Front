import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :Notification(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const ListGuide = styled.div`
    width: 1020px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border: none;
    background: #ADC178;
    align-items: center;
`;

const ListDeadline = styled.p`
    font-size: 16px;
    color: #FFFFFF;
    margin-left: 30px;
`;

const ListTitle = styled.p`
    font-size: 16px;
    color: #FFFFFF;
    margin-left: 315px;
`;

const ListWriter = styled.p`
    font-size: 16px;
    color: #FFFFFF;
    margin-left: 300px;
`;

const ListViews = styled.p`
    font-size: 16px;
    color: #FFFFFF;
    margin-left: 95px;
    margin-right: 30px;
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            <ListGuide>
                <ListDeadline>마감일</ListDeadline>
                <ListTitle>활동명</ListTitle>
                <ListWriter>모집기관</ListWriter>
                <ListViews>온/오프라인</ListViews>
            </ListGuide>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;