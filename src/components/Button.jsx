// src/components/Button.js
import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ label, variant = "contained", onClick }) => {
  return (
    <MuiButton variant={variant} color="success" onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
