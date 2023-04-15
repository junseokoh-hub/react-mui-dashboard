import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Box from "@mui/material/Box";

interface LayoutProps {
  children: React.ReactNode;
}

const isAuth = localStorage.getItem("auth");

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar />
      <Box component="main" pt={10} sx={{ flexGrow: 1 }}>
        {isAuth ? children : <Navigate to="/auth" />}
      </Box>
    </Box>
  );
};

export default Layout;
