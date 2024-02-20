import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccueilPage from './pages/accueil';
import ProgPage from "./pages/programmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/programmation" element={<ProgPage />} />
      </Routes>
    </Router>
  );
}

export default App;
