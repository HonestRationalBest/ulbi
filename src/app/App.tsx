import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "@/widgets/Navigation";
import "./styles/global.scss";
import { AppRouter } from "./providers/router";
import { Sidebar } from "@/widgets/Sidebar";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <div className="content">
        <Sidebar />
        <div className="page">
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
