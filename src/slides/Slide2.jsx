export default function Slide2({ theme }) {
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
          Who am I?
        </h2>
        <ul
          className={`mt-6 list-disc list-inside ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          <li className="mb-4">
            Graduated as a Computer Technician in 2015 and in Systems Analysis and Development in 2020.
          </li>
          <li className="mb-4">
            Frontend developer with 8 years of experience.
          </li>
          <li className="mb-4">
            Started my career working mostly with WordPress and other CMSs.
          </li>
          <li className="mb-4">
            Transitioned to a more "web app" environment after 2020.
          </li>
          <li className="mb-4">
            Specialized in building solutions for financial and e-commerce
            contexts.
          </li>
        </ul>
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
          The idea behind this web app
        </h2>
        <ul
          className={`mt-6 list-disc list-inside ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          <li className="mb-4">I wanted to showcase my skills.</li>
          <li className="mb-4">
            Created this web app to look like a slideshow.
          </li>
          <li className="mb-4">
            Show dynamic "working" examples of implementations from my career.
          </li>
          <li className="mb-4">
            Demonstrate my ability to build modern, responsive, and
            user-friendly interfaces.
          </li>
        </ul>
      </div>
    </div>
  );
}
