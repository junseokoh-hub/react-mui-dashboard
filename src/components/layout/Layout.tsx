import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Sidebar from "../navigation/Sidebar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

interface LayoutProps {
  children: React.ReactNode;
}

const isAuth = localStorage.getItem("auth");

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box display={"flex"}>
      <Navbar />
      <Sidebar />
      <Box component="main" py={2} px={1} sx={{ flexGrow: 1 }}>
        <Toolbar />
        {isAuth ? children : <Navigate to="/auth" />}
      </Box>
    </Box>
  );
};

export default Layout;
