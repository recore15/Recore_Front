import styled from "styled-components";
import PostList from "./PostList";
import Button from "./Button";
import data from '../../data.json';
import { findByLabelText } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";
import VolPopList from "./VolPopList";
import pop1 from "../../Img/봉사캠페인/1.jpg";
import pop2 from "../../Img/봉사캠페인/2-1.png";
import pop3 from "../../Img/봉사캠페인/6.png";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 240px;
`;

const Container = styled.div`
    width: 100%;   

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
    margin-top: 40px;
    margin-left: 240px;
`;

const Pop = styled.div`
    margin-right: 120px;
`;

const PopImg = styled.img`
    width: 240px;
    height: 180px;
`;

const PopTitle = styled.p`
    display: block;
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;


const Wrapper2 = styled.div`
    margin-left: 240px;
`;

const Wrapper3 = styled.div`
    margin-top: 15px;
    margin-left: 950px;
    margin-bottom: 150px;
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    jusfity-content: space-between;
    margin-left: 260px;
    margin-bottom: 80px;
`;

function VolMain(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <div>
            <Menu_Bar/>
            <Wrapper2>
                <PageName>봉사/캠페인</PageName>
                <Position title1={"에코프렌드"} title2={"봉사/캠페인"}/>
            </Wrapper2>

            <SubName>인기활동</SubName>
            <Container2>
                <Pop>
                    <PopImg
                        src={pop1}
                        onClick={() => {
                            navigate("")
                        }}
                    />
                    <PopTitle>[제로웨이스트 강북]2023년 1차 자원봉사자 모집(월1회 참여가능)</PopTitle>
                </Pop>
                <Pop>
                    <PopImg
                        src={pop2}
                        onClick={() => {
                            navigate("")
                        }}
                    />
                    <PopTitle>환경팝업북 만들기 비대면 봉사활동</PopTitle>
                </Pop>
                <Pop>
                    <PopImg
                        src={pop3}
                        onClick={() => {
                            navigate("")
                        }}
                    />
                    <PopTitle>설치미술- 'Save Us'! 생물다양성 [곤충편]</PopTitle>
                </Pop>
            </Container2>

            <Wrapper>
                <Container>
                    <PostList
                        posts={data}
                        onClickItem={(item) => {
                            navigate("/volMain/volPost1");
                        }}
                    />
                    <Wrapper3>
                        <Button
                            title="글쓰기"
                            onClick={() => {
                                navigate("/volPostWrite");
                            }}
                        />
                    </Wrapper3>
                </Container>
            </Wrapper>
        </div>
    )
}

export default VolMain;