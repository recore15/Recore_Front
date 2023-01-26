import React from "react";
import styled from "styled-components";
import VolPoplistItem from "./VolPopListItem";
import pop1 from "../../Img/봉사캠페인/1.jpg";
import pop2 from "../../Img/봉사캠페인/2-1.png";
import pop3 from "../../Img/봉사캠페인/6.png";

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

const Pop = styled.div`

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

function VolPopList(props) {

    const navigate = navigator();

    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default VolPopList;