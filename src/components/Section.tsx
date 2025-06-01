function Section() {
  return (
    <section className="w-full min-h-[80vh] overflow-hidden p-4 bg-base-300 font-mono outline outline-white/10">
      {/* Container */}
      <div className="flex flex-col min-h-full md:flex-row justify-center items-center gap-6 md:gap-10 p-6 bg-base-200 outline outline-white/20 text-emerald-400 rounded-xl">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-justify text-primary-content">
            &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi, tempore repellat! Nemo rem repellat delectus doloribus
            explicabo commodi quisquam dolores eius, libero repellendus alias
            aut facilis veniam quae velit.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://picsum.photos/id/11/360/240"
            alt="random img"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-3xl shadow-none outline outline-base-content/20 hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:shadow-noblur"
          />
        </div>
      </div>
    </section>
  );
}

export default Section;
