import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectDetail from "./components/ProjectDetail";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import Layout from "./components/Layout";

/**
 * TODO: use `document.getElementById` preferably,
 * it's been tested and proved to be 10x faster than other querying methods
 */
ReactDom.render(
  <ThemeProvider theme={theme}>
  <Router>
    <Layout>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/:repositoryName" element={<ProjectDetail />} />
  </Routes>
  </Layout>
  </Router>
  </ThemeProvider>,
  
  document.querySelector("#root")
);
