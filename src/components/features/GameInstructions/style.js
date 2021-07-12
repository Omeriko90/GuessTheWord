import styled from "styled-components";

export const InstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.withSpacesInside &&
    `
    & > :first-child {
        margin-bottom: 10px;
    }
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`;
