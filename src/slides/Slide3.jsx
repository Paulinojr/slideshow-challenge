export default function Slide3({ theme }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${
        theme === "dark" ? "bg-white/90" : "bg-black/90"
      } p-8 rounded-lg shadow-lg`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
        <div className="flex-1 pr-8">
          <h2
            className={`text-3xl font-bold ${
              theme === "dark" ? "text-black" : "text-white"
            }`}
          >
            My Highlight: Healthcheck monitoring dashboard
          </h2>
          <ul
            className={`mt-6 list-disc list-inside ${
              theme === "dark" ? "text-black" : "text-white"
            }`}
          >
            <li className="mb-4">
              Initially, we were giving the challenge to make a solution to
              monitor multiple systems (servers, databases, file transfers) with
              a simple "online/offline" status.
            </li>
            <li className="mb-4">
              I designed a Figma prototype and collaborated with the backend
              team to use WebSockets for live updates. I made a Node.js
              middleware API to handle the WebSocket connections.
            </li>
            <li className="mb-4">
              Close to the deadline, we discovered our OpenShift infrastructure
              didn’t support WebSockets.
            </li>
            <li className="mb-4">
              After some research, I learned about Server-Sent Events (SSE) as
              an alternative, and after adapting the middleware API to work with
              SSE, we were able to deliver the MVP.
            </li>
            <li className="mb-4">
              Challenge 2: Implemented a search bar that triggered too many API
              requests as the user typed.
            </li>
            <li className="mb-4">
              The solution was to implement a debounce to limit the number of
              requests, improving performance and user experience.
            </li>
          </ul>
        </div>

        <div className="flex-1 pl-8 flex items-center justify-center">
          <div
            className={`border-2 ${
              theme === "dark" ? "border-gray-300" : "border-gray-500"
            } p-4 rounded-lg`}
          >
            <img
              src="/public/monitoramento.jpg"
              alt="monitoring"
              className="w-[1000px] max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
