import React from "react";
import PropTypes from "prop-types";

import { StyledChip } from "./Chip.styles";

const Chip = ({ label, className }) => {
  return <StyledChip className={className}>{label}</StyledChip>;
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Chip;
