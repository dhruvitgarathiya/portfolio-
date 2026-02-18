import h1 from "../assets/Home_page_1.jpeg";
import h2 from "../assets/Home_page_2.jpeg";

const Home = () => {
  return (
    <>
      <style>{`
        /* Mobile name animation */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp2 {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glitchLeft {
          0%,100% { clip-path: inset(0 0 95% 0); transform: translate(-4px,0); }
          20%      { clip-path: inset(30% 0 50% 0); transform: translate(4px,0); }
          40%      { clip-path: inset(60% 0 20% 0); transform: translate(-2px,0); }
          60%      { clip-path: inset(10% 0 80% 0); transform: translate(3px,0); }
          80%      { clip-path: inset(80% 0 5%  0); transform: translate(-3px,0); }
        }
        @keyframes glitchRight {
          0%,100% { clip-path: inset(0 0 95% 0); transform: translate(4px,0); color:#F58B57; }
          20%      { clip-path: inset(50% 0 30% 0); transform: translate(-4px,0); color:#fff; }
          40%      { clip-path: inset(20% 0 60% 0); transform: translate(2px,0); color:#F58B57; }
          60%      { clip-path: inset(70% 0 10% 0); transform: translate(-3px,0); color:#fff; }
          80%      { clip-path: inset(5%  0 80% 0); transform: translate(3px,0); color:#F58B57; }
        }
        @keyframes scanline {
          0%   { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes bgScrollDown {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .mobile-name-wrap {
          animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) both;
          animation-delay: 0.1s;
        }
        .mobile-sub-wrap {
          animation: fadeSlideUp2 0.9s cubic-bezier(.16,1,.3,1) both;
          animation-delay: 0.4s;
        }

        .mobile-name {
          position: relative;
          display: inline-block;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .mobile-name::before,
        .mobile-name::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          font-size: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          text-transform: uppercase;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.1s;
        }
        .mobile-name:active::before,
        .mobile-name:hover::before {
          opacity: 1;
          animation: glitchLeft 0.4s steps(1) infinite;
          color: #000;
        }
        .mobile-name:active::after,
        .mobile-name:hover::after {
          opacity: 1;
          animation: glitchRight 0.4s steps(1) infinite;
          color: #F58B57;
        }

        /* Scanline effect on active */
        .mobile-name-box {
          position: relative;
          overflow: hidden;
          transition: background 0.4s, color 0.4s, border-color 0.4s, transform 0.4s, box-shadow 0.4s;
          border: 4px solid transparent;
          padding: 12px 16px;
        }
        .mobile-name-box:active,
        .mobile-name-box:hover {
          background: #000;
          color: #F58B57;
          border-color: #F58B57;
          transform: scale(1.04) rotate(1deg) translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.55);
        }
        .mobile-name-box::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 3px;
          background: rgba(245,139,87,0.6);
          top: -10%;
          animation: scanline 2.5s linear infinite;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .mobile-name-box:active::after,
        .mobile-name-box:hover::after {
          opacity: 1;
        }

        /* Scrolling background text */
        .bg-scroll-track {
          animation: bgScrollDown 18s linear infinite;
        }
      `}</style>

      <div className="bg-[#F58B57] font-sans select-none text-black overflow-x-hidden min-h-screen">

        {/* ── MOBILE HERO ── */}
        <section className="md:hidden relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-6">

          {/* SCROLLING BACKGROUND TEXT — both columns */}
          {/* Left column */}
          <div className="absolute left-0 top-0 bottom-0 w-[48%] overflow-hidden pointer-events-none z-0">
            <div className="bg-scroll-track leading-none">
              {[...Array(60)].map((_, i) => (
                <p key={`l-${i}`} className="text-[9px] font-black uppercase tracking-tight opacity-20 whitespace-nowrap">
                  THE LIFE OF DHRUVIT
                </p>
              ))}
            </div>
          </div>
          {/* Right column */}
          <div className="absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden pointer-events-none z-0 text-right">
            <div className="bg-scroll-track leading-none">
              {[...Array(60)].map((_, i) => (
                <p key={`r-${i}`} className="text-[9px] font-black uppercase tracking-tight opacity-20 whitespace-nowrap">
                  THE LIFE OF DHRUVIT
                </p>
              ))}
            </div>
          </div>

          {/* CENTER NAME */}
          <div className="relative z-20 text-center px-2">

            <div className="mobile-name-wrap">
              <div className="mobile-name-box inline-block">
                <h1
                  className="mobile-name text-[13.5vw] font-black uppercase tracking-tight leading-[0.85]"
                  data-text="DHRUVIT GARATHIYA"
                >
                  DHRUVIT <br /> GARATHIYA
                </h1>
              </div>
            </div>

            {/* Thick divider line */}
            <div className="w-full h-[4px] bg-black mt-4 mb-4" />

            <div className="mobile-sub-wrap">
              <p className="text-[10px] font-black tracking-[0.45em] uppercase">
                SOFTWARE ENGINEER
              </p>
            </div>

          </div>

          {/* TWO PHOTOS — below name, filling the space, small & tasteful */}
          <div className="relative z-20 flex flex-row gap-4 justify-center items-end mt-10 px-6 w-full">

            {/* h2 — slight left tilt */}
            <div
              className="-rotate-3 transition-all duration-500 ease-out
                hover:scale-110 hover:-rotate-6 hover:-translate-y-3
                active:scale-110 active:-rotate-6 active:-translate-y-3"
              style={{ width: '42%' }}
            >
              <img
                src={h2}
                alt="Secondary"
                className="w-full grayscale contrast-125
                  border-4 border-black
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.85)]
                  transition-all duration-500
                  hover:grayscale-0 active:grayscale-0
                  hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* h1 — slight right tilt, slightly larger */}
            <div
              className="rotate-3 transition-all duration-500 ease-out
                hover:scale-110 hover:rotate-6 hover:-translate-y-3
                active:scale-110 active:rotate-6 active:-translate-y-3"
              style={{ width: '46%' }}
            >
              <img
                src={h1}
                alt="Main"
                className="w-full grayscale contrast-125
                  border-4 border-black
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.85)]
                  transition-all duration-500
                  hover:grayscale-0 active:grayscale-0
                  hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.9)]"
              />
            </div>

          </div>

        </section>

        {/* ── DESKTOP HERO (completely unchanged) ── */}
        <section className="hidden md:block relative min-h-screen overflow-hidden">

          {/* LEFT WALL */}
          <div className="absolute top-10 left-10 leading-none pointer-events-none z-0">
            {[...Array(26)].map((_, i) => (
              <p key={`dl-${i}`} className="text-xl font-black uppercase tracking-tight whitespace-nowrap">
                THE LIFE OF DHRUVIT
              </p>
            ))}
          </div>

          {/* RIGHT WALL */}
          <div className="absolute top-10 right-10 text-right leading-none pointer-events-none z-0">
            {[...Array(18)].map((_, i) => (
              <p key={`dr-${i}`} className="text-xl font-black uppercase tracking-tight whitespace-nowrap">
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
                px-6 py-4 border-4 border-transparent inline-block
                hover:bg-black hover:text-[#F58B57] hover:border-[#F58B57]
                hover:scale-105 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                hover:-translate-y-2 hover:tracking-wide hover:rotate-1"
            >
              DHRUVIT <br /> GARATHIYA
            </h1>
            <p className="mt-6 text-base md:text-2xl font-black tracking-[0.4em] uppercase">
              SOFTWARE ENGINEER
            </p>
          </div>

          {/* TOP RIGHT IMAGE */}
          <div
            className="absolute top-32 right-32 w-40 md:w-56 rotate-3 z-30
              transition-all duration-500 ease-out
              hover:scale-110 hover:rotate-6 hover:-translate-y-4"
          >
            <img
              src={h2}
              alt="Secondary"
              className="w-full grayscale contrast-125 shadow-2xl
                transition-all duration-500
                hover:grayscale-0 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* BOTTOM LEFT IMAGE */}
          <div
            className="absolute bottom-20 left-20 w-44 md:w-72 -rotate-3 z-30
              transition-all duration-500 ease-out
              hover:scale-110 hover:-rotate-6 hover:-translate-y-4"
          >
            <img
              src={h1}
              alt="Main"
              className="w-full grayscale contrast-125
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                transition-all duration-500
                hover:grayscale-0 hover:shadow-[0_50px_120px_rgba(0,0,0,0.6)]"
            />
          </div>

        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="pt-4 pb-20 md:py-32 px-6 md:px-16 flex justify-center">
          <div
            className="border-4 border-black bg-black text-[#F58B57] p-6 md:p-10 max-w-4xl w-full
              shadow-[8px_8px_0px_0px_black]
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-[20px_20px_0px_0px_black]
              hover:-translate-y-3 hover:border-[#F58B57]"
          >
            <h1 className="text-3xl md:text-6xl font-black uppercase mb-6 tracking-tight text-[#F58B57]">
              About Me
            </h1>
            <p className="text-base md:text-xl leading-relaxed font-medium text-[#F58B57]">
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
    </>
  );
};

export default Home;