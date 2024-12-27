import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "@/pages/About";
import { Navigation } from "@/shared/Navigation/Navigation";
import "./styles/global.scss";
import { MainPage } from "@/pages/Main";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
