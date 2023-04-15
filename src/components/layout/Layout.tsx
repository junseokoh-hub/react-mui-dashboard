import React from "react";
import { Navigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const isAuth = localStorage.getItem("auth");

const Layout = ({ children }: LayoutProps) => {
  return <main>{isAuth ? children : <Navigate to="/auth" />}</main>;
};

export default Layout;
