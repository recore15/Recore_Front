import Menu_Bar from "../../../Menu_Bar";

function VolPost1() {
    return (
        <div>
            <Menu_Bar />
            <Wrapper>
                <Info>

                </Info>
                <Content>

                </Content>
                <Button
                    title="목록"
                    onClick={() => {
                        navigate("/volMain")
                    }}
                />
                <Other>
                    
                </Other>
            </Wrapper>
        </div>
    )
}