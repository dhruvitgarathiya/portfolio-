import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] overflow-hidden overflow-x-hidden">

      {/* ================= BACKGROUND TEXT WALLS ================= */}
      {/* Enabled on mobile with smaller text and whitespace control to prevent layout breaking */}
      <div className="absolute top-10 left-0 leading-none opacity-10 md:opacity-20 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <p
            key={`left-${i}`}
            className="text-xs sm:text-base md:text-2xl font-black uppercase tracking-tight whitespace-nowrap"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      <div className="absolute top-10 right-0 text-right leading-none opacity-10 md:opacity-20 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <p
            key={`right-${i}`}
            className="text-xs sm:text-base md:text-2xl font-black uppercase tracking-tight whitespace-nowrap"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* TITLE */}
        <div className="pt-20 md:pt-28 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tight">
            Connect With Me
          </h1>
        </div>

        {/* CONTACT ITEMS */}
        {/* Added flex-col on small screens so expanded buttons don't collide */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-12 mt-16 md:mt-32 px-6 pb-24 sm:pb-32">

          {/* ===== GMAIL ===== */}
          <a
            href="mailto:dhruvitgarthiya@gmail.com"
            className="group relative flex items-center justify-center 
            w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black 
            transition-all duration-500 ease-in-out
            /* Mobile expansion is slightly narrower to stay on screen */
            hover:w-64 sm:hover:w-72 hover:rounded-xl
            shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] md:shadow-none
            hover:shadow-[12px_12px_0px_0px_black] md:hover:shadow-[15px_15px_0px_0px_black]"
          >
            <FaEnvelope
              className="text-[rgb(245,139,87)] text-2xl sm:text-3xl 
              transition-all duration-300 group-hover:opacity-0"
            />

            <span
              className="absolute opacity-0 
              text-[rgb(245,139,87)] font-black uppercase text-lg sm:text-xl
              transition-all duration-300 
              group-hover:opacity-100"
            >
              Gmail
            </span>
          </a>

          {/* ===== LINKEDIN ===== */}
          <a
            href="https://www.linkedin.com/in/dhruvit-garathiya-gec-ldce-it-dte/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center 
            w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black 
            transition-all duration-500 ease-in-out
            hover:w-64 sm:hover:w-72 hover:rounded-xl
            shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] md:shadow-none
            hover:shadow-[12px_12px_0px_0px_black] md:hover:shadow-[15px_15px_0px_0px_black]"
          >
            <FaLinkedin
              className="text-[rgb(245,139,87)] text-2xl sm:text-3xl 
              transition-all duration-300 group-hover:opacity-0"
            />

            <span
              className="absolute opacity-0 
              text-[rgb(245,139,87)] font-black uppercase text-lg sm:text-xl
              transition-all duration-300 
              group-hover:opacity-100"
            >
              LinkedIn
            </span>
          </a>

          {/* ===== GITHUB ===== */}
          <a
            href="https://github.com/dhruvitgarathiya"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center 
            w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black 
            transition-all duration-500 ease-in-out
            hover:w-64 sm:hover:w-72 hover:rounded-xl
            shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] md:shadow-none
            hover:shadow-[12px_12px_0px_0px_black] md:hover:shadow-[15px_15px_0px_0px_black]"
          >
            <FaGithub
              className="text-[rgb(245,139,87)] text-2xl sm:text-3xl 
              transition-all duration-300 group-hover:opacity-0"
            />

            <span
              className="absolute opacity-0 
              text-[rgb(245,139,87)] font-black uppercase text-lg sm:text-xl
              transition-all duration-300 
              group-hover:opacity-100"
            >
              GitHub
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;