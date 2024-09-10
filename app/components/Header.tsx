// "use client";
import Button from "@mui/material/Button";
import scss from "./Header.module.scss";
import { Typography } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <header className={scss.header}>
      <ul className={scss.menu}>
        <li>
          <Link className={scss.logo} href="/">
            <Typography variant="h6">Taijiquan Courses</Typography>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Typography color="inherit">Home</Typography>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <Typography color="inherit">Profile</Typography>
          </Link>
        </li>
      </ul>
      <div className={scss.buttonMenu}>
        <Button variant="contained" color="success" href="/login">
          Sign in
        </Button>
        <Button variant="contained" color="error" href="/logout">
          Sign out
        </Button>
        <Button variant="contained" color="info" href="/register">
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;
