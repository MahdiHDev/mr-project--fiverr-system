import { createBrowserRouter } from "react-router-dom";
import Layout from "../AllRoutes/Layout";
import About from "../pages/About";
import Affiliate from "../pages/Affiliate";
import Companies from "../pages/Companies";
import Contact from "../pages/Contact";
import Designs from "../pages/Designs";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Join from "../pages/Join";
import PriceList from "../pages/PriceList";
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";
import Project from "../pages/Project";
import TermsAndConditions from "../pages/TermsAndConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/designs",
        element: <Designs />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/pricelist",
        element: <PriceList />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/affiliate",
        element: <Affiliate />,
      },
      {
        path: "/termsandconditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyAndPolicy />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
