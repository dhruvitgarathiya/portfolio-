import h1 from "../assets/Home_page_1.jpeg";
import h2 from "../assets/Home_page_2.jpeg";

const Home = () => {
  return (
    <div className="bg-[#F58B57] font-sans select-none text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden">

        {/* LEFT WALL */}
        <div className="absolute top-10 left-10 leading-none">
          {[...Array(26)].map((_, i) => (
            <p
              key={i}
              className="text-base md:text-xl font-black uppercase tracking-tight"
            >
              THE LIFE OF DHRUVIT
            </p>
          ))}
        </div>

        {/* RIGHT WALL */}
        <div className="absolute top-10 right-10 text-right leading-none">
          {[...Array(18)].map((_, i) => (
            <p
              key={i}
              className="text-base md:text-xl font-black uppercase tracking-tight"
            >
              THE LIFE OF DHRUVIT
            </p>
          ))}
        </div>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
          <h1
            className="text-7xl md:text-[150px] 
    font-black uppercase tracking-tight leading-[0.8]
    transition-all duration-500 ease-out
    px-6 py-4
    border-4 border-transparent
    inline-block

    hover:bg-black
    hover:text-[#F58B57]
    hover:border-[#F58B57]
    hover:scale-105
    hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
    hover:-translate-y-2
    hover:tracking-wide
    hover:rotate-1"
          >
            DHRUVIT <br /> GARATHIYA
          </h1>

          <p className="mt-6 text-base md:text-2xl font-black tracking-[0.4em] uppercase">
            SOFTWARE ENGINEER
          </p>
        </div>

        {/* TOP RIGHT IMAGE */}
        <div className="absolute top-32 right-32 w-40 md:w-56 rotate-3 z-30
  transition-all duration-500 ease-out
  hover:scale-110
  hover:rotate-6
  hover:-translate-y-4">
          <img
            src={h2}
            alt="Secondary"
            className="w-full 
      grayscale 
      contrast-125 
      shadow-2xl
      transition-all duration-500
      hover:grayscale-0
      hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* BOTTOM LEFT IMAGE */}
        <div className="absolute bottom-20 left-20 w-44 md:w-72 -rotate-3 z-30
  transition-all duration-500 ease-out
  hover:scale-110
  hover:-rotate-6
  hover:-translate-y-4">
          <img
            src={h1}
            alt="Main"
            className="w-full 
      grayscale 
      contrast-125 
      shadow-[0_30px_80px_rgba(0,0,0,0.35)]
      transition-all duration-500
      hover:grayscale-0
      hover:shadow-[0_50px_120px_rgba(0,0,0,0.6)]"
          />
        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-32 px-8 md:px-16 flex justify-center">
  <div className="border-4 border-black 
    bg-black 
    text-[#F58B57] 
    p-10 
    max-w-4xl 
    transition-all duration-300 ease-out
    hover:scale-105
hover:shadow-[20px_20px_0px_0px_black]
hover:-translate-y-3
hover:border-[#F58B57]
    shadow-[8px_8px_0px_0px_black]">

    <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight text-[#F58B57]">
      About Me
    </h1>

    <p className="text-lg md:text-xl leading-relaxed font-medium text-[#F58B57]">
      I am a <span className="font-black">Software Engineer</span> passionate about 
      building systems that scale efficiently and reliably.
      <br /><br />
      I am deeply interested in writing clean, maintainable code, 
      designing robust <span className="font-black">database architectures</span>, 
      and developing intelligent <span className="font-black">AI systems</span> 
      that solve real-world problems.
    </p>

  </div>
</section>

    </div>
  );
};

export default Home;
