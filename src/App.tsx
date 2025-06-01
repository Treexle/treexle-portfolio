import "./index.css";
import asciiArt from "../assets/treexle-ascii.txt?raw";
import { useState } from "react";

type Position = { row: number; col: number };

function App() {
  const [highlighted, setHighlighted] = useState<Set<string>>(new Set());

  const lines = asciiArt.split("\n");

  const handleHover = (row: number, col: number) => {
    const neighbors: Position[] = [];

    for (let r = row - 2; r <= row + 2; r++) {
      for (let c = col - 2; c <= col + 2; c++) {
        if (r >= 0 && r < lines.length && c >= 0 && c < lines[r]?.length) {
          neighbors.push({ row: r, col: c });
        }
      }
    }

    const shuffled = neighbors.sort(() => Math.random() - 0.5);
    const count = Math.floor(Math.random() * 7) + 6;
    const selected = shuffled.slice(0, count);

    const newHighlights = new Set(selected.map((p) => `${p.row}-${p.col}`));
    setHighlighted(newHighlights);
  };

  const clearHover = () => {
    setHighlighted(new Set());
  };

  return (
    <>
      <div className="w-full overflow-x-hidden font-default bg-base-200 sm:pt-2">
        {/* breakpoint info */}
        <p className="absolute top-1 left-1 md:hidden">sm</p>
        <p className="absolute top-1 left-1 hidden md:block lg:hidden">md</p>
        <p className="absolute top-1 left-1 hidden lg:block xl:hidden">lg</p>
        <p className="absolute top-1 left-1 hidden xl:block 2xl:hidden">xl</p>
        <p className="absolute top-1 left-1 hidden 2xl:block">2xl</p>
        <nav className="navbar z-3 bg-base-100 shadow-sm mx-auto rounded-b-2xl sm:rounded-2xl sm:max-w-2/3 px-3">
          <div className="navbar-start"> {/*navbar logo*/}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-300 rounded-2xl z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className=" btn-ghost text-xl mx-3 text-emerald-500 font-mono font-bold duration-500 hover:cursor-pointer hover:scale-105">
              Treexle
            </a>
          </div>
          <div className="navbar-end"> {/*navbar menu*/}
            <ul className="menu menu-horizontal px-1 mx-5 hidden lg:flex">
              <li>
                <a>About</a>
              </li>
              <li>
                <details>
                  <summary>Projects</summary>
                  <ul className="p-2 bg-base-300 rounded-2xl absolute">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <a className="btn hover:border-emerald-300 transition-colors duration-300">
              Contact
            </a>
          </div>
        </nav>
        <main className="min-h-[75vh] w-full -z-1 hero block justify-center items-center mx-auto p-5">
          <div className="hero-content flex-col mt-10">
            <div className="w-full max-w-full overflow-x-hidden px-2 sm:px-4 md:px-6">
              <pre className="font-mono text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-none text-center whitespace-pre-wrap mb-3 hover:cursor-pointer selection:bg-emerald-100 selection:text-emerald-500">
                {lines.map((line, rowIdx) => (
                  <div key={rowIdx} className="flex justify-center">
                    {line.split("").map((char, colIdx) => {
                      const isHighlighted = highlighted.has(
                        `${rowIdx}-${colIdx}`
                      );
                      return (
                        <span
                          key={`${rowIdx}-${colIdx}`}
                          onMouseEnter={() => handleHover(rowIdx, colIdx)}
                          onMouseLeave={clearHover}
                          className={`transition duration-150 ${
                            isHighlighted ? "text-emerald-400" : ""
                          }`}
                        >
                          {char === " " ? "\u00A0" : char}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </pre>
            </div>
            <p className="font-mono text-center mt-3">
              Front-end Developer{" "}
              <span className="text-emerald-400 font-bold">||</span> Game
              Developer
            </p>
          </div>
        </main>
        <section className="w-full p-3 bg-base-300 outline outline-white/10">
          <div className="w-full p-5 bg-base-200 outline outline-white/20 text-emerald-400 rounded-xl flex">
            <h2 className="text-accent text-5xl font-sans font-bold ">
              About Me
            </h2>
          </div>
        </section>
        <footer className="w-full footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10">
          <p>"Hidup ****"</p>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a className="hover:text-blue-400 hover:scale-125 hover:cursor-pointer transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a className="hover:text-red-700 hover:scale-125 hover:cursor-pointer transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a className="hover:text-blue-700 hover:scale-125 hover:cursor-pointer transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default App;
