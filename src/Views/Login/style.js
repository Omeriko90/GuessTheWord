import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  position: relative;
  margin: 200px auto;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin: 60px 0px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: 0 auto;
  width: 300px;
`;

export const ErrorContainer = styled.div`
  display: flex;
`;
