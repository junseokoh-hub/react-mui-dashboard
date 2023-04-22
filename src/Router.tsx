import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AuthContextProvider from "./context/AuthContext";
import LoadingIndicator from "./utils/LoadingIndicator";

const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const CustomersPage = lazy(() => import("./pages/CustomersPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ChartsPage = lazy(() => import("./pages/ChartsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

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
        element: (
          <AuthContextProvider>
            <Layout>
              <Suspense fallback={<LoadingIndicator />}>
                {router.element}
              </Suspense>
            </Layout>
          </AuthContextProvider>
        ),
      };
    } else {
      return {
        path: router.path,
        element: (
          <AuthContextProvider>
            <Suspense fallback={<LoadingIndicator />}>
              {router.element}
            </Suspense>
          </AuthContextProvider>
        ),
      };
    }
  }),
);
