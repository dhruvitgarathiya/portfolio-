import ld from "../assets/LD_COLLEGE_OF_ENGINEERING.jpeg";
import kg from "../assets/K.G._DHOLAKIYA-SCHOOLS.jpeg";
import bhushan from "../assets/SHREE_BHUSHAN_HIGH_SCHOOL.jpeg";

const Education = () => {
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] text-black font-sans overflow-x-hidden">

      {/* ================= BACKGROUND TEXT ================= */}
      {/* Changed: Enabled on mobile but made very small/subtle to keep the vibe without breaking width */}
      <div className="absolute top-10 left-4 md:left-10 leading-none opacity-10 md:opacity-15 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <p key={`bg-left-${i}`} className="text-xs md:text-2xl font-black uppercase tracking-tight whitespace-nowrap">
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= PAGE TITLE ================= */}
      <div className="pt-20 sm:pt-24 pb-10 sm:pb-12 text-center relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tight">
          Education
        </h1>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pb-24 sm:pb-32">

        {/* Vertical Line: Moves to left (left-6) on mobile, center (md:left-1/2) on desktop */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-black"></div>

        {/* ===== LD COLLEGE ===== */}
        <div className="relative mb-12 md:mb-20 flex flex-col md:flex-row">
          {/* Dot */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 
                          w-5 h-5 bg-black 
                          rounded-full border-4 border-[rgb(245,139,87)] z-20">
          </div>

          <div className="ml-12 md:ml-0 md:w-1/2 md:pr-16">
            <div className="bg-black text-[rgb(245,139,87)] border-4 border-black 
  p-5 sm:p-6
  shadow-[8px_8px_0px_0px_black]
  transition-all duration-300 
  hover:scale-105 hover:-translate-y-2 
  hover:shadow-[12px_12px_0px_0px_black] md:hover:shadow-[16px_16px_0px_0px_black]
  active:scale-105 active:-translate-y-2 active:shadow-[12px_12px_0px_0px_black]">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase">
                LD College of Engineering
              </h2>
              <p className="uppercase font-bold mt-2 text-xs sm:text-base">
                Ahmedabad • 2022–2026
              </p>
              <p className="mt-3 text-sm sm:text-base">
                Bachelor of Engineering — IT
              </p>
              <p className="font-black mt-2 text-sm">
                CGPA: 8.21
              </p>
              <img
                src={ld}
                alt="LD College"
                className="mt-6 w-full grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-500 border-2 border-[rgb(245,139,87)]"
              />
            </div>
          </div>
        </div>

        {/* ===== KG DHOLAKIYA ===== */}
        <div className="relative mb-12 md:mb-20 flex flex-col md:flex-row">
          {/* Dot */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 
                          w-5 h-5 bg-black 
                          rounded-full border-4 border-[rgb(245,139,87)] z-20">
          </div>

          {/* md:ml-auto pushes this to the right side on desktop */}
          <div className="ml-12 md:ml-auto md:w-1/2 md:pl-16">
            <div className="bg-black text-[rgb(245,139,87)] border-4 border-black 
  p-5 sm:p-6
  shadow-[8px_8px_0px_0px_black]
  transition-all duration-300 
  hover:scale-105 hover:-translate-y-2 
  hover:shadow-[12px_12px_0px_0px_black] md:hover:shadow-[16px_16px_0px_0px_black]
  active:scale-105 active:-translate-y-2 active:shadow-[12px_12px_0px_0px_black]">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase">
                Shree K.G. Dholakiya
              </h2>
              <p className="uppercase font-bold mt-2 text-xs sm:text-base">
                Rajkot • 2020–2022
              </p>
              <p className="mt-2 text-sm sm:text-base">
                PCM — HSC
              </p>
              <p className="font-black mt-2 text-sm">
                97.07 PR
              </p>
              <img
                src={kg}
                alt="KG Dholakiya"
                className="mt-6 w-full grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-500 border-2 border-[rgb(245,139,87)]"
              />
            </div>
          </div>
        </div>

        {/* ===== BHUSHAN SCHOOL ===== */}
        <div className="relative mb-12 md:mb-20 flex flex-col md:flex-row">
          {/* Dot */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 
                          w-5 h-5 bg-black 
                          rounded-full border-4 border-[rgb(245,139,87)] z-20">
          </div>

          <div className="ml-12 md:ml-0 md:w-1/2 md:pr-16">
            <div className="bg-black text-[rgb(245,139,87)] border-4 border-black 
  p-5 sm:p-6
  shadow-[8px_8px_0px_0px_black]
  transition-all duration-300 
  hover:scale-105 hover:-translate-y-2 
  hover:shadow-[12px_12px_0px_0px_black] md:hover:shadow-[16px_16px_0px_0px_black]
  active:scale-105 active:-translate-y-2 active:shadow-[12px_12px_0px_0px_black]">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase">
                Shree Bhushan Schools
              </h2>
              <p className="uppercase font-bold mt-2 text-xs sm:text-base">
                Rajkot • 2018–2020
              </p>
              <p className="mt-2 text-sm sm:text-base">
                High School — GSHSEB
              </p>
              <p className="font-black mt-2 text-sm">
                99.81 PR
              </p>
              <img
                src={bhushan}
                alt="Bhushan School"
                className="mt-6 w-full grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-500 border-2 border-[rgb(245,139,87)]"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;