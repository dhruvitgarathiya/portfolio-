const Career = () => {
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] text-black overflow-hidden">

      {/* ================= LEFT TEXT WALL ================= */}
      {/* Reduced font size and count for mobile to prevent horizontal overflow */}
      <div className="absolute top-32 md:top-90 left-0 leading-none opacity-10 md:opacity-20 pointer-events-none px-2">
        {[...Array(15)].map((_, i) => (
          <p
            key={`left-${i}`}
            className="text-xs sm:text-base md:text-2xl font-black uppercase tracking-tight whitespace-nowrap"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= RIGHT TEXT WALL ================= */}
      <div className="absolute top-10 md:top-2 right-0 text-right leading-none opacity-10 md:opacity-20 pointer-events-none px-2">
        {[...Array(10)].map((_, i) => (
          <p
            key={`right-${i}`}
            className="text-xs sm:text-base md:text-2xl font-black uppercase tracking-tight whitespace-nowrap"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= PAGE TITLE ================= */}
      <div className="pt-20 md:pt-28 pb-12 md:pb-16 text-center relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tight">
          Career
        </h1>
      </div>

      {/* ================= CAREER CARD ================= */}
      <div className="relative z-10 flex justify-center items-center px-4 sm:px-6 pb-20 md:pb-32">
        <div
          className="
  max-w-3xl w-full
  bg-[rgb(245,139,87)]
  text-black
  border-4 border-black
  p-6 sm:p-8 md:p-10
  transition-all duration-500
  group
  hover:bg-black
  shadow-[10px_10px_0px_0px_black] md:shadow-[0px_0px_0px_0px_black] 
  hover:shadow-[15px_15px_0px_0px_black] md:hover:shadow-[20px_20px_0px_0px_black]
  active:bg-black active:shadow-[15px_15px_0px_0px_black]
"
        >
          {/* Company */}
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-black uppercase transition-all duration-500 group-hover:text-[rgb(245,139,87)] group-active:text-[rgb(245,139,87)]"
          >
            Argusoft
          </h2>

          {/* Role */}
          <p
            className="mt-4 text-base sm:text-xl md:text-2xl font-bold uppercase transition-all duration-500 group-hover:text-[rgb(245,139,87)] group-active:text-[rgb(245,139,87)]"
          >
            Programmer Analyst
          </p>

          {/* Duration */}
          <p
           className="mt-2 md:mt-4 font-bold text-xs sm:text-base transition-all duration-500 group-hover:text-[rgb(245,139,87)] group-active:text-[rgb(245,139,87)]"
          >
            2026 – Present
          </p>

          {/* Location */}
          <p
            className="mt-1 text-xs sm:text-base transition-all duration-500 group-hover:text-[rgb(245,139,87)] group-active:text-[rgb(245,139,87)]"
          >
            Gandhinagar, Gujarat
          </p>

          {/* Divider */}
          <div
            className="mt-6 md:mt-8 h-1 w-full bg-black transition-all duration-500 group-hover:bg-[rgb(245,139,87)] group-active:bg-[rgb(245,139,87)]"
          ></div>

          {/* Description */}
          <p
            className="mt-6 text-sm sm:text-lg leading-relaxed font-bold transition-all duration-500 group-hover:text-[rgb(245,139,87)] group-active:text-[rgb(245,139,87)]"
          >
            Building scalable software systems, writing clean production-grade code, 
            and contributing to high-performance backend architectures.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Career;