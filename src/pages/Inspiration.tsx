import pablo from "../assets/Capture.jpeg";
import { useState } from "react";
import kq from "../assets/kanye-quote.mp4"
import { redirect } from "react-router-dom";

const Inspiration = () => {
    

const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] overflow-hidden text-black">

      {/* ================= LEFT WALL ================= */}
      <div className="absolute top-150 left-0 leading-none opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <p
            key={`left-${i}`}
            className="text-lg md:text-2xl font-black uppercase tracking-tight"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= RIGHT WALL ================= */}
      <div className="absolute top-0 right-0 text-right leading-none opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <p
            key={`right-${i}`}
            className="text-lg md:text-2xl font-black uppercase tracking-tight"
          >
            THE LIFE OF DHRUVIT
          </p>
        ))}
      </div>

      {/* ================= MAIN TITLE ================= */}
      <div className="relative z-10 pt-28 text-center group">
        <h1
          className="text-6xl md:text-9xl font-black uppercase 
          transition-all duration-500 
          group-hover:tracking-[0.4em]"
        >
          INSPIRATION
        </h1>

        {/* Animated underline */}
        <div className="h-2 bg-black w-0 mx-auto mt-6 
          transition-all duration-700 group-hover:w-64">
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative z-10 pt-20 pb-24 px-8 flex flex-col md:flex-row items-center justify-center gap-20">

        {/* TEXT */}
<div
  className="
    max-w-xl 
    p-10 
    transition-all 
    duration-500 
    border-4 
    border-black
    group
    hover:bg-black
    hover:shadow-[20px_20px_0px_0px_black]
  "
>
  <h1
    className="
      text-5xl md:text-7xl font-black uppercase leading-tight
      transition-all duration-500
      group-hover:text-[rgb(245,139,87)]
      group-hover:tracking-widest
    "
  >
    The Life of Pablo
  </h1>

  <p
    className="
      mt-8 text-xl md:text-2xl font-bold uppercase
      transition-all duration-500
      group-hover:text-[rgb(245,139,87)]
    "
  >
    My Portfolio theme is inspired by
  </p>

  <p
    className="
      text-3xl md:text-4xl font-black mt-4
      transition-all duration-500
      group-hover:text-[rgb(245,139,87)]
    "
  >
   Album by Kanye West
  </p>

  <p
    className="
      mt-6 text-lg leading-relaxed font-bold
      transition-all duration-500
      group-hover:text-[rgb(245,139,87)]
    "
  >
    A living, breathing work of art that proved
    music is never finished — only evolving.
    A sonic collage where gospel, grit, chaos,
    and high-art collide to redefine the limits
    of a modern masterpiece.
  </p>
</div>


        {/* ALBUM COVER */}
        <div className="relative group">
          <img
            src={pablo}
            alt="The Life of Pablo Album"
            className=" cursor-pointer w-72 md:w-96 border-4 border-black 
            shadow-[20px_20px_0px_0px_black]
            transition-all duration-500 
            group-hover:scale-110 
            group-hover:-rotate-3
            group-hover:-translate-y-8
            group-hover:shadow-[35px_35px_0px_0px_black]"  />

          {/* Animated glow ring */}
          <div className="absolute inset-0 rounded 
            border-4 border-black opacity-0 
            group-hover:opacity-100 
            group-hover:scale-110 
            transition-all duration-500">
          </div>
          <a
  href="https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1"
  target="_blank"
  rel="noreferrer"
></a>
        </div>

      </div>

      {/* ================= QUOTE SECTION ================= */}
      {/* ================= QUOTE SECTION ================= */}
<div className="relative z-10 px-8 pb-40 text-center">

  <div
    className="
      relative
      bg-black
      text-[rgb(245,139,87)]
      max-w-4xl
      mx-auto
      p-12
      border-4
      border-black
      shadow-[20px_20px_0px_0px_black]
      transition-all
      duration-500
      hover:-translate-y-4
      hover:shadow-[35px_35px_0px_0px_black]
      overflow-hidden
    "
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >

    {/* QUOTE TEXT */}
    <p
      className={`
        text-2xl md:text-4xl font-black uppercase leading-relaxed
        transition-all duration-500
        ${isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"}
      `}
    >
      “When you're a fan of Kanye West,
      you're not a fan of Kanye West —
      you're a fan of yourself.”
    </p>

    {/* VIDEO OVERLAY */}
    <div
      className={`
        absolute inset-0 flex items-center justify-center
        transition-all duration-500
        ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      <video
        src={kq} 
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    </div>

  </div>

</div>
</div>
  );
};

export default Inspiration;
