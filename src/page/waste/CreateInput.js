import styled from "styled-components";

const DetailDiv = styled.div`
  div {
    flex-direction: row;
    display: flex;
    margin-top: 10px;
    height: 60px;
  }
`;
const CreateInput = (props) => {
  return (
    <div className="CreateInput">
      <DetailDiv>
        {props.countList &&
          props.countList.map((item, i) => (
            <div key={i}>
              <h3>조리 방법{i + 1}</h3>
              <input />
            </div>
          ))}
      </DetailDiv>
    </div>
  );
};
export default CreateInput;
