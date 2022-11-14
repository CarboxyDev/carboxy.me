import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-primary">
            CarboxyDev
          </a>
        </div>
        <div className="hidden flex-none sm:flex ">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link legacyBehavior href="/">
                Home
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                About
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/Work">
                Work
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-none sm:hidden">
          <div className="btn btn-ghost">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
