const projects = [
  {
    title: "AI Document Digitizer API",
    description:
      "A document digitization backend API that converts scanned docs and images into structured data using OCR & AI-driven processing. Ideal for automating document workflows and data extraction.",
    tech: ["Node.js", "Express", "OCR", "AI"],
    github: "https://github.com/dhruvitgarathiya/AI-Document-Digitizer-API",
    live: "",
  },
  {
    title: "Grocery App",
    description:
      "A full-stack grocery web application featuring product browsing, cart management, user auth, and backend API support to demonstrate end-to-end e-commerce workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/dhruvitgarathiya/grocery-app",
    live: "",
  },
  {
    title: "NEUROZEN",
    description:
      "A project focused on neuro-inspired or wellness application (assumed from title). A sophisticated tool / web application demonstrating advanced features and integrations. (Replace with exact details as needed.)",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/dhruvitgarathiya/NEUROZEN",
    live: "",
  },
  {
    title: "TextTamer",
    description:
      "An intelligent text processing project to tame and manipulate natural language input (custom text transformations and utilities). Useful for NLP experiments and text-centric applications.",
    tech: ["JavaScript", "Node.js", "NLP"],
    github: "https://github.com/dhruvitgarathiya/TextTamer",
    live: "",
  },
];


const Projects = () => {
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] overflow-hidden text-black py-32 px-8">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
          Projects
        </h1>
        <p className="mt-4 text-xl font-bold uppercase">
          Things I’ve Built
        </p>
      </div>

      {/* ================= PROJECT GRID ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

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
        group
        border-4
        border-black
        p-8
        transition-all
        duration-500
        shadow-[15px_15px_0px_0px_black]
        hover:bg-black
        hover:-translate-y-4
        hover:shadow-[30px_30px_0px_0px_black]
        cursor-pointer
      "
    >
      {/* TITLE */}
      <h2
        className="
          text-2xl md:text-3xl font-black uppercase
          transition-all duration-500
          group-hover:text-[rgb(245,139,87)]
        "
      >
        {project.title}
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-4 font-semibold
          transition-all duration-500
          group-hover:text-[rgb(245,139,87)]
        "
      >
        {project.description}
      </p>

      {/* TECH STACK */}
      <div className="mt-6 flex flex-wrap gap-3">
        {project.tech.map((item, i) => (
          <span
            key={i}
            className="
              border-2
              border-black
              px-3 py-1
              text-sm
              font-bold
              transition-all duration-500
              group-hover:border-[rgb(245,139,87)]
              group-hover:text-[rgb(245,139,87)]
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
