import "./index.css";
import asciiArt from "../assets/treexle-ascii.txt?raw";
import React, { useState } from "react";

type Position = { row: number; col: number };

function App() {
  const [highlighted, setHighlighted] = useState<Set<string>>(new Set());

  const lines = asciiArt.split("\n");

  const handleHover = (row: number, col: number) => {
    const neighbors: Position[] = [];

    // Define a 5x5 surrounding area
    for (let r = row - 2; r <= row + 2; r++) {
      for (let c = col - 2; c <= col + 2; c++) {
        // Skip out-of-bounds
        if (r >= 0 && r < lines.length && c >= 0 && c < lines[r]?.length) {
          neighbors.push({ row: r, col: c });
        }
      }
    }

    // Shuffle and take a random number (e.g., 6-12 neighbors)
    const shuffled = neighbors.sort(() => Math.random() - 0.5);
    const count = Math.floor(Math.random() * 7) + 6; // between 6–12
    const selected = shuffled.slice(0, count);

    // Store in Set
    const newHighlights = new Set(selected.map((p) => `${p.row}-${p.col}`));
    setHighlighted(newHighlights);
  };

  const clearHover = () => {
    setHighlighted(new Set());
  };

  return (
    <>
      <div className="font-default bg-base-200">
        <nav className="navbar bg-base-100 shadow-sm sm:max-w-2/3 mx-auto rounded-b-2xl px-3">
          <div className="navbar-start">
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
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2 bg-base-100">
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
            <a className=" btn-ghost text-xl text-green-500 font-mono font-bold hover:cursor-pointer">
              Treexle
            </a>
          </div>
          {/* <div className="navbar-center hidden lg:flex"></div> */}
          <div className="navbar-end">
            {/* this ul is moved from navbar center */}
            <ul className="menu menu-horizontal px-1 mx-5 hidden lg:flex">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
            <a className="btn">Button</a>
          </div>
        </nav>
        <main className="size-[75vh] hero block justify-center items-center mx-auto p-5">
          <div className="hero-content flex-col">
            <pre className="font-mono text-xl leading-none text-center whitespace-pre-wrap hover:cursor-pointer">
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
                          isHighlighted ? "text-primary" : ""
                        }`}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    );
                  })}
                </div>
              ))}
            </pre>

            <p className="font-mono text-center">
              Front-end Developer{" "}
              <span className="text-green-400 font-bold">||</span> Game
              Developer
            </p>
          </div>
        </main>
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a className="hover:text-primary hover:scale-125 hover:cursor-pointer transition-colors duration-200">
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
              <a className="hover:text-primary hover:scale-125 hover:cursor-pointer transition-colors duration-200">
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
              <a className="hover:text-primary hover:scale-125 hover:cursor-pointer transition-colors duration-200">
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
