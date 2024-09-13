"use client";

import Typography from "@mui/material/Typography";
import { IconButton, useMediaQuery } from "@mui/material";
import scss from "./ThemeToggler.module.scss";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import React from "react";

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
  currentMode: "light" | "dark";
  showLabel?: boolean;
};

const ThemeToggler = (props: ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery("min-width: 500px");
  const { showLabel = false, currentMode, ColorModeContext } = props;
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      {mobileCheck && showLabel && <Typography>{currentMode}</Typography>}
      <IconButton
        className={scss[currentMode]}
        sx={{ mr: 2 }}
        title={currentMode + "mode"}
        aria-label={currentMode + " mode button"}
        onClick={colorMode?.toggleColorMode}
      >
        {currentMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>
  );
};

export default ThemeToggler;
