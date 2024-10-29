import { Provider } from "react-redux";
import { store } from "../store/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default Providers;
