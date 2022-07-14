import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

const Button = ({ variant, children, className, onClick }) => {
  return (
    <StyledButton
      variant={variant}
      data-testid="buttonId"
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "contained",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "icon"]),
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
