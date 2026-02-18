const projects = [
  {
    title: "AI Document Digitizer API",
    description:
      "A document digitization backend API that converts scanned docs and images into structured data using OCR & AI-driven processing.",
    tech: ["Node.js", "Express", "OCR", "AI"],
    github: "https://github.com/dhruvitgarathiya/AI-Document-Digitizer-API",
    live: "",
  },
  {
    title: "Grocery App",
    description:
      "A full-stack grocery web application featuring product browsing, cart management, user auth, and backend API support.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/dhruvitgarathiya/grocery-app",
    live: "",
  },
  {
    title: "NEUROZEN",
    description:
      "A wellness application demonstrating advanced features like Google-fit API and Sentiment-analysis models.",
    tech: ["React", "Tailwind", "Google-fit", "Sentiment-analysis"],
    github: "https://github.com/dhruvitgarathiya/NEUROZEN",
    live: "",
  },
  {
    title: "TextTamer",
    description:
      "An intelligent text processing project to tame and manipulate natural language input with custom transformations.",
    tech: ["JavaScript", "Node.js", "NLP"],
    github: "https://github.com/dhruvitgarathiya/TextTamer",
    live: "",
  },
];

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] overflow-hidden text-black py-16 md:py-32 px-4 sm:px-8">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-10 md:mb-20 px-2">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight">
          Projects
        </h1>
        <p className="mt-2 md:mt-4 text-base sm:text-xl font-bold uppercase">
          Things I’ve Built
        </p>
      </div>

      {/* ================= PROJECT GRID ================= */}
      {/* Changed to 1 col for mobile, 2 for tablet, 3 for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div
             className="
  group border-4 border-black p-6 sm:p-8 h-full
  transition-all duration-500
  shadow-[8px_8px_0px_0px_black] md:shadow-[15px_15px_0px_0px_black]
  hover:bg-black hover:-translate-y-2 md:hover:-translate-y-4
  hover:shadow-[15px_15px_0px_0px_black] md:hover:shadow-[30px_30px_0px_0px_black]
  active:bg-black active:-translate-y-2 active:shadow-[15px_15px_0px_0px_black]
  cursor-pointer flex flex-col
"
            >
              {/* TITLE */}
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-black uppercase transition-all duration-500 group-hover:text-[rgb(245,139,87)] group-active:text-[rgb(245,139,87)]"
              >
                {project.title}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="mt-4 text-sm sm:text-base font-semibold transition-all duration-500 group-hover:text-[rgb(245,139,87)] group-active:text-[rgb(245,139,87)] flex-grow"
              >
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
  border-2 border-black px-2 py-1 text-[10px] sm:text-xs font-bold
  transition-all duration-500
  group-hover:border-[rgb(245,139,87)] group-hover:text-[rgb(245,139,87)]
  group-active:border-[rgb(245,139,87)] group-active:text-[rgb(245,139,87)]
"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default Projects;