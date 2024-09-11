"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import scss from "./profile.module.scss";

const Profile = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // When reading the cookie, parse the JSON data
    const userDataCookie = Cookies.get("userData");
    const parsedUserData = JSON.parse(userDataCookie || "{}");
    setUserName(parsedUserData.userName || null);
  }, []);

  const handleLogout = () => {
    // Redirect to the login page after logout
    router.push("/logout"); // Replace '/login' with your actual login page route
  };

  return (
    <div className={scss.profile}>
      {userName ? (
        <>
          <Typography variant={"h6"} component={"h1"}>
            Welcome to your profile page,{" "}
            <span style={{ color: "red" }}>{userName}</span>!
          </Typography>
          <Button
            style={{ marginTop: "2em" }}
            variant="contained"
            onClick={handleLogout}
            color={"error"}
          >
            Logout
          </Button>
        </>
      ) : (
        <Typography>You need to sign in.</Typography>
      )}
    </div>
  );
};

export default Profile;
