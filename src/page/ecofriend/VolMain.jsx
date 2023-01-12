import styled from "styled-components";
import PostList from "./PostList";
import Button from "./Button";
import data from '../../data.json';
import { findByLabelText } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
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

const PageName = styled.h1`
    margin-top: 97px;
`;

const SubName = styled.h3`
    letter-spacing: 4px;
    font-weight: bold;
`;


function VolMain(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Menu_Bar/>
            <PageName>봉사/캠페인</PageName>
            <Position title1={"에코프렌드"} title2={"봉사/캠페인"}/>
            <SubName>인기활동</SubName>
            <Container>
                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate('/volMain/${item.id}');
                    }}
                />

                <Button
                    title="글쓰기"
                    onClick={() => {
                        navigate("/volPostWrite");
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