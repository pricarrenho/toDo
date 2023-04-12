import { ThemeProvider } from "styled-components";
import { themeBlack } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Home } from "./home";

function App() {
  return (
    <ThemeProvider theme={themeBlack}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
