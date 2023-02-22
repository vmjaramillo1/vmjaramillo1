import { useRoutes } from "react-router-dom";
import { injectStyle } from "react-toastify/dist/inject-style";
import withAppProviders from "app/withAppProviders";

import "styles/aos.css";
import AppRoutes from "./routes";

injectStyle();

function App() {
  return <>{useRoutes([...AppRoutes.mainRoutes])}</>;
}

export default withAppProviders(App)();
