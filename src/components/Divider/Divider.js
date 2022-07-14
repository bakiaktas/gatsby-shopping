import React from "react";
import PropTypes from "prop-types";

import { StyledDivider } from "./Divider.styles";

const Divider = ({ orientation, color, className }) => {
  return (
    <StyledDivider
      orientation={orientation}
      color={color}
      className={className}
    />
  );
};

Divider.defaultProps = {
  orientation: "horizontal",
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Divider;
