"use client";
import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import scss from "./Header.module.scss";
import { Typography } from "@mui/material";
import { UserDataType } from "@/app/hooks/useUserData";

export type HeaderProps = {
  userData: UserDataType;
};

const Header: React.FC<HeaderProps> = ({ userData }) => {
  return (
    <header className={scss.header}>
      <nav className={scss.nav}>
        <ul className={scss.menu}>
          <li>
            <Link className={scss.logo} href="/">
              <Typography variant="h6">Taijiquan Courses</Typography>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Typography>Home</Typography>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <Typography>Profile</Typography>
            </Link>
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
