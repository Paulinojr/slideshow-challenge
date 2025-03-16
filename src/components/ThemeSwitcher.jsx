export default function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed z-10 cursor-pointer bottom-10 right-10 p-4 border-2 border-gray-300 ${
        theme === "light" ? "bg-white/50" : "bg-[rgb(30,41,59)]"
      } hover:bg-white/70 rounded-full shadow-lg text-black transition duration-300 ease-in-out transform hover:scale-105 text-4xl w-16 h-16 flex items-center justify-center`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
