import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import ArrowNavigation from "./components/ArrowNavigation";

function AppContent() {
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/slide1");
    }
  }, [navigate]);


  return (
    <div className="relative w-screen h-screen z-10 bg-black/50 text-4xl">
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />

      <ArrowNavigation theme={theme} />

      <div
        className={`flex h-screen w-screen items-center justify-center ${
          theme === "dark" ? "bg-techy" : "bg-techy-light"
        }`}
      >
        <Routes>
          <Route path="/slide1" element={<Slide1 theme={theme} />} />
        </Routes>

        <Routes>
          <Route path="/slide2" element={<Slide2 theme={theme} />} />
        </Routes>

        <Routes>
          <Route path="/slide3" element={<Slide3 theme={theme} />} />
        </Routes>

        <Routes>
          <Route path="/slide4" element={<Slide4 theme={theme} />} />
        </Routes>

        <Routes>
          <Route path="/slide5" element={<Slide5 theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
