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
    width: calc(100% - 32px);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    border: none;
    background: #ADC178;
`;

const ListDeadline = styled.p`
    font-size: 16px;
    color: #FFFFFF;
`;

const ListTitle = styled.p`
    font-size: 16px;
    color: #FFFFFF;
`;

const ListWriter = styled.p`
    font-size: 16px;
    color: #FFFFFF;
`;

const ListViews = styled.p`
    font-size: 16px;
    color: #FFFFFF;
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            <ListGuide>
                <ListDeadline>마감일</ListDeadline>
                <ListTitle>활동명</ListTitle>
                <ListWriter>작성자</ListWriter>
                <ListViews>조회수</ListViews>
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