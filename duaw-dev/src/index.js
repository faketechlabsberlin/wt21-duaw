import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectDetail from "./components/ProjectDetail";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import Layout from "./components/Layout";
import Wiki from "./components/Wiki";


ReactDom.render(
  <ThemeProvider theme={theme} >
  <Router>
    <Layout>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/:repositoryName" element={<ProjectDetail />} />
    <Route path="/wiki" element={<Wiki />} />
  </Routes>
  </Layout>
  </Router>
  </ThemeProvider>,
  
  document.querySelector("#root")
);
