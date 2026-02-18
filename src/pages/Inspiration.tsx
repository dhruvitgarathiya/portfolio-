import pablo from "../assets/Capture.jpeg";
import { useState, useEffect } from "react";
import kq from "../assets/kanye-quote.mp4";

const Inspiration = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <div className="relative min-h-screen bg-[rgb(245,139,87)] overflow-hidden text-black">

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeSlow {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.7) rotate(-6deg); }
          70%  { transform: scale(1.07) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(-3deg); }
        }
        @keyframes glitch {
          0%,100% { clip-path: inset(0 0 95% 0); transform: translate(-3px,0); }
          25%     { clip-path: inset(40% 0 40% 0); transform: translate(3px,0); }
          50%     { clip-path: inset(70% 0 10% 0); transform: translate(-2px,0); }
          75%     { clip-path: inset(10% 0 70% 0); transform: translate(2px,0); }
        }
        @keyframes scanPulse {
          0%   { top: -5%; opacity: 0.6; }
          100% { top: 105%; opacity: 0; }
        }
        @keyframes rip {
          0%   { transform: scaleY(0); transform-origin: top; }
          100% { transform: scaleY(1); transform-origin: top; }
        }
        @keyframes stampIn {
          0%   { opacity:0; transform: scale(2) rotate(15deg); }
          60%  { transform: scale(0.95) rotate(-3deg); }
          100% { opacity:1; transform: scale(1) rotate(6deg); }
        }

        .marquee-track { animation: marquee 12s linear infinite; }
        .marquee-track-rev { animation: marqueeSlow 16s linear infinite; }

        .mobile-title { animation: fadeSlideUp 0.8s cubic-bezier(.16,1,.3,1) both; }
        .mobile-text-box { animation: fadeSlideLeft 0.9s cubic-bezier(.16,1,.3,1) 0.2s both; }
        .mobile-cover { animation: popIn 0.8s cubic-bezier(.16,1,.3,1) 0.4s both; }
        .mobile-quote-reveal { animation: rip 0.6s cubic-bezier(.16,1,.3,1) both; }
        .stamp { animation: stampIn 0.5s cubic-bezier(.16,1,.3,1) 0.6s both; }

        .glitch-title { position: relative; display: inline-block; }
        .glitch-title::before,
        .glitch-title::after {
          content: attr(data-text);
          position: absolute; inset: 0;
          font-size: inherit; font-weight: inherit;
          letter-spacing: inherit; line-height: inherit;
          text-transform: uppercase; pointer-events: none; opacity: 0;
        }
        .glitch-title:active::before {
          opacity: 1;
          animation: glitch 0.35s steps(1) infinite;
          color: #000;
        }
        .glitch-title:active::after {
          opacity: 1;
          animation: glitch 0.35s steps(1) 0.05s infinite;
          color: #fff;
        }

        .scan-line {
          position: absolute; left: 0; right: 0; height: 3px;
          background: rgba(245,139,87,0.7);
          animation: scanPulse 2.2s linear infinite;
          pointer-events: none;
        }

        .tape-strip {
          background: #000;
          color: rgb(245,139,87);
          padding: 6px 0;
          overflow: hidden;
          white-space: nowrap;
        }

        .quote-card-mobile {
          transition: transform 0.4s cubic-bezier(.16,1,.3,1);
        }
        .quote-card-mobile:active {
          transform: scale(0.97);
        }
      `}</style>

      {/* ── DESKTOP: keep original layout ── */}
      <div className="hidden md:block">

        {/* DESKTOP BACKGROUND TEXT WALLS */}
        <div className="absolute top-40 left-0 leading-none opacity-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <p key={`left-${i}`} className="text-2xl font-black uppercase tracking-tight whitespace-nowrap">
              THE LIFE OF DHRUVIT
            </p>
          ))}
        </div>
        <div className="absolute top-0 right-0 text-right leading-none opacity-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <p key={`right-${i}`} className="text-2xl font-black uppercase tracking-tight whitespace-nowrap">
              THE LIFE OF DHRUVIT
            </p>
          ))}
        </div>

        {/* DESKTOP TITLE */}
        <div className="relative z-10 pt-28 text-center group px-4">
          <h1 className="text-9xl font-black uppercase transition-all duration-500 group-hover:tracking-[0.4em]">
            INSPIRATION
          </h1>
          <div className="h-2 bg-black w-0 mx-auto mt-6 transition-all duration-700 group-hover:w-64" />
        </div>

        {/* DESKTOP HERO */}
        <div className="relative z-10 pt-20 pb-24 px-8 flex flex-row items-center justify-center gap-20">
          {/* TEXT BOX */}
          <div className="max-w-xl p-10 transition-all duration-500 border-4 border-black group hover:bg-black shadow-[0px_0px_0px_0px_black] hover:shadow-[20px_20px_0px_0px_black]">
            <h2 className="text-7xl font-black uppercase leading-tight transition-all duration-500 group-hover:text-[rgb(245,139,87)] group-hover:tracking-widest">
              The Life of Pablo
            </h2>
            <p className="mt-8 text-xl font-bold uppercase transition-all duration-500 group-hover:text-[rgb(245,139,87)]">My Portfolio theme is inspired by</p>
            <p className="text-3xl font-black mt-2 transition-all duration-500 group-hover:text-[rgb(245,139,87)]">Album by Kanye West</p>
            <p className="mt-6 text-lg leading-relaxed font-bold transition-all duration-500 group-hover:text-[rgb(245,139,87)]">
              A living, breathing work of art that proved music is never finished — only evolving. A sonic collage where gospel, grit, chaos, and high-art collide.
            </p>
          </div>
          {/* ALBUM COVER */}
          <div className="relative group">
            <img src={pablo} alt="The Life of Pablo Album"
              className="cursor-pointer w-96 border-4 border-black shadow-[20px_20px_0px_0px_black] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:-translate-y-8 hover:shadow-[35px_35px_0px_0px_black]"
            />
          </div>
        </div>

        {/* DESKTOP QUOTE */}
        <div className="relative z-10 px-8 pb-40 text-center">
          <div
            className="relative bg-black text-[rgb(245,139,87)] max-w-4xl mx-auto p-12 border-4 border-black shadow-[20px_20px_0px_0px_black] transition-all duration-500 hover:-translate-y-4 hover:shadow-[35px_35px_0px_0px_black] overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className={`text-4xl font-black uppercase leading-relaxed transition-all duration-500 ${isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              "When you're a fan of Kanye West, you're not a fan of Kanye West — you're a fan of yourself."
            </p>
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <video src={kq} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ── MOBILE: CONCERT POSTER / ZINE LAYOUT ──
          ══════════════════════════════════════════ */}
      <div className="md:hidden min-h-screen flex flex-col">

        {/* TOP TAPE STRIP — scrolling */}
        <div className="tape-strip z-30 relative">
          <div className="marquee-track inline-flex">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-[0.3em] px-4">
                THE LIFE OF PABLO ✦ KANYE WEST ✦ 2016 ✦
              </span>
            ))}
            {[...Array(8)].map((_, i) => (
              <span key={`b${i}`} className="text-[10px] font-black uppercase tracking-[0.3em] px-4">
                THE LIFE OF PABLO ✦ KANYE WEST ✦ 2016 ✦
              </span>
            ))}
          </div>
        </div>

        {/* HERO BLOCK — stacked poster style */}
        <div className="relative flex-1 px-5 pt-10 pb-6 overflow-hidden">

          {/* Faint background repeat text */}
          <div className="absolute inset-0 flex flex-col justify-center overflow-hidden pointer-events-none opacity-[0.06]">
            {[...Array(18)].map((_, i) => (
              <p key={i} className="text-[11px] font-black uppercase tracking-tight whitespace-nowrap">
                THE LIFE OF DHRUVIT • INSPIRED BY PABLO •
              </p>
            ))}
          </div>

          {/* BIG STACKED TITLE */}
          <div className="mobile-title relative z-10 mb-2">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-60 mb-1"></p>
            <h1
              className="glitch-title text-[20vw] font-black uppercase leading-[0.85] tracking-tight"
              data-text="INSPI RATION"
              style={{ wordBreak: "break-all" }}
            >
              INSPI<br />RATION
            </h1>
            {/* Underline accent */}
            <div className="h-[5px] bg-black w-3/4 mt-2" />
          </div>

          {/* ALBUM COVER — bleeds right, rotated aggressively */}
          <div className="mobile-cover relative z-20 flex justify-end -mr-2 mt-4">
            <div className="relative">
              <img
                src={pablo}
                alt="The Life of Pablo"
                className="w-[55vw] border-4 border-black"
                style={{
                  transform: `rotate(-4deg) translateY(${scrollY * 0.04}px)`,
                  boxShadow: "10px 10px 0px 0px #000",
                  transition: "box-shadow 0.3s",
                }}
              />
              {/* STAMP overlay */}
              <div className="stamp absolute -top-4 -left-6 bg-black text-[rgb(245,139,87)] border-4 border-[rgb(245,139,87)] px-3 py-1 rotate-[6deg] shadow-[4px_4px_0px_0px_rgba(245,139,87,0.5)]">
                <p className="text-[9px] font-black uppercase tracking-widest">2016</p>
                <p className="text-[8px] font-black uppercase tracking-wider">TLOP</p>
              </div>
            </div>
          </div>

          {/* TEXT INFO BOX — overlaps album slightly */}
          <div className="mobile-text-box relative z-30 -mt-6 ml-0 mr-[40vw]">
            <div className="bg-black text-[rgb(245,139,87)] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(245,139,87,0.4)]">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] opacity-60 mb-1">Inspired by</p>
              <h2 className="text-lg font-black uppercase leading-tight">The Life of Pablo</h2>
              <p className="text-[10px] font-black mt-1 opacity-80">Album by Kanye West</p>
            </div>
          </div>

          {/* DESCRIPTION — full width below */}
          <div className="relative z-10 mt-6 border-l-4 border-black pl-4">
            <p className="text-[13px] font-bold leading-relaxed">
              A living, breathing work of art that proved music is <span className="font-black">never finished</span> — only evolving. Gospel, grit, chaos, and high-art collide.
            </p>
          </div>

        </div>

        {/* MID TAPE STRIP — reverse scroll */}
        <div className="tape-strip z-30 relative my-0">
          <div className="marquee-track-rev inline-flex">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-[0.25em] px-4">
                ✦ GOSPEL ✦ GRIT ✦ CHAOS ✦ HIGH ART ✦ NEVER FINISHED ✦
              </span>
            ))}
            {[...Array(8)].map((_, i) => (
              <span key={`b${i}`} className="text-[10px] font-black uppercase tracking-[0.25em] px-4">
                ✦ GOSPEL ✦ GRIT ✦ CHAOS ✦ HIGH ART ✦ NEVER FINISHED ✦
              </span>
            ))}
          </div>
        </div>

        {/* QUOTE SECTION — tap to rip open video */}
        <div className="relative z-10 px-5 py-8">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] opacity-50 mb-3 text-center">
            — TAP TO REVEAL —
          </p>

          <div
            className="quote-card-mobile relative bg-black text-[rgb(245,139,87)] border-4 border-black overflow-hidden cursor-pointer"
            style={{
              minHeight: "200px",
              boxShadow: tapped
                ? "8px 8px 0px 0px rgba(245,139,87,0.6)"
                : "8px 8px 0px 0px #000",
              transition: "box-shadow 0.3s",
            }}
            onClick={() => setTapped(!tapped)}
          >
            {/* Scan line when not tapped */}
            {!tapped && <div className="scan-line" />}

            {/* Quote text */}
            <div
              className="p-6 transition-all duration-500"
              style={{
                opacity: tapped ? 0 : 1,
                transform: tapped ? "scale(0.9)" : "scale(1)",
              }}
            >
              <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-3">Kanye West</p>
              <p className="text-[15px] font-black uppercase leading-snug">
                "When you're a fan of Kanye West, you're not a fan of Kanye West —
                you're a fan of <span className="underline underline-offset-4">yourself.</span>"
              </p>
              {/* Bottom rip hint */}
              <div className="mt-6 flex items-center gap-2 opacity-40">
                <div className="flex-1 h-[2px] bg-[rgb(245,139,87)]" />
                <p className="text-[8px] uppercase tracking-widest font-black">tap</p>
                <div className="flex-1 h-[2px] bg-[rgb(245,139,87)]" />
              </div>
            </div>

            {/* Video reveal — rips in from top */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: tapped ? 1 : 0,
                clipPath: tapped ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
                transition: "clip-path 0.5s cubic-bezier(.16,1,.3,1), opacity 0.3s",
              }}
            >
              <video src={kq} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              {/* Tap again hint */}
              <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 border border-[rgb(245,139,87)]">
                <p className="text-[8px] text-[rgb(245,139,87)] font-black uppercase tracking-widest">tap to close</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TAPE STRIP */}
        <div className="tape-strip z-30 relative mt-auto">
          <div className="marquee-track inline-flex">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-[0.3em] px-4">
                THE LIFE OF DHRUVIT ✦ PORTFOLIO ✦ 2026 ✦
              </span>
            ))}
            {[...Array(8)].map((_, i) => (
              <span key={`b${i}`} className="text-[10px] font-black uppercase tracking-[0.3em] px-4">
                THE LIFE OF DHRUVIT ✦ PORTFOLIO ✦ 2026 ✦
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Inspiration;