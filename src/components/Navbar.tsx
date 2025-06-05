function Navbar () {
  return (
        <nav className="navbar z-3 bg-base-100 shadow-sm mx-auto rounded-b-2xl sm:rounded-2xl sm:max-w-2/3 px-3">
          {" "}
          {/*navbar*/}
          <div className="navbar-start">
            {" "}
            {/*navbar logo*/}
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
          <div className="navbar-end">
            {" "}
            {/*navbar menu*/}
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
  );
}
export default Navbar;