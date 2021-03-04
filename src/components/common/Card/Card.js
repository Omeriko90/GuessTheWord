import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CardBase } from "./style";

Card.propTypes = {
  bgColor: PropTypes.string,
  withPadding: PropTypes.bool,
  withBorder: PropTypes.bool,
  margin: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
  height: PropTypes.string,
};

Card.defaultProps = {
  withPadding: false,
  withBorder: false,
  height: "100%",
};

function Card(props) {
  let borderColor = props.borderColor ? props.borderColor : "#e6e7e8";
  let border = props.withBorder ? "1px solid " + borderColor : "0px";
  let padding = props.withPadding ? "16px" : "0px";
  let cursor = props.onClick ? "pointer" : "default";

  return (
    <CardBase
      bgColor={props.bgColor}
      padding={padding}
      border={border}
      borderColor={borderColor}
      cursor={cursor}
      onClick={props.onClick}
      margin={props.margin}
      height={props.height}
    >
      {props.children}
    </CardBase>
  );
}

export default React.memo(Card);
