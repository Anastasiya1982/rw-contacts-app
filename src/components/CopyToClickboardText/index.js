import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useCopyToClipboard } from "react-use";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      alignItems: "center",
    },
    icon: {
      marginRight: theme.spacing(1),
      fontSize: "small",
    },
  })
);

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};
const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "Copy",
  [STATUS_COPY.COPIED]: "Copied",
};

const CopyToClipboardText = ({ text }) => {
  const classes = useStyles();
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

  // const getTooltipTitle = () => {
  //     switch (statusCopy) {
  //         case STATUS_COPY.COPY:
  //             return 'Copy';
  //         case STATUS_COPY.COPIED:
  //             return 'Copied';
  //         default:
  //             return "";
  //     }

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy("copy");
  }, [setStatusCopy]);
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top" arrow>
        <Button display="flex" onClick={onClickCopy}>
          <FileCopyOutlinedIcon className={classes.icon} />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyToClipboardText;
