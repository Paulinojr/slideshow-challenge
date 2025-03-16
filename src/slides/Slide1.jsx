export default function Slide1({ theme }) {
  return (
    <div
      className={`text-center p-8 rounded-lg shadow-lg`}
    >
      <h1
        className={`text-4xl font-bold ${
          theme === "dark" ? "text-black" : "text-white"
        }`}
      >
        Paulino Jr.
      </h1>
      <h2
        className={`text-2xl mt-4 ${
          theme === "dark" ? "text-black" : "text-white"
        }`}
      >
        Frontend Engineer
      </h2>
      
    </div>
  );
}
