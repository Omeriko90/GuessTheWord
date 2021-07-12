import styled from "styled-components";

export const ScoreBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
`;

export const ScoreBoardHeaderContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  width: 100%;

  & > :first-child {
    margin-inline-end: 20px;
  }
`;

export const ScoreBoardHeaderColumnContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
`;

export const ScoreBoardColumnWrapper = styled.div`
  display: flex;
`;

export const ScoreBoardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ScoreBoardRowWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ScoreBoardItemContainer = styled.div`
  display: flex;
  height: 30px;
  justify-content: center;
  width: 100%;
`;
