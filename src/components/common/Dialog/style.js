import styled from "styled-components";
import { DEVICE } from "constant";

export const BaseDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media ${DEVICE.large}, ${DEVICE.medium} {
    min-height: 200px;
    min-width: 300px;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    max-width: 100%;
  }

  @media ${DEVICE.small} {
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
  }
`;

export const BaseDialogHeader = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.padding};
  min-height: ${(props) => props.minHeight};
  color: ${(props) => props.color};
  border-bottom: ${(props) => props.borderBottom};
  padding-inline-end: ${(props) => props.paddingInlineEnd};
  & > *:not(:last-child) {
    display: flex;
    flex: 0 1 auto;
  }
  & > :last-child {
    display: flex;
    justify-content: flex-end;
    flex: 1 1 auto;
  }
`;

export const BaseDialogHeaderIcon = styled.div``;

export const BaseDialogEmptyHeaderIcon = styled.div``;

export const BaseDialogHeaderTitle = styled.div`
  & > *:not(:last-child) {
    margin-inline-end: 8px;
    align-self: center;
  }
`;

export const BaseDialogContent = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  height: fit-content;
  padding: ${(props) => props.padding};
`;

export const BaseDialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0 0 auto;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  max-height: 50px;
  border-radius: 4px;
  background-color: ${(props) => props.bgColor};
  & > *:not(:last-child) {
    padding-inline-end: 4px;
  }
`;

export const BaseDialogFooterItem = styled.div``;

export const DeleteDialogContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding};
`;

export const DeleteDialogVerification = styled.div`
  display: flex;
  margin-block-start: 25px;

  @media ${DEVICE.large}, ${DEVICE.medium} {
    align-items: center;
    > *:not(:first-child) {
      margin-inline-start: 10px;
    }
  }

  @media ${DEVICE.small} {
    flex-flow: column;
    > *:not(:first-child) {
      margin-block-start: 20px;
    }
  }
`;

export const VerificationText = styled.div`
  display: flex;
`;
