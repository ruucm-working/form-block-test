// @flow
import * as React from "react";
import { addPropertyControls, ControlType, Frame } from "framer";
import { motion } from "framer-motion";

let defaultVariants = {
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  }
};
export function ErrorBox({ isError }) {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        background: "pink"
      }}
      variants={defaultVariants}
      animate={isError ? "show" : "hide"}
    >
      ErrorBox
    </motion.div>
  );
}

ErrorBox.defaultProps = {
  isError: true
};

addPropertyControls(ErrorBox, {
  isError: {
    type: ControlType.Boolean
  }
});
