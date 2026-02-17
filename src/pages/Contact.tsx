import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] overflow-hidden">

      {/* ================= LEFT SYMPHONY WALL ================= */}
      <div className="absolute top-10 left-0 leading-none opacity-20 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <p
            key={`left-${i}`}
            className="text-lg md:text-2xl font-black uppercase tracking-tight"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= RIGHT SYMPHONY WALL ================= */}
      <div className="absolute top-10 right-0 text-right leading-none opacity-20 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <p
            key={`right-${i}`}
            className="text-lg md:text-2xl font-black uppercase tracking-tight"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* TITLE */}
        <div className="pt-28 text-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
            Connect With Me
          </h1>
        </div>

        {/* CONTACT ITEMS */}
        <div className="flex justify-center gap-12 mt-32 flex-wrap px-6 pb-32">

          {/* ===== GMAIL ===== */}
          <a
            href="mailto:dhruvitgarthiya@gmail.com"
            className="group relative flex items-center justify-center 
            w-24 h-24 rounded-full bg-black 
            transition-all duration-500 ease-in-out
            hover:w-72 hover:rounded-xl
            hover:shadow-[15px_15px_0px_0px_black]"
          >
            <FaEnvelope className="text-[rgb(245,139,87)] text-3xl 
              transition-all duration-300 group-hover:opacity-0" />

            <span className="absolute opacity-0 
              text-[rgb(245,139,87)] font-black uppercase text-xl
              transition-all duration-300 
              group-hover:opacity-100">
              Gmail
            </span>
          </a>

          {/* ===== LINKEDIN ===== */}
          <a
            href="https://www.linkedin.com/in/dhruvit-garathiya-gec-ldce-it-dte/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center 
            w-24 h-24 rounded-full bg-black 
            transition-all duration-500 ease-in-out
            hover:w-72 hover:rounded-xl
            hover:shadow-[15px_15px_0px_0px_black]"
          >
            <FaLinkedin className="text-[rgb(245,139,87)] text-3xl 
              transition-all duration-300 group-hover:opacity-0" />

            <span className="absolute opacity-0 
              text-[rgb(245,139,87)] font-black uppercase text-xl
              transition-all duration-300 
              group-hover:opacity-100">
              LinkedIn
            </span>
          </a>

          {/* ===== GITHUB ===== */}
          <a
            href="https://github.com/dhruvitgarathiya"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center 
            w-24 h-24 rounded-full bg-black 
            transition-all duration-500 ease-in-out
            hover:w-72 hover:rounded-xl
            hover:shadow-[15px_15px_0px_0px_black]"
          >
            <FaGithub className="text-[rgb(245,139,87)] text-3xl 
              transition-all duration-300 group-hover:opacity-0" />

            <span className="absolute opacity-0 
              text-[rgb(245,139,87)] font-black uppercase text-xl
              transition-all duration-300 
              group-hover:opacity-100">
              GitHub
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
