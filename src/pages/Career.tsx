const Career = () => {
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] text-black overflow-hidden">

      {/* ================= LEFT TEXT WALL ================= */}
      <div className="absolute top-90 left-0 leading-none opacity-20 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <p
            key={i}
            className="text-lg md:text-2xl font-black uppercase tracking-tight"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= RIGHT TEXT WALL ================= */}
      <div className="absolute top-2 right-0 text-right leading-none opacity-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <p
            key={i}
            className="text-lg md:text-2xl font-black uppercase tracking-tight"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= PAGE TITLE ================= */}
      <div className="pt-28 pb-16 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
          Career
        </h1>
      </div>

      {/* ================= CAREER CARD ================= */}
      <div className="relative z-10 flex justify-center px-6 pb-32">

        <div className="max-w-3xl w-full bg-black text-[rgb(245,139,87)] 
          border-4 border-black p-10 
          shadow-[12px_12px_0px_0px_black]
          transition-all duration-300 
          hover:scale-105 hover:-translate-y-3 
          hover:shadow-[20px_20px_0px_0px_black]">

          {/* Company */}
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Argusoft
          </h2>

          {/* Role */}
          <p className="mt-4 text-xl md:text-2xl font-bold uppercase">
            Programmer Analyst / Software Engineer
          </p>

          {/* Duration */}
          <p className="mt-4 font-bold">
            2026 – Present
          </p>

          {/* Location */}
          <p className="mt-2">
            Gandhinagar, Gujarat
          </p>

          {/* Decorative Divider */}
          <div className="mt-8 h-1 w-full bg-[rgb(245,139,87)]"></div>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed">
            Building scalable software systems, writing clean and efficient 
            production-grade code, and contributing to high-performance 
            backend architectures and modern application development.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Career;
