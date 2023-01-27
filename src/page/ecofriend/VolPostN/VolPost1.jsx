import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../../Menu_Bar";
import Button from "../Button";
import Img1 from "../../../Img/봉사캠페인/1.jpg";

const Wrapper = styled.div`
    margin-top: 72px;
    margin-left: 340px;
    margin-bottom: 80px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 760px;
    justify-content: space-between;
    margin-left: 30px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const InfoGuide = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const Real = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`;

const Detail = styled.div`
    margin-top: 19px;
`;

const Text = styled.p`
    white-space: pre-wrap;
    word-break: keep-all;
    width: 820px;
    margin-left: 10px;
`;

const Other = styled.div`

`;

const Line = styled.hr`
    background-color: #ADC178;
    border: 0;
    height: 3px;
    width: 825px;
    margin-left: 0px;
`;

const Line2 = styled.hr`
    background-color: #C6C6C6;
    border: 0;
    height: 3px;
    width: 825px;
    margin-left: 0px;
`;

const Img = styled.img`
    width: 780px;
    margin: 20px;
`;

const BtnWrapper = styled.div`
    margin-top: 100px;
    margin-left: 800px;
    margin-bottom: 50px;
`;

function VolPost1() {
    const navigate = useNavigate();

    return (
        <div>
            <Menu_Bar />
            <Wrapper>
                <Info>
                    <Line />
                    <Row>
                        <Content> 
                            <InfoGuide>활동명</InfoGuide>
                            <Real>[제로웨이스트 강북]2023년 1차 자원봉사자 모집(월1회 참여가능)</Real>
                        </Content>
                        <Content>
                            <InfoGuide>분류</InfoGuide>
                            <Real>봉사/캠페인</Real>
                        </Content>
                    </Row>
                    <Line />
                    <Row>
                        <Content>
                            <InfoGuide>마감일</InfoGuide>
                            <Real>2023.03.31</Real>
                        </Content>
                        <Content>
                            <InfoGuide>모집기관</InfoGuide>
                            <Real>서울특별시 강북구</Real>
                        </Content>
                    </Row>
                    <Line />
                    <Row>
                        <Content>
                            <InfoGuide>장소</InfoGuide>
                            <Real>제한없음</Real>
                        </Content>
                        <Content>
                            <InfoGuide>온/오프라인</InfoGuide>
                            <Real>오프라인</Real>
                        </Content>
                    </Row>
                    <Line />
                </Info>
                <Detail>
                    <Img src={Img1} />
                    <Text>안녕하세요 행복누리 사회적협동조합입니다.</Text>
                    <Text>환경과 마을을 사랑하는 누구나 참여 가능하며, 지정된 우리동네 자원순환 실천가게에서 1차 세척 후 수거된 우유팩과 멸균팩을 펴고 씻어서 말리는 일에 참여하게 됩니다. 시간은 월,화,목,금 10:00~12:00까지이며, 개인사정에 따라 시간 협의는 가능합니다. 많은 관심과 참여 부탁드립니다.</Text>
                    <Text>참고: https://www.1365.go.kr/vols/1572247904127/partcptn/timeCptn.do?type=show&progrmRegistNo=2928804</Text>
                </Detail>
                <BtnWrapper>
                    <Button
                        title="목록"
                        onClick={() => {
                            navigate("/volMain")
                        }}
                    />
                </BtnWrapper>
                <Other>
                    <Line2 />
                    <Row
                        onClick={() => {
                            navigate("/volMain/volPost2")
                        }}>
                        <InfoGuide>이전글</InfoGuide>
                        <Real>환경팝업북 만들기 비대면 봉사활동</Real>
                    </Row>
                    <Line2 />
                </Other>
            </Wrapper>
        </div>
    )
}

export default VolPost1;