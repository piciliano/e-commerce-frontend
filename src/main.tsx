import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/globalStyles.ts";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import { SearchProvider } from "./contexts/searchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ThemeProvider>
  </StrictMode>
);
