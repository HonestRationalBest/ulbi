import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainAsync } from "./pages/Main/Main.async";
import { AboutAsync } from "./pages/About/About.async";
import { Navigation } from "./components/Navigation/Navigation";
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
