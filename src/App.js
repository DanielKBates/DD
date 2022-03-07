function App() {
  return (
    <div className="w-full min-h-screen bg-slate-300 py-12">
      <div className="relative flex flex-col md:flex-row bg-purple-1100 w-11/12 md:w-2/3 mx-auto rounded-lg">
        <div className="w-full h-[16rem] ">
          <main className=" absolute md:left-40 md:top-16 py-10 px-4 sm:px-6 lg:px-8 ">
            <div className="sm:text-center lg:text-left md:pl-8">
              <h1 className=" w-full font-extrabold text-gray-900 md:text-6xl">
                <span className="text-7xl -ml-1 block text-slate-100 animate-fadeInShort">
                  Coming Soon
                </span>{" "}
                <span className="text-4xl block text-[#0283ff] animate-fadeInMed delay-100 md: pt-4">
                  a portfolio/blog
                </span>
              </h1>
              <p className="mt-3 text-lg text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fadeInLong">
                That will blow your mind
              </p>
              <p className="mt-3 text-lg text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fadeInXL">
                While you wait, check out my Github and LinkedIn
              </p>

              <div className="mt-5 sm:mt-8 flex flex-col md:flex-row items-stretch md:justify-center lg:justify-start animate-fadeInXL">
                <div className="rounded-md shadow">
                  <a
                    href="https://github.com/DanielKBates"
                    className="w-full flex flex-row items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-slate-100 delay-200 hover:transform hover:-translate-x-2 hover:-translate-y-2 hover:scale-110 hover:border-2 hover:border-black md:py-4 md:text-lg md:px-10"
                  >
                    Github <img className="ml-4" src="/assets/GitHub32.png" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://www.linkedin.com/in/danielkbates/"
                    className="w-full flex flex-row items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#2767b2] bg-slate-200 delay-100 hover:transform hover:translate-x-2 hover:-translate-y-2 hover:scale-110 hover:border-2 hover:border-[#2767b2] md:py-4 md:text-lg md:px-10"
                  >
                    LinkedIn <img className="ml-3 md:ml-4 w-[38px]" src="/assets/LI-In-Bug.png" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>{" "}
        <div className="hidden md:block  w-full overflow-hidden rounded-lg md:rounded-r-lg" >
          <svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="960" height="540" fill="#1e0132"></rect>
            <path d="M488 540L565 540L565 463L594 463L594 386L464 386L464 309L438 309L438 231L527 231L527 154L542 154L542 77L424 77L424 0L960 0L960 77L960 77L960 154L960 154L960 231L960 231L960 309L960 309L960 386L960 386L960 463L960 463L960 540L960 540Z"
              fill="#0083ff">
            </path>
            <path d="M624 540L623 540L623 463L624 463L624 386L680 386L680 309L560 309L560 231L636 231L636 154L572 154L572 77L590 77L590 0L960 0L960 77L960 77L960 154L960 154L960 231L960 231L960 309L960 309L960 386L960 386L960 463L960 463L960 540L960 540Z" fill="#0a55c6"></path>
            <path d="M734 540L865 540L865 463L804 463L804 386L819 386L819 309L711 309L711 231L826 231L826 154L822 154L822 77L724 77L724 0L960 0L960 77L960 77L960 154L960 154L960 231L960 231L960 309L960 309L960 386L960 386L960 463L960 463L960 540L960 540Z" fill="#002b8f"></path>
          </svg>
        </div>
        <div className="md:hidden w-full h-98 overflow-hidden rounded-lg md:rounded-r-lg" >
          <svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" ><rect x="0" y="0" width="960" height="540" fill="#1e0132"></rect><path d="M0 311L137 311L137 348L274 348L274 362L411 362L411 299L549 299L549 287L686 287L686 330L823 330L823 337L960 337L960 280L960 541L960 541L823 541L823 541L686 541L686 541L549 541L549 541L411 541L411 541L274 541L274 541L137 541L137 541L0 541Z" fill="#0083ff"></path><path d="M0 377L137 377L137 376L274 376L274 377L411 377L411 404L549 404L549 346L686 346L686 382L823 382L823 351L960 351L960 360L960 541L960 541L823 541L823 541L686 541L686 541L549 541L549 541L411 541L411 541L274 541L274 541L137 541L137 541L0 541Z" fill="#0a55c6"></path><path d="M0 430L137 430L137 493L274 493L274 463L411 463L411 471L549 471L549 418L686 418L686 474L823 474L823 472L960 472L960 425L960 541L960 541L823 541L823 541L686 541L686 541L549 541L549 541L411 541L411 541L274 541L274 541L137 541L137 541L0 541Z" fill="#002b8f"></path></svg>
        </div>
      </div>
    </div>
  );
}

export default App;
