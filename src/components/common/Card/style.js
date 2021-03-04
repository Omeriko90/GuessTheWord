import styled from "styled-components";

export const CardBase = styled.div`
  width: auto;
  height: ${(props) => props.height};
  ${(props) => (props.bgColor ? `background-color: ${props.bgColor}` : ``)};
  cursor: ${(props) => props.cursor};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0px rgba(0, 0, 0, 0.08);
  margin: ${(props) => props.margin};
  transition: box-shadow 0.3s;
  outline-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
