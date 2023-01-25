import styled from "styled-components";
import Menu_Bar from "../../Menu_Bar";
import petImg from "../../Img/ecoplace/pet.png"
import iceImg from "../../Img/ecoplace/icepack.png"
import GoogleApiWrapper from "./MapAPI";
import MapAPI from "./MapAPI";

const PageName = styled.h1`
    margin-top: 97px;
    margin-left: 240px;
`;

const Sub = styled.p`
    margin-left: 240px;
    font-size: 16px;
`;

const Icon = styled.img`
    width: 35px;
    height: 35px;
`;

const Text = styled.p`
    font-size: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 240px;
    margin-top: 44px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    align-items: center;
`;

const MapWrapper = styled.div`
    margin-top: 50px;
    margin-left: 240px;
    margin-bottom: 150px;
`;

function PlaceMain(props) {
    return (
        <div>
            <Menu_Bar />
            <PageName>에코플레이스</PageName>
            <Sub>아이콘을 클릭하여 수거함의 위치를 확인해보세요! 작은 분리수거 지구 살리기에 큰 효과를 불러옵니다!</Sub>
            <Wrapper>
                <Container>
                    <Icon src={petImg} />
                    <Text>투명페트병 수거함</Text>
                </Container>
                <Container>
                    <Icon src={iceImg} />
                    <Text>아이스팩 수거함</Text>
                </Container>
            </Wrapper>
            <MapWrapper>
                <MapAPI />
            </MapWrapper>
        </div>
    )
}

export default PlaceMain;