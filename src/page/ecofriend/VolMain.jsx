import styled from "styled-components";
import PostList from "./PostList";
import Button from "./Button";
import data from '../../data.json';
import { findByLabelText } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

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

function VolMain(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button
                    title="글쓰기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate('/post/${item.id}');
                    }}
                />
            </Container>
        </Wrapper>
    )
}

/*
const VolunteerMain = () => {
    return (
        <div className="VolunteerMain">
            <Menu_Bar />

            <PopHeader />
            <div className="VolunteerPoplist">
                <Image_VolPop name={"활동명"} props={"../Img/temporary.png"} />
                <Image_VolPop name={"활동명"} props={"../Img/temporary.png"} />
                <Image_VolPop name={"활동명"} props={"../Img/temporary.png"} />
            </div>
            
            <div className="VolunteerList">
                <Detail_Vol deadline={"마감일"} name={"활동명"} uploader={"작성자"} views={"조회수"} />
                <Detail_Vol deadline={"마감일"} name={"활동명"} uploader={"작성자"} views={"조회수"} />
                <Detail_Vol deadline={"마감일"} name={"활동명"} uploader={"작성자"} views={"조회수"} />
                <Detail_Vol deadline={"마감일"} name={"활동명"} uploader={"작성자"} views={"조회수"} />
                <Detail_Vol deadline={"마감일"} name={"활동명"} uploader={"작성자"} views={"조회수"} />
                <Detail_Vol deadline={"마감일"} name={"활동명"} uploader={"작성자"} views={"조회수"} />
            </div>
            <button>
                onClick={() => {
                    navigate("/VolunteerUp");
                }}
                <p>글쓰기</p>
            </button>
        </div>
    )
};

const PopHeader = () => {
    return <StyledPopHeader>인기활동</StyledPopHeader>
};

const StyledPopHeader = styled.PopHeader
    font-size: 24px;

const VolunteerPopItem = () => {
    return (
        <div className="VolunteerPop">
            <Image_VolPop name={"활동명"} props={"../Img/temporary.png"} />
        </div>
    )
}


const VolunteerListItem = () => {
    return (
        <div className="VolunteerListItem">
            <
        </div>
    )
}
*/

export default VolMain;