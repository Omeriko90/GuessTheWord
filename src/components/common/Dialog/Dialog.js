import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BaseDialogContainer } from "./style";
import MaterialUiDialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import * as Constant from "constant";
import Slide from "@material-ui/core/Slide";
import { ThemeContext } from "helpers/context";

Dialog.propTypes = {
  isOpen: PropTypes.bool,
};

Dialog.defaultProps = {
  isOpen: false,
};

const useStyles = makeStyles({
  paper: {
    margin: "40px",
    overflow: "initial",
  },
  elevation24: (theme) => ({
    boxShadow: theme.shadow.shadow3,
    borderColor: theme.colors.gray.gray300,
    borderStyle: "solid",
    borderWidth: "1px",
  }),
  rounded: {
    borderRadius: "6px",
  },
  mediaQueryStyle: {
    maxHeight: "100vh",
    borderRadius: 0,
  },
});

function Dialog(props) {
  const theme = useContext(ThemeContext);
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(Constant.DEVICE.small);
  let transitionComponent = {};
  if (isMobile) {
    transitionComponent["TransitionComponent"] = Transition;
  }

  return (
    <MaterialUiDialog
      classes={{
        paper: classes.paper,
        paperScrollPaper: isMobile && classes.mediaQueryStyle,
      }}
      open={props.isOpen}
      fullScreen={isMobile}
      maxWidth={false}
      fullWidth={false}
      {...transitionComponent}
      PaperProps={{
        classes: { elevation24: classes.elevation24, rounded: classes.rounded },
      }}
      BackdropProps={{
        style: { backgroundColor: `${theme.colors.gray.gray100}cc` },
      }}
    >
      <BaseDialogContainer width={DIALOG_WIDTH} height={DIALOG_HEIGHT}>
        {props.children}
      </BaseDialogContainer>
    </MaterialUiDialog>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DIALOG_WIDTH = "550px";
const DIALOG_HEIGHT = "450px";

export default Dialog;
