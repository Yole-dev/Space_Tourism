import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./assets/pages/Home.jsx";
import Destination from "./assets/pages/Destination";
import Crew from "./assets/pages/Crew";
import Technology from "./assets/pages/Technology";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/destination"
          element={
            <Layout>
              <Destination />
            </Layout>
          }
        />

        <Route
          path="/crew"
          element={
            <Layout>
              <Crew />
            </Layout>
          }
        />

        <Route
          path="/technology"
          element={
            <Layout>
              <Technology />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
