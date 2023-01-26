import styled from "styled-components";

const Shops = [
    {
        shopImg: "",
        intro: "함께 시작하는 제로웨이스트 라이프\n하나뿐인 지구를 위한 가치소비 실천하기",
        product: [
            {
                pImg: "",
                pName: "실리콘 비누받침",
                pPrice: "4,500원"
            },
            {
                pImg: "",
                pName: "유기농 그물주머니",
                pPrice: "3,000원"
            },
            {
                pImg: "",
                pName: "오리진밤(멀티밤)",
                pPrice: "9,900원"
            }
        ]
    },
    {
        shopImg: "",
        intro: "친환경 유기농 신선식품으로 건강하게\n오늘밤 주문하면 내일 새벽 도착!",
        product: [
            {
                pImg: "",
                pName: "무농약 대추방울토마토",
                pPrice: "6,800원"
            },
            {
                pImg: "",
                pName: "친환경 미니밤호박",
                pPrice: "4,280원"
            },
            {
                pImg: "",
                pName: "유기농 시금치",
                pPrice: "3,200원"
            }
        ]
    },
    {
        shopImg: "",
        intro: "생명과 환경을 회복시키는 제로웨이스트 플랫폼",
        product: [
            {
                pImg: "",
                pName: "스테인리스 트리오 밀폐용기",
                pPrice: "50,000원"
            },
            {
                pImg: "",
                pName: "실리콘 빨대",
                pPrice: "4,400원"
            },
            {
                pImg: "",
                pName: "천연 대나무밴드",
                pPrice: "9,000원"
            }
        ]
    }
];

function FuncShopList(props) {
    return (
        <div>
            {Shops.map((shop) => {
                return (
                    <FuncShop shopImg={shop.shopImg} intro={shop.intro} />
                )
            })}
        </div>
    )
}

export default FuncShopList;