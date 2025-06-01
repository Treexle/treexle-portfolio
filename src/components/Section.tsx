function Section () {
  return (
        <section className="w-full h-120 p-3 bg-base-300 font-mono outline outline-white/10">
          {" "}
          {/*mbah abu abu*/}
          <div className="size-full flex justify-center items-center py-5 px-10 bg-base-200 outline outline-white/20 text-emerald-400 rounded-xl">
            {" "}
            {/*bapak*/}
            <div className="w-2xl flex-col items-left">
              {" "}
              {/*anak kiri buat text */}
              <h2 className="text-emerald-400 text-5xl font-bold mb-2">
                About Me
              </h2>
              <p className="w-100 mt-8 text-justify text-primary-content">
                {" "}
                &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sequi, tempore repellat! Nemo rem repellat delectus doloribus
                explicabo commodi quisquam dolores eius, libero repellendus
                alias aut facilis veniam quae velit.
              </p>
            </div>
            <div>
              {" "}
              {/*anak kanan buat gambar*/}
              <img
                src="https://picsum.photos/id/11/360/240"
                alt="random img"
                className="rounded-3xl shadow-noblur outline outline-base-content/20"
              />
            </div>
          </div>
        </section>
  );
}
export default Section;