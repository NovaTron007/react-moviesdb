import React from "react";
import { Router } from "@reach/router";

// components
import Header from "./elements/Header";
import Home from "./Home"; // contains components from elements folder
import Movie from "./Movie";
import NotFound from "./NotFound";

// import global styled component
import { GlobalStyle } from "./styles/GlobalStyle"; // global style for project

const App = () => (
  <div>
    <Header />
    <Router>
      <Home path="/" />

      {/* grabs data after / in url, pass url content to Movie component */}
      <Movie path="/:movieId" />

      <NotFound default />
    </Router>
    <GlobalStyle />
  </div>
);

export default App;
