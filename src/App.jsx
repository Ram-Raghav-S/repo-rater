import "./App.css";
import SearchBox from "./components/SearchBox";
import NavBar from "./components/NavBar";
import {
  Box,
  ChakraProvider,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [repoURL, setRepoURL] = useState("");
  const [filePath, setFilePath] = useState("");
  const [optimalCode, setOptimalCode] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const [stats, setStats] = useState({
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0,
    subscribers_count: 0,
    size: 0,
  });

  const rateRepo = async () => {
    let statsResponse = await fetch("http://localhost:5000/userMetrics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: repoURL, path: filePath }),
    });
    let stats = await statsResponse.json();
    setStats(stats);

    let optimalResponse = await fetch("http://localhost:5000/GPT_optimized", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: repoURL, path: filePath }),
    });
    let optimalCode = await optimalResponse.json();
    setOptimalCode(optimalCode);

    let suggestionsResponse = await fetch("http://localhost:5000/GPT_Review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: repoURL, path: filePath }),
    });
    let suggestions = await suggestionsResponse.json();
    setSuggestions(suggestions);
  };

  return (
    <ChakraProvider>
      <nav>
        <NavBar title="Repo-Rater" />
      </nav>
      <main>
        <div className="search-container">
          <div className="search-box">
            <input
              value={repoURL}
              type="text"
              onChange={(e) => {
                setRepoURL(e.target.value);
              }}
              className="search-bar"
              placeholder="Enter Repo URL"
            />
          </div>

          <div className="search-box">
            <input
              value={filePath}
              type="text"
              onChange={(e) => {
                setFilePath(e.target.value);
              }}
              className="search-bar"
              placeholder="Enter File Path"
            />
          </div>

          <Button
            className="search-button"
            colorScheme="teal"
            variant="outline"
            onClick={() => rateRepo()}
          >
            Rate Repo
          </Button>
        </div>

        <div className="output center">
          <div className="gpt-output">Optimized Code: {optimalCode}</div>
          <div className="sonarqube-output">Suggestions: {suggestions}</div>
          <div className="stats">
            <div className="graph">
              <CircularProgress value={40} color="green.400" size="95%">
                <CircularProgressLabel>
                  <div className="progress-level">Health: 40%</div>
                </CircularProgressLabel>
              </CircularProgress>
            </div>

            <div className="stars">Stars: {stats.stargazers_count}</div>
            <div className="forks">Forks: {stats.forks_count}</div>
            <div className="open-issues">
              Open Issues: {stats.open_issues_count}
            </div>
            <div className="releases">Size: {stats.size}</div>
            <div className="contributors">
              Subscriber Count: {stats.subscribers_count}
            </div>
          </div>
        </div>
      </main>
    </ChakraProvider>
  );
}

export default App;
