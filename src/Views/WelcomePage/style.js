import { DEVICE } from "constant";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  @media ${DEVICE.small} {
    height: 100%;
    justify-content: center;
  }
`;

export const WelcomePageContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const HeadlineContainer = styled.div`
  display: flex;
  text-align: center;
  height: 150px;

  @media ${DEVICE.small} {
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 80px;
  max-width: 180px;

  @media ${DEVICE.small} {
    max-width: initial;
  }
`;

export const HighScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > :first-child {
    margin-bottom: 20px;
  }
`;
