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
export function ErrorContainer({ isError, variants, children }) {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        background: "pink"
      }}
      variants={variants ? variants : defaultVariants}
      animate={isError ? "show" : "hide"}
    >
      {children}
    </motion.div>
  );
}

ErrorContainer.defaultProps = {
  isError: true,
  height: 50
};

addPropertyControls(ErrorContainer, {
  isError: {
    type: ControlType.Boolean
  }
});
