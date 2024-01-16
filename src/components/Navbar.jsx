const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full shadow-sm px-36">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Book</a>
              </li>
              <li>
                <a>Story</a>
                <ul className="p-2">
                  <li>
                    <a>Fiction</a>
                  </li>
                  <li>
                    <a>Non Fiction</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Novel</a>
              </li>
            </ul>
          </div>
          <a className="text-xl btn btn-ghost" href="/">
            Perpustakaan
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a>Book</a>
            </li>
            <li>
              <details>
                <summary>Story</summary>
                <ul className="p-2">
                  <li>
                    <a>Fiction</a>
                  </li>
                  <li>
                    <a>Non Fiction</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Novel</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
