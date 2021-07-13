import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import * as Constant from "constant";

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf([
    Constant.SIZE.xxs,
    Constant.SIZE.xs,
    Constant.SIZE.small,
    Constant.SIZE.medium,
    Constant.SIZE.large,
    Constant.SIZE.xl,
    Constant.SIZE.xxl,
  ]),
  ellipsis: PropTypes.bool,
  bold: PropTypes.bool,
  preWrap: PropTypes.bool,
  underline: PropTypes.bool,
  onClick: PropTypes.func,
  withWordBreak: PropTypes.bool,
};
Text.defaultProps = {
  size: Constant.SIZE.medium,
  ellipsis: false,
  bold: false,
  preWrap: false,
  underline: false,
  withWordBreak: true,
};

function Text(props) {
  const wordBreak = props.withWordBreak ? "break-word" : "";
  let fontSize;
  let fontFamily = "arimo, arial";
  let whiteSpace = props.preWrap ? "pre-wrap" : props.ellipsis ? "nowrap" : "";
  let overflow = props.ellipsis ? "hidden" : "";
  let textOverflow = props.ellipsis ? "ellipsis" : "";
  let fontWeight = props.bold ? 700 : 400;
  let textDecoration = props.underline ? "underline" : null;
  let hoverStyle = null;
  let cursor = props.onClick ? "pointer" : null;
  let lineHeight;

  switch (props.size) {
    case Constant.SIZE.xxs:
      fontSize = 12;
      lineHeight = 16;
      break;
    case Constant.SIZE.xs:
      fontSize = 13;
      lineHeight = 17;
      break;
    case Constant.SIZE.small:
      fontSize = 14;
      lineHeight = 20;
      break;
    case Constant.SIZE.medium:
      fontSize = 15;
      lineHeight = 20;
      break;
    case Constant.SIZE.large:
      fontSize = 20;
      lineHeight = 24;
      break;
    case Constant.SIZE.xl:
      fontSize = 34;
      lineHeight = 40;
      break;
    case Constant.SIZE.xxl:
      fontSize = 42;
      lineHeight = 48;
      break;
    default:
      fontSize = 14;
      break;
  }

  return (
    <S.BaseText
      fontSize={fontSize}
      color={props.color}
      fontFamily={fontFamily}
      whiteSpace={whiteSpace}
      overflow={overflow}
      textOverflow={textOverflow}
      textDecoration={textDecoration}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      hoverStyle={hoverStyle}
      onClick={props.onClick}
      textCase={props.textCase}
      cursor={cursor}
      wordBreak={wordBreak}
      display={props.display}
      lineClamp={props.lineClamp}
    >
      {props.children}
    </S.BaseText>
  );
}

export default React.memo(Text);
