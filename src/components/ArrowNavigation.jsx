import { useNavigate } from "react-router-dom";

export default function ArrowNavigation({ theme }) {
  const navigate = useNavigate();

  const slideRoutes = ["/slide1", "/slide2", "/slide3", "/slide4"];

  const navigateToSlide = (direction) => {
    const currentPath = window.location.pathname;
    const currentIndex = slideRoutes.indexOf(currentPath);
    let nextIndex;

    if (direction === "left") {
      nextIndex = (currentIndex - 1 + slideRoutes.length) % slideRoutes.length;
    } else {
      nextIndex = (currentIndex + 1) % slideRoutes.length;
    }

    navigate(slideRoutes[nextIndex]);
  };

  return (
    <>
      <div
        className={`absolute z-10 left-0 top-0 h-full w-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
          theme === "dark"
            ? "bg-[rgba(30,41,59,0.6)]"
            : "bg-[rgba(255,255,255,0.8)]"
        }`}
        onClick={() => navigateToSlide("left")}
      >
        <div
          className={`p-4 rounded-full text-[32px] ${
            theme === "dark"
              ? "bg-white/50"
              : "bg-black/50 text-[rgb(30,41,59)]"
          } hover:${
            theme === "dark"
              ? "bg-white/70"
              : "bg-black/70 text-[rgb(30,41,59)]"
          } cursor-pointer`}
        >
          ←
        </div>
      </div>

      <div
        className={`absolute z-10 right-px top-0 h-full w-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
          theme === "dark"
            ? "bg-[rgba(30,41,59,0.6)]"
            : "bg-[rgba(255,255,255,0.8)]"
        }`}
        onClick={() => navigateToSlide("right")}
      >
        <div
          className={`p-4 rounded-full text-[32px] ${
            theme === "dark"
              ? "bg-white/50"
              : "bg-black/50 text-[rgb(30,41,59)]"
          } hover:${
            theme === "dark" ? "bg-white/70" : "bg-black/70 text-["
          } cursor-pointer`}
        >
          →
        </div>
      </div>
    </>
  );
}
