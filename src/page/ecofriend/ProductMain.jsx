import styled from "styled-components";
import Menu_Bar from "../../Menu_Bar";
import rec from "../../Img/Rectangle 64.png";

const Wrapper = styled.div`
    margin-bottom: 150px;
`;

const Container = styled.div`
    margin-left: 240px;
    margin-top: 113px;
`;

const Shop = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 75px;
`;

const ShopImg = styled.img`
    margin-left: 7px;
    margin-right: 10px;
`;

const ShopText_1 = styled.p`
    font-size: 16px;
    white-space: pre-wrap
    margin: 0px 0px;
    width: 270px;
`;

const ShopText_2 = styled.p`
    font-size: 16px;
    white-space: pre-wrap
    margin: 0px 0px;
    width: 270px;
`;

const ShopText_3 = styled.p`
    font-size: 16px;
    white-space: pre-wrap
    margin: 0px 0px;
`;

const Product = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 272px;
`;

const Product_D = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 240px;
`;

const PImg = styled.img`

`;

const PName = styled.p`
    font-size: 16px;
    font-weight: 550;
`;

const PPrice = styled.p`
    font-size: 16px;
    color: #ADC178;
    font-weight: 550;
`;

function ProductMain(props) {
    return (
        <div>
            <Menu_Bar />

            <Wrapper>
                <Container>
                    <Shop>
                        <img src={rec} />
                        <ShopImg src=""/>
                        <ShopText_1>함께 시작하는 제로웨이스트 라이프 하나뿐인 지구를 위한 소비 실천하기</ShopText_1>
                    </Shop>

                    <Product>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>실리콘 비누받침</PName>
                            <PPrice>4,500원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>유기농 그물주머니</PName>
                            <PPrice>3,000원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>오리진밤(멀티밤)</PName>
                            <PPrice>9,900원</PPrice>
                        </Product_D>
                    </Product>
                </Container>

                <Container>
                    <Shop>
                        <img src={rec} />
                        <ShopImg src=""/>
                        <ShopText_2>친환경 유기농 신선식품으로 건강하게 오늘밤 주문하면 내일 새벽 도착!</ShopText_2>
                    </Shop>

                    <Product>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>무농약 대추방울토마토</PName>
                            <PPrice>6,800원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>친환경 미니밤호박</PName>
                            <PPrice>4,280원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>유기농 시금치</PName>
                            <PPrice>3,200원</PPrice>
                        </Product_D>
                    </Product>
                </Container>

                <Container>
                    <Shop>
                        <img src={rec} />
                        <ShopImg src=""/>
                        <ShopText_3>생명과 환경을 회복시키는 제로웨이스트 플랫폼</ShopText_3>
                    </Shop>

                    <Product>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>스테인리스 트리오 밀폐용기</PName>
                            <PPrice>50,000원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>실리콘 빨대</PName>
                            <PPrice>4,400원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src="" 
                                onClick={() => {
                                    window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                                }}
                            />
                            <PName>천연 대나무밴드</PName>
                            <PPrice>9,000원</PPrice>
                        </Product_D>
                    </Product>
                </Container>
            </Wrapper>
        </div>
    )
}

export default ProductMain;
