import { DEVICE } from "constant";
import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
  width: 500px;

  @media ${DEVICE.small} {
    padding: 20px;
  }
`;

export const WordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GuessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${DEVICE.small} {
    flex-direction: column;
  }
`;

export const LifePointsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60px;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 150px;

  @media ${DEVICE.small} {
    max-width: 100px;
  }
`;

export const Icon = styled.i`
  width: 40px;
  color: red;
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1 auto;
  margin-inline-end: 15px;

  @media ${DEVICE.small} {
    flex: initial;
    width: 100%;
    margin-inline-end: 0;
    margin-bottom: 30px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  @media ${DEVICE.small} {
    width: 100%;
  }
`;

export const GameStateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
