import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import * as Constant from "constant";
import Text from "../Text/Text";
import { ThemeContext } from "helpers/context";

TextInput.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf([
    Constant.SIZE.small,
    Constant.SIZE.medium,
    Constant.SIZE.large,
    Constant.SIZE.xl,
  ]),
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMsg: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  lineHeight: PropTypes.bool,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  withBorder: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(Constant.TEXT_INPUT_TYPE)),
  name: PropTypes.string,
};

TextInput.defaultProps = {
  value: "",
  disabled: false,
  rounded: false,
  lineHeight: true,
  autoFocus: false,
  size: Constant.SIZE.small,
  withBorder: true,
  type: Constant.TEXT_INPUT_TYPE.text,
};

function TextInput(props) {
  const { colors } = useContext(ThemeContext);
  const textAlign = TEXT_ALIGN[getComputedStyle(document.body).direction];
  const [isFocused, setIsFocused] = useState(false);
  const borderRadius = props.rounded
    ? BORDER_RADIUS.rounded
    : BORDER_RADIUS.default;
  const textColor = "#231f20";
  const disabledPlaceholderColor = "#231f20";
  let baseInput = useRef(null);
  let placeholderColor = "#a6a8ab";
  let borderColor,
    backgroundColor,
    focusStyle,
    lineHeight,
    fontSize,
    paddingStyle,
    paddingInlineStart;

  useEffect(() => {
    if (props.autoFocus && baseInput.current) {
      baseInput.current.focus();
    }
  }, [baseInput.current, props.autoFocus]);

  switch (props.size) {
    case Constant.SIZE.small:
      fontSize = FONT_SIZE.small;
      lineHeight = LINE_HEIGHT.small;
      paddingStyle = "4px";
      break;
    case Constant.SIZE.medium:
      fontSize = FONT_SIZE.medium;
      lineHeight = LINE_HEIGHT.medium;
      paddingStyle = "8px";
      break;
    case Constant.SIZE.large:
      fontSize = FONT_SIZE.large;
      lineHeight = LINE_HEIGHT.large;
      paddingStyle = "12px";
      break;
    case Constant.SIZE.xl:
      fontSize = FONT_SIZE.xl;
      lineHeight = LINE_HEIGHT.xl;
      paddingStyle = "14px";
      break;
    default:
      fontSize = FONT_SIZE.small;
      lineHeight = LINE_HEIGHT.small;
      break;
  }

  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  const handleKeyUp = (e) => {
    if (props.onKeyUp) {
      props.onKeyUp(e);
    }
  };

  const handleKeyDown = (e) => {
    e.stopPropagation();
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  const handleOnBlur = (e) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e.target.value);
    }
  };

  const handleOnFocus = (e) => {
    setIsFocused(true);

    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  return (
    <S.InputContainer width={props.width}>
      <S.InputComponentAndError>
        <S.TextIconGroup
          withBorder={props.withBorder}
          padding={paddingStyle}
          paddingInlineStart={paddingInlineStart}
          borderRadius={borderRadius}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          focusStyle={
            isFocused && !props.errorMsg && !props.disabled && focusStyle
          }
        >
          <S.BaseTextInput
            fontSize={fontSize}
            ref={baseInput}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            placeholder={props.placeholder}
            backgroundColor={backgroundColor}
            placeholderColor={
              props.disabled ? disabledPlaceholderColor : placeholderColor
            }
            lineHeight={props.lineHeight && lineHeight}
            textColor={textColor}
            disabled={props.disabled}
            value={props.value || ""}
            textAlign={textAlign}
            type={props.type}
          ></S.BaseTextInput>
        </S.TextIconGroup>
        {props.errorMsg && !props.disabled ? (
          <S.ErrorMsgContainer>
            <Text size={Constant.SIZE.xxs} color={colors.red.salmon}>
              {props.errorMsg}
            </Text>
          </S.ErrorMsgContainer>
        ) : (
          <></>
        )}
      </S.InputComponentAndError>
    </S.InputContainer>
  );
}

const BORDER_RADIUS = { default: "4px", rounded: "15px" };
const FONT_SIZE = { small: "12px", medium: "14px", large: "16px", xl: "18px" };
const LINE_HEIGHT = {
  small: "16px",
  medium: "20px",
  large: "24px",
  xl: "24px",
};
const TEXT_ALIGN = { ltr: "left", rtl: "right" };

export default React.memo(TextInput);
