import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App";
import { Repository } from "./components/Repository";

/**
 * TODO: use `document.getElementById` preferably,
 * it's been tested and proved to be 10x faster than other querying methods
 */
ReactDom.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:repositoryName" element={<Repository />} />
    </Routes>
  </Router>,
  document.querySelector("#root")
);
