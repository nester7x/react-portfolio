import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>{AppRoutes()}</Layout>
    </Router>
  );
}

export default App;
