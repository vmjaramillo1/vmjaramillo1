import { useRoutes } from "react-router-dom";
import configuration from "app/data/configuration/configuration.json";
import withAppProviders from "app/withAppProviders";

import AppRoutes from "./routes";

function App() {
  return (
    <>
      {useRoutes([...AppRoutes.mainRoutes])}
    </>
  );
}

export default withAppProviders(App)();