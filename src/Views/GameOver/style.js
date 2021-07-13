import styled from "styled-components";

export const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 70px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;

  & > :first-child {
    margin-bottom: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  & > :first-child {
    margin-bottom: 15px;
  }
`;

export const ScoreBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ScoreBoardHeadlineContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
