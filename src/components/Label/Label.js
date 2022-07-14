import React from "react";
import PropTypes from "prop-types";

import { StyledLabel } from "./Label.styles";

const Label = ({ label, className }) => {
  return <StyledLabel className={className}>{label}</StyledLabel>;
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Label;
