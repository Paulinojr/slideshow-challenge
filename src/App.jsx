import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

const slides = [
  {
    title: "Your Name",
    subtitle: "Who am I?",
    content: "This is the first slide. Click the arrow to proceed.",
  },
  // Add more slides here later
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState("dark"); 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <div
        className={`relative flex h-screen w-screen items-center justify-center ${
          theme === "dark" ? "bg-techy" : "bg-techy-light"
        }`}
      >
        <div
          className={`text-center ${
            theme === "dark" ? "bg-white/90" : "bg-black/90"
          } p-8 rounded-lg shadow-lg`}
        >
          <h1
            className={`text-4xl font-bold ${
              theme === "dark" ? "text-black" : "text-white"
            }`}
          >
            {slides[currentSlide].title}
          </h1>
          <h2
            className={`text-2xl mt-4 ${
              theme === "dark" ? "text-black" : "text-white"
            }`}
          >
            {slides[currentSlide].subtitle}
          </h2>
          <p
            className={`mt-6 ${theme === "dark" ? "text-black" : "text-white"}`}
          >
            {slides[currentSlide].content}
          </p>
        </div>
        {/* <button
          onClick={nextSlide}
          className={`fixed right-10 top-1/2 transform -translate-y-1/2 text-4xl ${
            theme === "dark"
              ? "bg-white/50 hover:bg-white/70"
              : "bg-black/50 hover:bg-black/70"
          } rounded-full w-12 h-12 flex items-center justify-center shadow-lg`}
        >
          →
        </button> */}
      </div>
    </>
  );
}
