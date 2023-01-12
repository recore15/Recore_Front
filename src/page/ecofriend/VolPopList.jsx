import React from "react";
import styled from "styled-components";
import VolPoplistItem from "./VolPopListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & > * {
        :Notification(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function VolPopList(props) {
    const { popPosts, onClickItem } = props;

    return (
        <Wrapper>
            { popPosts.map((popPost, index) => {
                return (
                    <VolPoplistItem
                        key={popPost.id}
                        popPost={popPost}
                        onClick={() => {
                            onClickItem(props)
                        }}
                    />
                )
            })}
        </Wrapper>
    )
}

export default VolPopList;