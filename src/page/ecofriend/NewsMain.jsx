import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";
import news1 from "../../Img/뉴스/뉴스_1.jpg"
import news2 from "../../Img/뉴스/뉴스_2.jpg"
import news3 from "../../Img/뉴스/뉴스_3.jpg"
import news4 from "../../Img/뉴스/뉴스_4.jpg"
import news5 from "../../Img/뉴스/뉴스_5.jpeg"
import news6 from "../../Img/뉴스/뉴스_6.jpg"
import news7 from "../../Img/뉴스/뉴스_7.jpeg"
import news8 from "../../Img/뉴스/뉴스_8.jpg"

const PageName = styled.h1`
    margin-top: 97px;
    margin-left: 280px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 120px;
    margin-top: 36px;
`;

const News = styled.div`
    margin-right: 120px;
`;

const NewsImg = styled.img`
    width: 240px;
    height: 240px;
`;

const NewsTitle = styled.p`
    width: 240px;
    font-weight: 540;

    &:hover{  
        font-weight: 550;
        text-decoration: underline;
    }
`;

const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 100px;
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 280px;
    margin-bottom: 150px;
`;

function NewsMain(props) {
    return (
        <div>
            <Menu_Bar />
            <PageName>뉴스기사</PageName>
            
            <Wrapper>
                <Container1>
                <News>
                    <NewsImg
                        src={news1}
                        onClick={() => {
                            window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                        }}
                    />
                    <NewsTitle
                        onClick={() => {
                            window.open("https://www.yna.co.kr/view/AKR20230112027900003?input=1195m", "_blank");
                        }}>LG화학, '바다 골칫거리' 해양폐기물로 재활용 플라스틱 만든다</NewsTitle>
                </News>
                <News>
                    <NewsImg
                        src={news2}
                        onClick={() => {
                            window.open("https://biz.chosun.com/policy/policy_sub/2023/01/12/OTV4ES2XBVHTDB2MAU5KRIU24M/?utm_source=naver&utm_medium=original&utm_campaign=biz", "_blank");
                        }}
                    />
                    <NewsTitle
                        onClick={() => {
                            window.open("https://biz.chosun.com/policy/policy_sub/2023/01/12/OTV4ES2XBVHTDB2MAU5KRIU24M/?utm_source=naver&utm_medium=original&utm_campaign=biz", "_blank");
                        }}>‘버려지는 생선 뼈로 화장품 만든다’…정부 “수산부산물 재활용률 30%까지 높이겠다”</NewsTitle>
                </News>
                <News>
                    <NewsImg
                        src={news3}
                        onClick={() => {
                            window.open("https://www.ajunews.com/view/20230113124652296", "_blank");
                        }}
                    />
                    <NewsTitle
                        onClick={() => {
                            window.open("https://www.ajunews.com/view/20230113124652296", "_blank");
                        }}>태백시, 2023년 1월부터 재활용 무인수거기 설치·운영</NewsTitle>
                </News>
                </Container1>
                <Container1>
                <News>
                    <NewsImg
                        src={news4}
                        onClick={() => {
                            window.open("https://newsis.com/view/?id=NISX20230111_0002155308&cID=13001&pID=13000", "_blank");
                        }}
                    />
                    <NewsTitle
                        onClick={() => {
                            window.open("https://newsis.com/view/?id=NISX20230111_0002155308&cID=13001&pID=13000", "_blank");
                        }}>현대L&C, '재활용 PET 포장용 시트' GR인증…국내 최초</NewsTitle>
                </News>
                <News>
                    <NewsImg
                        src={news5}
                        onClick={() => {
                            window.open("https://www.news1.kr/articles/4924093", "_blank");
                        }}
                    />
                    <NewsTitle
                        onClick={() => {
                            window.open("https://www.news1.kr/articles/4924093", "_blank");
                        }}>"친환경 종이완충재 써요"…우아한청년들 친환경 포장재 확대</NewsTitle>
                </News>
                <News>
                    <NewsImg
                        src={news6}
                        onClick={() => {
                            window.open("https://view.asiae.co.kr/article/2023011309030949759", "_blank");
                        }}
                    />
                    <NewsTitle
                        onClick={() => {
                            window.open("https://view.asiae.co.kr/article/2023011309030949759", "_blank");
                        }}>배민, 친환경 포장재로 지난해 하반기 탄소 240t ↓</NewsTitle>
                </News>
                </Container1>
            </Wrapper>
                <Container2>
                <News>
                    <NewsImg
                        src={news7}
                        onClick={() => {
                            window.open("https://www.news1.kr/articles/4923863", "_blank");
                        }}
                    />
                    <NewsTitle
                        onClick={() => {
                            window.open("https://www.news1.kr/articles/4923863", "_blank");
                        }}>[동정] 한화진 환경부 장관, EU 탄소국경제도 대응 간담회 개최</NewsTitle>
                </News>
                <News>
                    <NewsImg
                        src={news8}
                        onClick={() => {
                            window.open("https://www.seoul.co.kr/news/newsView.php?id=20230113500091&wlog_tag3=naver", "_blank");
                        }}
                    />
                    <NewsTitle
                        onClick={() => {
                            window.open("https://www.seoul.co.kr/news/newsView.php?id=20230113500091&wlog_tag3=naver", "_blank");
                        }}>유럽 CBAM 시행, 환경부 전환 지원</NewsTitle>
                </News>
                </Container2>
        </div>
    )
}

export default NewsMain;