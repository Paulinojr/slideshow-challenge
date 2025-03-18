import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import debounce from "lodash.debounce";


export default function Slide2({ theme }) {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

 const searchMovies = async (query) => {
   if (query) {
     const apiKey = "8e34afcc8de6202d612b97d917d140cd"; // Replace with your TMDB API key
     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

     try {
       const response = await fetch(url);
       const data = await response.json();
       setResults(data.results);
     } catch (error) {
       console.error("Error fetching movies:", error);
     }
   } else {
     setResults([]);
   }
 };
  const debouncedSearch = debounce(searchMovies, 300);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  const codeSnippet = `
  import { useState } from 'react';
  import debounce from 'lodash.debounce';

  const searchMovies = async (query) => {
    if (query) {
      const apiKey = 'SECRET_KEY';
      const url = \`https://api.themoviedb.org/3/search/movie?api_key=\${apiKey}&query=\${query}\`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    } else {
      setResults([]);
    }
  };

  const debouncedSearch = debounce(searchMovies, 300);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };
  `;
  return (
    <div
      className={`flex h-screen w-screen items-center justify-center p-[100px] ${
        theme === "dark" ? "bg-white/90" : "bg-black/90"
      } p-8 rounded-lg shadow-lg`}
    >
      <div className="flex-1 items-center justify-center pr-[8px]">
        <h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          Search with Debounce
        </h2>
        <div className="mt-6">
          <SyntaxHighlighter language="javascript" style={dracula}>
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="relative mx-[8px]">
        <div
          className={`absolute inset-y-0 w-[1px] bg-gradient-to-b ${
            theme === "dark"
              ? "from-transparent via-gray-300 to-transparent"
              : "from-transparent via-gray-500 to-transparent"
          }`}
        ></div>
      </div>

      <div className="flex-1 z-10 items-center justify-center pl-[8px]">
        <h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          Search for Movies
        </h2>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
          className={`mt-6 z-10 p-2 rounded-lg w-full ${
            theme === "dark"
              ? "bg-gray-200 text-black"
              : "bg-gray-700 text-white"
          }`}
        />
        <ul
          className={`mt-6 ${theme === "dark" ? "text-black" : "text-white"}`}
        >
          {results.map((movie) => (
            <li key={movie.id} className="mb-4">
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
