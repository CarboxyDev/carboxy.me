const Hero = () => {
    return (
      <>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold font-quicksand text-slate-50">I build websites</h1>
              <div className="py-12 text-2xl text-[#A1A1A1] font-light font-nunito">
                <p>Hey. I'm CarboxyDev</p>
                <p className="p-1">Full stack & UI/UX Developer</p>
              </div>
              <button className="btn btn-primary">About Me</button>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Hero;