import React from "react";

// components, and styled components
import Header from "./elements/Header";
import Home from "./Home"; // contains components from elements folder
import { GlobalStyle } from "./styles/GlobalStyle"; // global style for project

const App = () => (
  <div>
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
