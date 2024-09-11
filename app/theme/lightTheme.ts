import { ThemeOptions } from "@mui/material/styles";

const lightTheme: ThemeOptions = {
    palette: {
        mode: "light",
        primary:{
            main: "#225088",
            light: "#657de9",
            dark: "#163b8d",
        },
        secondary: {
            main: "#508498",
            light: "#99bed4",
            dark: "#334a58",
 
        },
        background:{
            default: "#fff"
        },
        success: {
            main: "#1AA403",
            light: "#0f5903",
            dark: "#8bdf7d",
 
        },
        warning: {
            main: "#D48F00",
            light: "#b58c04",
            dark: "#e2d885",
 
        },
        error: {
            main: "#A40303",
            light: "#6b0303",
            dark: "#e76060",

        },
    }, 
    typography: {
        h1: {
            default: "#242424",
        },
        body1:{
            color: "#242424",}
    },
}

export default lightTheme