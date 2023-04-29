import React, { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import SearchDetails from "./components/SearchDetails";
import WeatherInfo from "./components/WeatherInfo";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <nav>
        <NavBar title="Repo-Rater" />
      </nav>
      <main>
        <SearchBox />
      </main>
    </ChakraProvider>
  );
}

export default App;
