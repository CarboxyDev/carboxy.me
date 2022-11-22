const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen grid lg:hidden">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold font-quicksand text-slate-50">
              I build websites
            </h1>
            <div className="py-12 text-2xl text-[#A1A1A1] font-light font-nunito">
              <p>Hey. I'm CarboxyDev</p>
              <p className="pt-1">Full stack & UI/UX Developer</p>
            </div>
            <button className="btn btn-primary">About Me</button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen hidden lg:grid">
        <div className="flex flex-row w-full h-full">
          <div className="hero-content flex-1">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold font-quicksand text-slate-50">
                I build websites
              </h1>
              <div className="py-12 text-2xl text-[#A1A1A1] font-light font-nunito">
                <p>Hey. I'm CarboxyDev</p>
                <p className="pt-1">Full stack & UI/UX Developer</p>
                <p className="pt-1 text-red-500">Website under construction</p>
              </div>
              <button className="btn btn-primary">About Me</button>
            </div>
          </div>
          <div className="hero-graphic flex-1 flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
