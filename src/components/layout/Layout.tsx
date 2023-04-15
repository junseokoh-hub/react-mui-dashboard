import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const isAuth = localStorage.getItem("auth");

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{isAuth ? children : <Navigate to="/auth" />}</main>
    </>
  );
};

export default Layout;
