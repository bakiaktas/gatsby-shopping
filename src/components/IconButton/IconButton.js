import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledIcon } from "./IconButton.styles";

const IconButton = ({ icon, className, onClick }) => {
  return (
    <StyledIcon className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </StyledIcon>
  );
};

IconButton.propTypes = {
  icon: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
