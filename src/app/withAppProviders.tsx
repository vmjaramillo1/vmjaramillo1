import { Provider } from "react-redux";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import store from "app/store";

import theme from "../styles/themeConfig";

const withAppProviders = (Component: any) => (props?: any) => {
  const WrapperComponent = () => (
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <Component {...props} />
            </ThemeProvider>
          </StyledEngineProvider>
        </Provider>
  );

  return WrapperComponent;
};

export default withAppProviders;
