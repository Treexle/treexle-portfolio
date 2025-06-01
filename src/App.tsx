import "./index.css";

import Breakpoint from "./components/Breakpoint";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";

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
        {/* <Breakpoint /> */}
        <Breakpoint />
        <Navbar />
        <main className="min-h-[75vh] w-full -z-1 hero block justify-center items-center mx-auto p-5">
          <div className="hero-content flex-col mt-10">
            <div className="w-full max-w-full overflow-x-hidden px-2 sm:px-4 md:px-6">
              <pre className="font-default text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-none text-center whitespace-pre-wrap mb-3 hover:cursor-pointer selection:bg-emerald-100 selection:text-emerald-500">
                {lines.map(
                  (
                    line,
                    rowIdx //chars hover interaction
                  ) => (
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
                  )
                )}
              </pre>
            </div>
            <p className="font-mono text-center mt-3">
              Front-end Developer{" "}
              <span className="text-emerald-400 font-bold">||</span> Game
              Developer
            </p>
          </div>
        </main>
        <Section />
        <Section />
        <Footer />
      </div>
    </>
  );
}

export default App;
