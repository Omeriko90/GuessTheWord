import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import * as Constant from "constant";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    Constant.COLOR.primary,
    Constant.COLOR.secondary,
    Constant.COLOR.danger,
    Constant.COLOR.invert,
    Constant.COLOR.light,
    Constant.COLOR.white,
    Constant.COLOR.blue,
    Constant.COLOR.orange,
  ]),
  size: PropTypes.oneOf([
    Constant.SIZE.xs,
    Constant.SIZE.small,
    Constant.SIZE.medium,
    Constant.SIZE.large,
    Constant.SIZE.xl,
    Constant.SIZE.xxl,
  ]),
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.string,
};

Button.defaultProps = {
  color: Constant.COLOR.primary,
  size: Constant.SIZE.small,
  onClick: null,
  disabled: false,
  rounded: false,
  isActive: false,
};

function Button(props) {
  let borderRadius = props.rounded ? "50px" : "4px";
  let cursor = props.disabled ? "not-allowed" : "pointer";
  let stateStyle = getStateStyle()[props.color];
  let paddingBlock;
  let paddingInLine;
  let fontSize;
  let lineHeight;

  switch (props.size) {
    case Constant.SIZE.xs:
      paddingBlock = 1;
      paddingInLine = 8;
      fontSize = 12;
      lineHeight = 16;
      break;
    case Constant.SIZE.small:
      paddingBlock = 1;
      paddingInLine = 12;
      fontSize = 14;
      lineHeight = 20;
      break;
    case Constant.SIZE.medium:
      paddingBlock = 3;
      paddingInLine = 12;
      fontSize = 15;
      lineHeight = 20;
      break;
    case Constant.SIZE.large:
      paddingBlock = 3;
      paddingInLine = 16;
      fontSize = 16;
      lineHeight = 24;
      break;
    case Constant.SIZE.xl:
      paddingBlock = 7;
      paddingInLine = 16;
      fontSize = 18;
      lineHeight = 24;
      break;
    case Constant.SIZE.xxl:
      paddingBlock = 11;
      paddingInLine = 20;
      fontSize = 20;
      lineHeight = 24;
      break;
    default:
  }

  return (
    <S.BaseButton
      onClick={!props.disabled && props.onClick}
      cursor={cursor}
      borderRadius={borderRadius}
      paddingBlock={paddingBlock}
      defaultStyle={stateStyle.default}
      hoverStyle={stateStyle.hover}
      activeStyle={stateStyle.active}
      paddingInLine={paddingInLine}
      fontSize={fontSize}
      lineHeight={`${lineHeight}px`}
      display={props.iconName ? "flex" : ""}
      width={props.width}
    >
      {props.text}
    </S.BaseButton>
  );
}

export default React.memo(Button);

const getStateStyle = (colors) => {
  return {
    primary: {
      default: `color: #fff;
      background-color: #37C998;
      border:1px solid #37C998;
    `,
      hover: `color: #fff;
      background-color: #2CA076;
      border:1px solid #2CA076;
    `,
      active: `color: #fff;
      background-color: #217859;
      border:1px solid #217859;
    `,
      disabled: `color:#fff;
      background-color: #87DEBF;
      border:1px solid #87DEBF;
      
    `,
    },
    secondary: {
      default: `color: #fff;
      background-color: #a6a8ab;
      border:1px solid #a6a8ab;
    `,
      hover: `color: #fff;
      background-color: #808184;
      border:1px solid #808184;
      `,
      active: `color: #fff;
      background-color: #66676b;
      border:1px solid #66676b;
      `,
      disabled: `color: #fff;
      background-color: #dbdcdd;
      border:1px solid #dbdcdd;
      `,
    },
    danger: {
      default: `color: #fff;
      background-color: #F14949;
      border:1px solid #F14949;
    `,
      hover: `color: #fff;
      background-color: #c03a3a;
      border:1px solid #c03a3a;
    `,
      active: `color: #fff;
      background-color: #992e2e;
      border:1px solid #992e2e;
    `,
      disabled: `color: #fff;
      background-color: #992e2e;
      border:1px solid #992e2e;
      
    `,
    },
    blue: {
      default: `color: #fff;
  background-color: #447AEF;
  border:1px solid #447AEF;
`,
      hover: `color:  #fff;
  background-color:#3462C6;
  border:1px solid #3462C6;
`,
      active: `color: #fff;
  background-color: #274B99;
  border:1px solid  #274B99;
`,
      disabled: `color: #fff;
  background-color: #447AEF;
  border:1px solid #447AEF;
  opacity: 0.3; 
  
`,
    },
  };
};
