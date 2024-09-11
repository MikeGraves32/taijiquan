"use client";
import type { Metadata } from "next";
import React, { createContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "@/app/components/Header";
import useUserData, { UserDataType } from "@/app/hooks/useUserData";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata: Metadata = {
    title: "Taijiquan Courses",
    description: "Taijiquan E-Learning courses for the web learner",
    keywords: "e-learning, video courses, software development, programming",
  };

  const ThemeMUIMode = createContext({
    toggleColorMode: () => {},
  });

  const userData = useUserData();

  const storedTheme = localStorage.getItem("theme");
  const initialMode = storedTheme || "dark";

  const [mode, setMode] = useState<"light" | "dark">(
    initialMode as "light" | "dark"
  );
  const chosenTheme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as React.ReactNode}</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content={metadata.description as string | undefined}
        />
        <meta
          name="keywords"
          content={metadata.keywords as string | undefined}
        />
        <meta name="author" content="Curious Courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        style={{
          backgroundColor: chosenTheme?.palette?.background?.default,
          maxWidth: "80rem",
          margin: "auto",
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <Header userData={userData} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
