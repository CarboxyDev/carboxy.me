import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-primary">
          CarboxyDev
        </a>
      </div>
      <div className="flex-none">
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
    </div>
  );
};

export default Navbar;
