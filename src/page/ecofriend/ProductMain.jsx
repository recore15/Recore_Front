import styled from "styled-components";
import Menu_Bar from "../../Menu_Bar";
import rec from "../../Img/Rectangle 64.png";
import s1 from "../../Img/친환경샵/지구샵로고.png"
import s1p1 from "../../Img/친환경샵/지구샵_실리콘 비누받침.png"
import s1p2 from "../../Img/친환경샵/지구샵_유기농그물주머니.png"
import s1p3 from "../../Img/친환경샵/지구샵_오리진밤(멀티밤).png"
import s2 from "../../Img/친환경샵/오아시스로고.png"
import s2p1 from "../../Img/친환경샵/오아시스_방울토마토.png"
import s2p2 from "../../Img/친환경샵/오아시스_단호박.png"
import s2p3 from "../../Img/친환경샵/오아시스_시금치.png"
import s3 from "../../Img/친환경샵/덕분애로고.png"
import s3p1 from "../../Img/친환경샵/덕분애_스테인리스.png"
import s3p2 from "../../Img/친환경샵/덕분애_실리콘빨대.png"
import s3p3 from "../../Img/친환경샵/덕분애_천연대나무밴드.png"

const Wrapper = styled.div`
    margin-bottom: 150px;
`;

const Container = styled.div`
    margin-left: 350px;
    margin-top: 89px;
`;

const Shop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 44px;
`;

const ShopImg = styled.img`
    margin-left: 7px;
    margin-right: 10px;
    height: 52px;
`;

const ShopText_1 = styled.p`
    font-size: 14px;
    white-space: pre-wrap
    margin: 0px 0px;
    width: 238px;
`;

const ShopText_2 = styled.p`
    font-size: 14px;
    white-space: pre-wrap
    margin: 0px 0px;
    width: 245px;
`;

const ShopText_3 = styled.p`
    font-size: 14px;
    white-space: pre-wrap
    margin: 0px 0px;
`;

const Product = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 40px;
`;

const Product_D = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
`;

const PImg = styled.img`
    width: 220px;
    height: 220px;
`;

const PName = styled.p`
    font-size: 16px;
    font-weight: 550;
    margin-top: 6px;
    margin-bottom: 8px;
`;

const PPrice = styled.p`
    font-size: 16px;
    color: #ADC178;
    font-weight: 550;
    margin: 0px 0px; 
`;

function ProductMain(props) {
    return (
        <div>
            <Menu_Bar />

            <Wrapper>
                <Container>
                    <Shop>
                        <img 
                            src={rec} 
                            onClick={() => {
                            window.open("https://www.jigushop.co.kr/", "_blank");
                            }}
                        />
                        <ShopImg src={s1}/>
                        <ShopText_1>함께 시작하는 제로웨이스트 라이프 하나뿐인 지구를 위한 소비 실천하기</ShopText_1>
                    </Shop>

                    <Product>
                        <Product_D>
                            <PImg 
                                src={s1p1}
                                onClick={() => {
                                    window.open("https://www.jigushop.co.kr/kitchen/?idx=436", "_blank");
                                }}
                            />
                            <PName>실리콘 비누받침</PName>
                            <PPrice>4,500원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src={s1p2}
                                onClick={() => {
                                    window.open("https://www.jigushop.co.kr/living/?idx=88", "_blank");
                                }}
                            />
                            <PName>유기농 그물주머니</PName>
                            <PPrice>3,000원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src={s1p3}
                                onClick={() => {
                                    window.open("https://www.jigushop.co.kr/cosmetic/?idx=176", "_blank");
                                }}
                            />
                            <PName>오리진밤(멀티밤)</PName>
                            <PPrice>9,900원</PPrice>
                        </Product_D>
                    </Product>
                </Container>

                <Container>
                    <Shop>
                        <img 
                            src={rec} 
                            onClick={() => {
                            window.open("https://www.oasis.co.kr/main", "_blank");
                            }}
                        />
                        <ShopImg src={s2}/>
                        <ShopText_2>친환경 유기농 신선식품으로 건강하게 오늘밤 주문하면 내일 새벽 도착!</ShopText_2>
                    </Shop>

                    <Product>
                        <Product_D>
                            <PImg 
                                src={s2p1}
                                onClick={() => {
                                    window.open("https://www.oasis.co.kr/product/detail/9264-1006694?categoryId=11", "_blank");
                                }}
                            />
                            <PName>무농약 대추방울토마토</PName>
                            <PPrice>6,800원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src={s2p2}
                                onClick={() => {
                                    window.open("https://www.oasis.co.kr/product/detail/64012-1071333?categoryId=11", "_blank");
                                }}
                            />
                            <PName>친환경 미니밤호박</PName>
                            <PPrice>4,280원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src={s2p3}
                                onClick={() => {
                                    window.open("https://www.oasis.co.kr/product/detail/64185-1071559?categoryId=11", "_blank");
                                }}
                            />
                            <PName>유기농 시금치</PName>
                            <PPrice>3,200원</PPrice>
                        </Product_D>
                    </Product>
                </Container>

                <Container>
                    <Shop>
                        <img 
                            src={rec} 
                            onClick={() => {
                            window.open("https://www.thanksto.co.kr/main/index.php", "_blank");
                            }}
                        />
                        <ShopImg src={s3}/>
                        <ShopText_3>생명과 환경을 회복시키는 제로웨이스트 플랫폼</ShopText_3>
                    </Shop>

                    <Product>
                        <Product_D>
                            <PImg 
                                src={s3p1}
                                onClick={() => {
                                    window.open("https://www.thanksto.co.kr/goods/goods_view.php?goodsNo=1000000039", "_blank");
                                }}
                            />
                            <PName>스테인리스 트리오 밀폐용기</PName>
                            <PPrice>50,000원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src={s3p2}
                                onClick={() => {
                                    window.open("https://www.thanksto.co.kr/goods/goods_view.php?goodsNo=1000000022", "_blank");
                                }}
                            />
                            <PName>실리콘 빨대</PName>
                            <PPrice>4,400원</PPrice>
                        </Product_D>
                        <Product_D>
                            <PImg 
                                src={s3p3} 
                                onClick={() => {
                                    window.open("https://www.thanksto.co.kr/goods/goods_view.php?goodsNo=1000000015", "_blank");
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
