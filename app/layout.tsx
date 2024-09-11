"use client";
import "./globals.css";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import useUserData, { UserDataType } from "@/app/hooks/useUserData";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata: Metadata = {
    title: "Taijiquan Courses",
    description: "Taijiquan E-Learning courses for the web learner",
  };

  const userData = useUserData();

  return (
    <html lang="en">
      <body
        style={{
          background: "black",
          color: "white",
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
