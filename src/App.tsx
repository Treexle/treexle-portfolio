import "./index.css";

// import Breakpoint from "./components/Breakpoint";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Hover from "./components/Hover";



function App() {

  return (
    <>
      <div className="w-full overflow-x-hidden font-default bg-base-200 sm:pt-2">
        {/* <Breakpoint /> */}
        <Navbar />
        <Hover />
        <Section />
        <Section />
        <Footer />
      </div>
    </>
  );
}

export default App;
