import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../../Menu_Bar";
import Button from "../Button";

const NWrapper = styled.div`
    margin-top: 72px;
    margin-left: 340px;
    margin-bottom: 80px;
`;

const NInfo = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const NRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 760px;
    justify-content: space-between;
    margin-left: 30px;
`;

const NContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NInfoGuide = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const NReal = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`;

const NDetail = styled.div`
    margin-top: 19px;
`;

const NText = styled.p`
    white-space: pre-wrap;
    word-break: keep-all;
    width: 820px;
    margin-left: 10px;
`;

const NText_R = styled.p`
    white-space: pre-wrap;
    word-break: keep-all;
    width: 820px;
    margin-left: 10px;
    color: #FF0000;
`;

const NOther = styled.div`

`;

const NLine = styled.hr`
    background-color: #ADC178;
    border: 0;
    height: 3px;
    width: 825px;
    margin-left: 0px;
`;

const NLine2 = styled.hr`
    background-color: #C6C6C6;
    border: 0;
    height: 3px;
    width: 825px;
    margin-left: 0px;
`;

const NBtnWrapper = styled.div`
    margin-top: 100px;
    margin-left: 800px;
    margin-bottom: 50px;
`;

function VolPost2() {
    const navigate = useNavigate();

    return (
        <div>
            <Menu_Bar />
            <NWrapper>
                <NInfo>
                    <NLine />
                    <NRow>
                        <NContent> 
                            <NInfoGuide>활동명</NInfoGuide>
                            <NReal>환경팝업북 만들기 비대면 봉사활동</NReal>
                        </NContent>
                        <NContent>
                            <NInfoGuide>분류</NInfoGuide>
                            <NReal>봉사/캠페인</NReal>
                        </NContent>
                    </NRow>
                    <NLine />
                    <NRow>
                        <NContent>
                            <NInfoGuide>마감일</NInfoGuide>
                            <NReal>2023.12.31</NReal>
                        </NContent>
                        <NContent>
                            <NInfoGuide>모집기관</NInfoGuide>
                            <NReal>사단법인 글로벌비전</NReal>
                        </NContent>
                    </NRow>
                    <NLine />
                    <NRow>
                        <NContent>
                            <NInfoGuide>장소</NInfoGuide>
                            <NReal>제한없음</NReal>
                        </NContent>
                        <NContent>
                            <NInfoGuide>온/오프라인</NInfoGuide>
                            <NReal>온라인</NReal>
                        </NContent>
                    </NRow>
                    <NLine />
                </NInfo>
                <NDetail>
                    <NText>올여름 폭염과 태풍, 폭우 등 이상기후를 경험하면서 사람들이 기후위기의 심각성을 깨닫고 지구 온난화에 관심을 갖고 있습니다. 이에 입체적으로 펼쳐지는 팝업북을 통해 아이들에게 지구 온난화의 원인과 심각성을 가르치고 지구를 구할 수 있는 현실적인 방법을 통해 아이들이 친환경 생활을 실천할 수 있도록 환경 팝업북을 출시했습니다. 입체적으로 펼쳐지는 팝업북은 아이들에게 호기심과 상상력을 자극하며 인기만점, 어른들에게도 만드는 재미가득한 교육용 팝업북으로 온 가족이 함께 하실 수 있습니다. 아동생활시설 및 지역아동센터에 전달될 환경 팝업북을 여러분이 직접 만들어 주세요.</NText>
                    <NText> </NText>
                    <NText>▶ 자격요건</NText>
                    <NText>     - 본 기관을 통해 환경 팝업북 봉사를 신청하신 신청자에 한해 참여 가능합니다.</NText> 
                    <NText>     - 기업 임직원 봉사자님들은 담당자의 안내를 받으신 뒤, 이 페이지에서 봉사를 신청해주시기 바랍니다.</NText>
                    <NText>※ 개인 봉사 신청도 가능하나, VMS 자원봉사 인증이 아닌 글로벌비전 자체확인서를 발급해드립니다. </NText>
                    <NText> </NText>
                    <NText>▶ 참여방법</NText>
                    <NText>     - 활동 전(봉사자님과 봉사 물품을 함께), 활동 중(활동 중인 봉사자님의 모습), 활동 후(완성된 물품과 봉사자님의 모습) 사진을 찍어줍니다.</NText>
                    <NText>     - 봉사가 끝난 뒤 활동 시 찍은 사진을 첨부한 결과보고서와 초상권 사용 동의서를 작성하여 제출합니다.(서명 필수)</NText>
                    <NText>     - 결과보고서와 초상권 사용 동의서는 아래 링크에서 다운 받으실 수 있습니다.</NText>
                    <NText>     - 제출하신 결과보고서를 확인하여 VMS 봉사시간 실적을 등록해드립니다.</NText>
                    <NText> </NText>
                    <NText_R>※ 본 페이지를 통한 봉사 신청 및 결과보고서와 초상권 사용 동의서를 모두 제출하신 분에 한해 봉사시간 입력 가능※ 봉사활동에 필요한 활동 재료를 봉사활동에 참여하는 당사자가 직접 구매하고 봉사활동에 참여하는 경우 봉사실적으로 인정 불가</NText_R>
                </NDetail>
                <NBtnWrapper>
                    <Button
                        title="목록"
                        onClick={() => {
                            navigate("/volMain")
                        }}
                    />
                </NBtnWrapper>
                <NOther>
                    <NLine2 />
                    <NRow
                        onClick={() => {
                            navigate("/volMain/volPost1")
                        }}>
                        <NInfoGuide>다음글</NInfoGuide>
                        <NReal>[제로웨이스트 강북]2023년 1차 자원봉사자 모집(월1회 참여가능)</NReal>
                    </NRow>
                    <NLine2 />
                    <NRow>
                        <NInfoGuide>이전글</NInfoGuide>
                        <NReal>플라제로 '자원순환을 위한 작은 플라스틱 분류'</NReal>
                    </NRow>
                    <NLine2 />
                </NOther>
            </NWrapper>
        </div>
    )
}

export default VolPost2;