"use client";
import { motion, useMotionValue, useSpring, useMotionTemplate, useVelocity, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// --- DATA SECTION: Edit your info here ---
const TIMELINE = [
  { year: "Current", role: "Researcher (AI & IR4.0)", org: "Malaysian Rubber Board", detail: "Integrating Industrial AI and intelligent chatbots." },
  { year: "2022 - 2024", role: "Assistant Engineer", org: "JVCKENWOOD", detail: "Software QC and Mass Production (MP) optimization." },
  { year: "2018 - 2022", role: "B.Eng Electronic", org: "UTeM", detail: "Robotics & IoT specialist. CGPA 3.45." },
  { year: "2015 - 2017", role: "Diploma Electronic", org: "POLISAS", detail: "Communication Systems. CGPA 3.74." }
];

const SKILLS = ["ROS", "TensorFlow", "IoT", "PCB Design", "Python", "STM32", "ESP32", "C++"];

// --- ANIMATION ENGINE ---
function DynamicGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xVel = useVelocity(mouseX);
  const yVel = useVelocity(mouseY);

  const speed = useSpring(useTransform(() => Math.abs(xVel.get()) + Math.abs(yVel.get())), { stiffness: 50, damping: 20 });
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 30 });

  const size = useTransform(speed, [0, 1000], ["350px", "650px"]);
  const color = useTransform(speed, [0, 1000], ["rgba(6, 182, 212, 0.25)", "rgba(139, 92, 246, 0.4)"]);
  const glow = useMotionTemplate`radial-gradient(${size} circle at ${smoothX}px ${smoothY}px, ${color}, transparent 70%)`;

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return <motion.div className="mouse-glow" style={{ background: glow }} />;
}

export default function Portfolio() {
  return (
    <div className="portfolio-bg">
      <DynamicGlow />

      <div className="relative z-10">
        {/* 1. TICKER (Animation handled in CSS) */}
        <div className="ticker-container">
          <div className="ticker-content">
            <span className="ticker-item">System_State: Operational</span>
            <span className="ticker-item">AI_Researcher: Active</span>
            <span className="ticker-item">IR4.0_Protocol: Enabled</span>
            <span className="ticker-item">Location: Malaysia</span>
            {/* Duplicate for loop */}
            <span className="ticker-item">System_State: Operational</span>
            <span className="ticker-item">AI_Researcher: Active</span>
          </div>
        </div>

        {/* 2. HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-7xl font-black text-white mb-4 tracking-tighter">
              MUHAMMAD<br /><span className="text-cyan-500">SAFIE</span>
            </h1>
            <p className="text-lg font-mono text-cyan-400 mb-8 uppercase italic">Engineer & AI Researcher</p>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
              Synthesizing <strong className="text-white">sensor arrays</strong> and <strong className="text-white">machine intelligence</strong> for the Malaysian Rubber Board.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {SKILLS.map(s => <span key={s} className="px-3 py-2 bg-slate-900/40 border border-slate-800 rounded-md font-mono text-xs">{s}</span>)}
            </div>

            <div className="flex gap-4">
              <a href="mailto:muhd.safie1996@gmail.com" className="px-8 py-4 bg-cyan-600 text-white font-bold rounded uppercase text-sm tracking-widest">Contact</a>
              <a href="/Muhammad_Safie_Resume.pdf" download className="px-8 py-4 border border-slate-700 font-bold rounded uppercase text-sm tracking-widest">CV</a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <Image src="https://sjmmajuresources.com/wp-content/uploads/elementor/thumbs/41x47-q504iwyzwymp49j0xvviksey93v4rqtm96tp4lqoio.png" alt="Safie" width={450} height={450} className="rounded-lg border border-slate-800 grayscale-[0.2]" priority />
          </div>
        </section>

        {/* 3. ROADMAP */}
        <section className="max-w-6xl mx-auto px-6 py-20 bg-slate-950/40 border-y border-slate-900">
          <h3 className="text-4xl font-black text-white mb-16 uppercase tracking-tighter tracking-widest">Career Roadmap</h3>
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative border-l-2 border-slate-800 pl-10 py-10 hover:bg-white/[0.02] transition-all">
                <div className="absolute w-4 h-4 bg-slate-900 border-2 border-cyan-500 rounded-full -left-[9px] top-12" />
                <div className="text-sm font-mono text-cyan-500 mb-2">{item.year}</div>
                <h4 className="text-2xl font-bold text-white uppercase">{item.role}</h4>
                <p className="text-slate-500 mb-2">{item.org}</p>
                <p className="text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
