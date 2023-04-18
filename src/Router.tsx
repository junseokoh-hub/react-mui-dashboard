import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import AuthPage from "./pages/AuthPage";
import CustomersPage from "./pages/CustomersPage";
import ProductsPage from "./pages/ProductsPage";
import ChartsPage from "./pages/ChartsPage";
import ProfilePage from "./pages/ProfilePage";

const routerInfo = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
    withAuth: true,
  },

  {
    id: 2,
    path: "/customers",
    element: <CustomersPage />,
    withAuth: true,
  },
  {
    id: 3,
    path: "/products",
    element: <ProductsPage />,
    withAuth: true,
  },
  {
    id: 4,
    path: "/profile",
    element: <ProfilePage />,
    withAuth: true,
  },
  {
    id: 5,
    path: "/charts",
    element: <ChartsPage />,
    withAuth: true,
  },
  {
    id: 6,
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
