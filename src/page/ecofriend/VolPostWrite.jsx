import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import Menu_Bar from "../../Menu_Bar";

const Wrapper = styled.div`
    padding: 16px;
    margin-bottom: 150px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    margin-left: 400px;
    margin-bottom: 32px;
`;

const Line = styled.hr`
    background-color: #ADC178;
    border: 0;
    height: 1px;
    width: 720px;
`;

const Wrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 610px;
    height: 40px;
    border: 1px solid #EBEBEB;
    border-radius: 1px;
`;

function VolPostWrite(props) {
    const navigate = useNavigate();

    const [content, setContent] = useState("");

    return (
        <div>
            <Menu_Bar />
            <PageName>봉사/캠페인 등록</PageName>
            <Wrapper>
                <Line />
                <Container>
                    <Wrapper2>
                        <p>제목</p>
                        <Input placeholder="제목을 입력 해주세요" />
                    </Wrapper2>
                    <Wrapper2>
                        <p>첨부파일</p>
                        <Input placeholder="파일을 업로드 해주세요" />
                    </Wrapper2>
                    <Wrapper2>
                        <p>진행 날짜</p>
                        <Input placeholder="ex) 2023-01-30" />
                    </Wrapper2>
                    <Line />
                    <TextInput
                        height={480}
                        value={content}
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                    />

                    <Button
                        title="등록하기"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </Container>
            </Wrapper>
        </div>
    )
}

export default VolPostWrite;