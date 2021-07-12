import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
  width: 500px;
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
`;

export const LifePointsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
`;

export const Icon = styled.i`
  width: 40px;
  color: red;
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1 auto;
  margin-inline-end: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const GameStateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
