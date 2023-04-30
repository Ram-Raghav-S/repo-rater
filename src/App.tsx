import "./App.css";
import SearchBox from "./components/SearchBox";
import NavBar from "./components/NavBar";
import {
  Box,
  ChakraProvider,
  CircularProgress,
  CircularProgressLabel,
  SimpleGrid,
  background,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <nav>
        <NavBar title="Repo-Rater" />
      </nav>
      <main>
        <div className="search-container">
          <SearchBox placeholder="Enter Repo URL" />
          <SearchBox placeholder="Enter File Path" />

          <Button
            className="search-button"
            colorScheme="teal"
            variant="outline"
          >
            Rate Repo
          </Button>
        </div>

        <div className="output center">
          <div className="gpt-output">
            Optimized Code: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            assumenda. Vitae, nisi perferendis dolore aperiam ab recusandae
            voluptatibus, velit sed minima a natus cupiditate et vero veritatis
            id nostrum porro consequatur? Quasi tenetur enim in soluta impedit
            error saepe eligendi velit reprehenderit molestias. Vitae beatae
            veniam praesentium repellendus, dignissimos suscipit?
          </div>
          <div className="sonarqube-output">
            Suggestions: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            assumenda. Vitae, nisi perferendis dolore aperiam ab recusandae
            voluptatibus, velit sed minima a natus cupiditate et vero veritatis
            id nostrum porro consequatur? Quasi tenetur enim in soluta impedit
            error saepe eligendi velit reprehenderit molestias. Vitae beatae
            veniam praesentium repellendus, dignissimos suscipit?
          </div>
          <div className="stats">
            <div className="graph">
              <CircularProgress value={40} color="green.400" size="95%">
                <CircularProgressLabel>
                  <div className="progress-level">Health: 40%</div>
                </CircularProgressLabel>
              </CircularProgress>
            </div>
            <div className="stars">Stars: 1</div>
            <div className="forks">Forks: 2</div>
            <div className="open-issues">Open Issues: 4</div>
            <div className="pull-requests">Open PRs: 5</div>
            <div className="releases">Releases: 4</div>
            <div className="contributors">Active Contributors: 5</div>
          </div>
        </div>
      </main>
    </ChakraProvider>
  );
}

export default App;
