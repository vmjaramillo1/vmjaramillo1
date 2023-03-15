import { lazy } from "react";
import { Navigate } from "react-router-dom";
import SitLayout from "@global/GlobalLayout";
import protectedRoutes from "app/data/configuration/protectedRoutes.json";

import Home from "../containers/Home";

// const publicUrl = process.env.PUBLIC_URL;
const publicUrl = "vmjaramillo1";

const getRouteByCodeStep = (codeStep) => {
  const route = {
    toConfig: "",
    toNavigate: "",
  };

  const { stepRoute } = protectedRoutes.find(
    (item) => item.codeStep === codeStep
  );

  route.toConfig = stepRoute;
  route.toNavigate = publicUrl
    ? `${publicUrl}/${stepRoute}`
    : "/".concat(stepRoute);

  return route;
};

export const homeRoute = publicUrl || "/";

export const error404Route = getRouteByCodeStep("404");
export const error500Route = getRouteByCodeStep("500");

const defaultRoute = {
  path: "/",
  element: <Navigate to={publicUrl} />,
};

const mainRoutes = [
  {
    path: publicUrl,
    element: <Home />,
  },
  {
    path: publicUrl,
    element: <SitLayout />,
    children: [

      { path: error404Route.toConfig, element: <div>error 404</div> },
      { path: error500Route.toConfig, element: <div>error 500</div> },
      { path: "*", element: <Navigate to={error404Route.toNavigate} /> },
    ],
  },
  { path: "*", element: <Navigate to={error404Route.toNavigate} /> },
];

if (publicUrl) mainRoutes.push(defaultRoute);

const AppRoutes = {
  mainRoutes,
};

export default AppRoutes;
