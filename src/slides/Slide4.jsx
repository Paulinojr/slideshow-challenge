import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Slide2({ theme }) {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(
      "http://localhost:3001/weather"
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setWeather(data);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const codeSnippet = `
  // state variables
  const [weather, setWeather] = useState(null);

  // fetch weather data with SSE approach
  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/weather');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setWeather(data);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  // render weather data
  return (
    <div>
      {weather ? (
        <div>
          <p>Temperature: {weather?.main?.temp}°C</p>
          <p>Weather: {weather?.weather[0]?.description}</p>
          <p>Humidity: {weather?.main?.humidity}%</p>
          <p>Wind Speed: {weather?.wind?.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
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
          Server-sent events implementation
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

      <div className="flex-1 items-center justify-center pl-[8px]">
        <h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          Current Weather in Bragança Paulista, SP
        </h2>
        {weather ? (
          <div
            className={`mt-6 ${theme === "dark" ? "text-black" : "text-white"}`}
          >
            <p>Temperature: {weather?.main?.temp}°C</p>
            <p>Weather: {weather?.weather[0]?.description}</p>
            <p>Humidity: {weather?.main?.humidity}%</p>
            <p>Wind Speed: {weather?.wind?.speed} m/s</p>
          </div>
        ) : (
          <p
            className={`mt-6 ${theme === "dark" ? "text-black" : "text-white"}`}
          >
            Loading weather data...
          </p>
        )}
      </div>
    </div>
  );
}
