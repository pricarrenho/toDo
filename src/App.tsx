import { ThemeProvider } from "styled-components";
import { themeBlack } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={themeBlack}>
      <div>
        <h1>To Do</h1>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
