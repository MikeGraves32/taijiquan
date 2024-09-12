"use client";
import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import scss from "./Header.module.scss";
import { Typography } from "@mui/material";
import { UserDataType } from "@/app/hooks/useUserData";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export type HeaderProps = {
  userData: UserDataType | null;
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
  currentMode: "light" | "dark";
  showLabel?: boolean;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { userData, ColorModeContext, currentMode, showLabel } = props;
  return (
    <header className={scss.header}>
      <nav className={scss.nav}>
        <ul className={scss.menu}>
          <li>
            <Button variant={"text"} href={"/"}>
              <Typography variant="h6" style={{ textTransform: "initial" }}>
                Taijiquan Courses
              </Typography>
            </Button>
          </li>

          <li>
            <Link href="/">
              <Typography>Home</Typography>
            </Link>
          </li>
          {!userData ? (
            <>
              <li>
                <Link href="/login">
                  <Typography>Login</Typography>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/profile">
                  <Typography>Profile</Typography>
                </Link>
              </li>
            </>
          )}
          <li style={{ marginLeft: "auto" }}>
            <ThemeToggler
              ColorModeContext={ColorModeContext}
              currentMode={currentMode}
              showLabel={true}
              userData={null}
            />
          </li>
        </ul>

        {userData?.isLoggedIn ? (
          <Button
            className={scss.signOutBtn}
            color="error"
            href="/logout"
            variant="contained"
          >
            Sign out
          </Button>
        ) : (
          <>
            <div className={scss.buttonGroup}>
              <Button
                className={scss.signOutBtn}
                color="success"
                href="/login"
                variant="contained"
                style={{ marginRight: "1rem" }}
              >
                Sign in
              </Button>
              <Button
                className={scss.signOutBtn}
                color="info"
                href="/register"
                variant="contained"
              >
                Register
              </Button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
