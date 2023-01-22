import styled from "styled-components";

const Wrapper = styled.div`

`;

const ShopContainer = styled.div`

`;

const ShopImg = styled.img`

`;

const ShopText = styled.p`

`;

const ProductContainer = styled.div`

`;

function FuncShop(props) {
    return (
        <Wrapper>
            <ShopContainer>
                <ShopImg src={""}> {props.shopImg} </ShopImg>
                <ShopText> {props.intro} </ShopText>
            </ShopContainer>
            <ProductContainer>
                
            </ProductContainer>
        </Wrapper>
    )
}

export default FuncShop;