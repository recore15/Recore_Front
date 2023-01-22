import styled from "styled-components";
import PostList from "./PostList";
import Button from "./Button";
import data from '../../data.json';
import { findByLabelText } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Menu_Bar from "../../Menu_Bar";
import Position from "../../Position";
import VolPopList from "./VolPopList";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    $ > * {
        :Notification(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PageName = styled.h1`
    margin-top: 97px;
`;

const SubName = styled.h3`
    letter-spacing: 4px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 400px;
`;

const Wrapper2 = styled.div`
    margin-left: 400px;
`;

const Wrapper3 = styled.div`
    margin-top: 15px;
    margin-left: 625px;
    margin-bottom: 150px;
`;

function VolMain(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <div>
            <Menu_Bar/>
            <Wrapper2>
                <PageName>봉사/캠페인</PageName>
                <Position title1={"에코프렌드"} title2={"봉사/캠페인"}/>
            </Wrapper2>
            <SubName>인기활동</SubName>
            
            <Wrapper>
                <Container>
                    <PostList
                        posts={data}
                        onClickItem={(item) => {
                            navigate(`/volMain/${item.id}`);
                        }}
                    />
                    <Wrapper3>
                        <Button
                            title="글쓰기"
                            onClick={() => {
                                navigate("/volPostWrite");
                            }}
                        />
                    </Wrapper3>
                </Container>
            </Wrapper>
        </div>
    )
}

export default VolMain;