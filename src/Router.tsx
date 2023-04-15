import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import AuthPage from "./pages/AuthPage";

const routerInfo = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
    withAuth: true,
  },
  {
    id: 2,
    path: "/auth",
    element: <AuthPage />,
    withAuth: false,
  },
];

export const router = createBrowserRouter(
  routerInfo.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <Layout>{router.element}</Layout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  }),
);
