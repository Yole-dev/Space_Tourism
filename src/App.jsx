import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./assets/pages/home";
import Destination from "./assets/pages/destination";
import Crew from "./assets/pages/crew";
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
