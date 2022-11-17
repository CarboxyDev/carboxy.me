import Link from "next/link";

const Navbar = () => {
  return (
    <div className="min-h-16 h-16 w-full bg-transparent">
      <nav className="flex h-full items-center py-3 px-4">
        <div>
          <a className="font-righteuos text-xl font-bold text-primary btn btn-ghost normal-case">
            CarboxyDev
          </a>
        </div>
        <div className="flex grow flex-row items-center justify-end">
          <div className="flex flex-row font-nunito text-slate-200 ">
            <Link href="/">
              <div className="btn-ghost btn text-[16px] font-normal normal-case">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="btn-ghost btn text-[16px] font-normal normal-case">
                About
              </div>
            </Link>
            <Link href="/work">
              <div className="btn-ghost btn text-[16px] font-normal normal-case">
                Work
              </div>
            </Link>
            <Link href="/contact">
              <div className="btn-ghost btn text-[16px] font-normal normal-case">
                Contact
              </div>
            </Link>
          </div>
          <div className="pl-8">
            <Link href="/github">
              <img
                className="h-10 w-10"
                src="/icon-github.svg"
                alt="icon-github"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
