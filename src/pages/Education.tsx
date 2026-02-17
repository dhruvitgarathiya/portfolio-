import ld from "../assets/LD_COLLEGE_OF_ENGINEERING.jpeg";
import kg from "../assets/K.G._DHOLAKIYA-SCHOOLS.jpeg";
import bhushan from "../assets/SHREE_BHUSHAN_HIGH_SCHOOL.jpeg";

const Education = () => {
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] text-black font-sans overflow-hidden">

      {/* ================= RIGHT TEXT WALL ================= */}
      <div className="absolute top-10 right-10 text-right leading-none opacity-15 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <p
            key={`right-${i}`}
            className="text-lg md:text-2xl font-black uppercase tracking-tight"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= LEFT TEXT WALL ================= */}
      <div className="absolute top-160 left-10 leading-none opacity-15 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <p
            key={`left-${i}`}
            className="text-lg md:text-2xl font-black uppercase tracking-tight"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= PAGE TITLE ================= */}
      <div className="pt-24 pb-12 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
          Education
        </h1>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="relative max-w-5xl mx-auto px-6 pb-32">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-black"></div>

     {/* ===== LD COLLEGE ===== */}
<div className="relative mb-20">

  {/* Timeline Dot — perfectly centered on line */}
  <div className="absolute left-4 md:left-1/2 
                  -translate-x-1/2 
                  w-6 h-6 bg-black 
                  rounded-full 
                  border-4 border-[rgb(245,139,87)] 
                  z-20">
  </div>

  {/* Card Wrapper */}
  <div className="md:w-1/2 md:pr-16">

    <div className="bg-black text-[rgb(245,139,87)] border-4 border-black p-6 
      shadow-[8px_8px_0px_0px_black]
      transition-all duration-300 hover:scale-105 hover:-translate-y-2 
      hover:shadow-[16px_16px_0px_0px_black]">

      <h2 className="text-2xl md:text-3xl font-black uppercase">
        LD College of Engineering
      </h2>

      <p className="uppercase font-bold mt-2">
        Ahmedabad • 2022–2026
      </p>

      <p className="mt-3">
        Bachelor of Engineering — Information Technology
      </p>

      <p className="font-black mt-2">
        CGPA: 8.21
      </p>

      <img
        src={ld}
        alt="LD College"
        className="mt-6 w-full grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>

  </div>
</div>


 {/* ===== KG DHOLAKIYA ===== */}
<div className="relative mb-20">

  {/* Timeline Dot */}
  <div className="absolute left-4 md:left-1/2 
                  -translate-x-1/2 
                  w-6 h-6 bg-black 
                  rounded-full 
                  border-4 border-[rgb(245,139,87)] 
                  z-20">
  </div>

  {/* Card Wrapper (Right Side on Desktop) */}
  <div className="md:w-1/2 md:ml-auto md:pl-16">

    <div className="bg-black text-[rgb(245,139,87)] border-4 border-black p-6 
      shadow-[8px_8px_0px_0px_black]
      transition-all duration-300 hover:scale-105 hover:-translate-y-2 
      hover:shadow-[16px_16px_0px_0px_black]">

      <h2 className="text-2xl md:text-3xl font-black uppercase">
        Shree K.G. Dholakiya Schools
      </h2>

      <p className="uppercase font-bold mt-2">
        Rajkot • 2020–2022
      </p>

      <p className="mt-2">
        PCM — Higher Secondary Board
      </p>

      <p className="font-black mt-2">
        97.07 PR
      </p>

      <img
        src={kg}
        alt="KG Dholakiya"
        className="mt-6 w-full grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>

  </div>
</div>


 {/* ===== BHUSHAN SCHOOL ===== */}
<div className="relative mb-20">

  {/* Timeline Dot */}
  <div className="absolute left-4 md:left-1/2 
                  -translate-x-1/2 
                  w-6 h-6 bg-black 
                  rounded-full 
                  border-4 border-[rgb(245,139,87)] 
                  z-20">
  </div>

  {/* Card Wrapper (Left Side on Desktop) */}
  <div className="md:w-1/2 md:pr-16">

    <div className="bg-black text-[rgb(245,139,87)] border-4 border-black p-6 
      shadow-[8px_8px_0px_0px_black]
      transition-all duration-300 hover:scale-105 hover:-translate-y-2 
      hover:shadow-[16px_16px_0px_0px_black]">

      <h2 className="text-2xl md:text-3xl font-black uppercase">
        Shree Bhushan Schools
      </h2>

      <p className="uppercase font-bold mt-2">
        Rajkot • 2018–2020
      </p>

      <p className="mt-2">
        High School Board — GSHSEB
      </p>

      <p className="font-black mt-2">
        99.81 PR
      </p>

      <img
        src={bhushan}
        alt="Bhushan School"
        className="mt-6 w-full grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>

  </div>
</div>
</div>
</div>
  );
};

export default Education;
