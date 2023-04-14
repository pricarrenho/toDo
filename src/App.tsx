import { ThemeProvider } from "styled-components";
import { themeBlack } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Home } from "./home";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeBlack}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
