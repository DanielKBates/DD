function App() {
  return (
    <div className="w-full min-h-screen bg-slate-300 py-12">
      <div className="flex flex-col md:flex-row bg-slate-400  w-11/12 mx-auto rounded-lg">
        <div className="w-full md:w-2/5">
          <main className=" py-10 px-4  sm:px-6  lg:px-8 ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900  md:text-6xl">
                <span className="block xl:inline animate-fadeInShort">
                  Coming Soon
                </span>{" "}
                <span className="block text-indigo-600 animate-fadeInMed delay-100 ">
                  a portfolio
                </span>
              </h1>
              <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fadeInLong">
                That will blow your mind
              </p>
              <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fadeInXL">
                While you wait, check out my Github and my LinkedIn
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fadeInXL">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Github
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>{" "}
        <div className="z-10">
          <svg
            className="hidden lg:block h-full w-48 text-slate-400 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="30,0 100,0 50,100 0,100" />
          </svg>
        </div>
        <div className="w-full md:w-3/5 bg-black md:rounded-lg">yo</div>
      </div>
    </div>
  );
}

export default App;
