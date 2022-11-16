const Navbar = () => {
  return (
    <div className="min-h-16 h-16 w-full bg-transparent">
      <nav className="flex h-full items-center py-3 px-4">
        <div>
          <h1 className="font-righteuos text-xl font-bold text-primary">
            CarboxyDev
          </h1>
        </div>
        <div className="flex grow flex-row items-center justify-end">
          <div className="flex flex-row font-nunito text-slate-200 ">
            <div className="btn-ghost btn text-[16px] font-normal normal-case">
              Home
            </div>
            <div className="btn-ghost btn text-[16px] font-normal normal-case">
              About
            </div>
            <div className="btn-ghost btn text-[16px] font-normal normal-case">
              Work
            </div>
            <div className="btn-ghost btn text-[16px] font-normal normal-case">
              Contact
            </div>
          </div>
          <div className="pl-8">
            <img
              className="h-10 w-10"
              src="/icon-github.svg"
              alt="icon-github"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
