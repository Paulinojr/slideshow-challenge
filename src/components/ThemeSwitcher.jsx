export default function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`absolute z-10 top-0 right-px mt-[5px] mr-[10px] size-24 text-[24px] cursor-pointer p-4 border-2 border-gray-300 ${
        theme === "light" ? "bg-white/50" : "bg-[rgb(30,41,59)]"
      } hover:bg-white/70 shadow-lg text-black transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
