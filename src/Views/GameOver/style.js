import { DEVICE } from "constant";
import styled from "styled-components";

export const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;

  @media ${DEVICE.small} {
    padding: 20px;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 70px;

  @media ${DEVICE.small} {
    margin-bottom: 30px;
  }
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

  @media ${DEVICE.small} {
    margin-bottom: 25px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;

  @media ${DEVICE.small} {
    max-width: initial;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  @media ${DEVICE.small} {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }

  @media ${DEVICE.small} {
    width: 100%;
    & > :not(:last-child) {
      margin-bottom: 20px;
    }
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

  @media ${DEVICE.small} {
    margin-bottom: 25px;
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

  @media ${DEVICE.small} {
    margin-bottom: 10px;
  }
`;

export const FormSubmittedMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;
`;
