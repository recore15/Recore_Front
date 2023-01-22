import styled from "styled-components";
import Menu_Bar from "../../Menu_Bar";

const PageName = styled.h1`
    margin-top: 97px;
    margin-left: 400px;
`;

function NewsMain(props) {
    return (
        <div>
            <Menu_Bar />
            <PageName>뉴스기사</PageName>
            
        </div>
    )
}

export default NewsMain;