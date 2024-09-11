import { ThemeOptions } from "@mui/material/styles";

const darkTheme: ThemeOptions = {
    palette: {
        mode: "dark",
        primary:{
            main: "#225088",
            light: "#658de9",
            dark: "#163b8d",
            contrastText: "#fff"
        },
        secondary: {
            main: "#1829EC",
            light: "#8888ed",
            // dark: will be calculated from palett.secondary.main,
            contrastText: "#e4d6f1",
        },
        background:{
            default: "#242424"
        },
        text:{
            primary:"#fff",
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
            color: "#fff",
        }
    },
}

export default darkTheme