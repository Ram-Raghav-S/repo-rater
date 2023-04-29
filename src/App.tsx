import React, { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import SearchDetails from "./components/SearchDetails";
import WeatherInfo from "./components/WeatherInfo";
import NavBar from "./components/NavBar";
import { ChakraProvider, background } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <nav>
        <NavBar title="Repo-Rater" />
      </nav>
      <main>
        <div className="search-container">
          <SearchBox />
          <Button className="search-button" colorScheme="teal" variant="outline">
            Rate Repo
          </Button>
        </div>
      </main>
    </ChakraProvider>
  );
}

export default App;
