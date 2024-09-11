"use client";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { UserDataType } from "../hooks/useUserData";
import scss from "./logout.module.scss";

const LogOutPage = () => {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const router = useRouter();

  useEffect(() => {
    // When reading the cookie, parse the JSON data
    const userDataCookie = Cookies.get("userData");
    const parsedUserData = JSON.parse(userDataCookie || "{}") as UserDataType;
    setUserData(parsedUserData);
  }, []);

  const handleSignOut = () => {
    Cookies.remove("userData");

    setUserData(null);
    location.reload();
  };

  const handleSignin = () => {
    router.push("/login");
  };

  return (
    <div className={scss.logout}>
      {userData?.isLoggedIn ? (
        <>
          <Typography variant={"h6"}>
            Are you sure you want to sign out?
          </Typography>
          <Button variant="contained" onClick={handleSignOut}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Typography variant={"h6"}>Thank you for signing out!</Typography>
          <Button variant="contained" onClick={handleSignin}>
            Sign in
          </Button>
        </>
      )}
    </div>
  );
};

export default LogOutPage;
