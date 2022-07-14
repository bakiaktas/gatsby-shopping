import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(p) => (p.variant === "icon" ? "fit-content" : "100%")};
  font-size: ${(p) => (p.variant === "icon" ? "16px" : "11px")};
  padding: ${(p) => (p.variant === "icon" ? "8px" : "11px")};
  border-radius: 0.5rem;
  background-color: ${(p) => (p.variant === "outlined" ? "white" : "#f38300")};
  color: ${(p) => (p.variant === "outlined" ? "#181818" : "white")};
  border: ${(p) => (p.variant === "outlined" ? "2px solid #181818" : "none")};

  &:hover {
    cursor: pointer;
    color: ${(p) => (p.variant === "outlined" ? "#f38300" : "white")};
    background-color: ${(p) =>
      p.variant === "outlined" ? "white" : "#ce6f00"};
    border: ${(p) => (p.variant === "outlined" ? "2px solid #f38300" : "none")};
  }
`;
