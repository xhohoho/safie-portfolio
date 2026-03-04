"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const timeline = [
  { year: "2015 - 2017", role: "Diploma in Electronic Engineering", org: "POLISAS", detail: "Focused on Communication. CGPA 3.74" },
  { year: "2018 - 2022", role: "B.Eng (Hons) Electronic Engineering", org: "UTeM", detail: "Specialized in Robotics & IoT. CGPA 3.45" },
  { year: "2022 - 2024", role: "Assistant Engineer (Product)", org: "JVCKENWOOD", detail: "Mass Production & Software Quality Control." },
  { year: "Current", role: "Researcher (AI & IR4.0)", org: "Malaysian Rubber Board", detail: "Developing Chatbots & Industrial AI Systems." }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* 1. TECHNICAL TICKER (IR4.0 Vibe) */}
      <div className="bg-cyan-500/5 border-b border-cyan-500/10 py-2 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap gap-10 text-[10px] font-mono text-cyan-400/50"
        >
          <span>SYS_STATUS: OPTIMAL</span>
          <span>SENSORS: CONNECTED</span>
          <span>LATENCY: 12ms</span>
          <span>AI_MODEL: ACTIVE</span>
          <span>IR4.0_PROTOCOL: ENABLED</span>
          <span>LOCATION: MALAYSIA</span>
          {/* Duplicate for seamless loop */}
          <span>SYS_STATUS: OPTIMAL</span>
          <span>SENSORS: CONNECTED</span>
          <span>LATENCY: 12ms</span>
          <span>AI_MODEL: ACTIVE</span>
        </motion.div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="initial" animate="animate">
          <motion.h1 variants={fadeInUp} className="text-7xl font-black text-white mb-4 tracking-tighter">
            SAFIE<span className="text-cyan-500">.CC</span>
          </motion.h1>
          <p className="text-lg font-mono text-cyan-400 mb-6 tracking-widest uppercase underline decoration-2 underline-offset-8">
            Electronic Engineer & AI Researcher
          </p>
          <motion.p variants={fadeInUp} className="text-xl text-slate-400 leading-relaxed mb-8">
            I specialize in the synthesis of **physical sensors** and **machine intelligence**. 
            Currently architecting IR4.0 solutions for the Malaysian Rubber Board.
          </motion.p>
          <div className="flex flex-wrap gap-2">
            {["ROS", "TensorFlow", "IoT", "PCB Design", "Python", "STM32", "ESP32", "C++"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded font-mono text-xs">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <Image 
            src="https://sjmmajuresources.com/wp-content/uploads/elementor/thumbs/41x47-q504iwyzwymp49j0xvviksey93v4rqtm96tp4lqoio.png"
            alt="Muhammad Safie"
            width={400}
            height={400}
            className="rounded-lg border-l-4 border-b-4 border-cyan-500 shadow-2xl brightness-90"
            priority
          />
          <div className="absolute -bottom-4 -right-4 bg-slate-900 p-4 border border-slate-700 hidden lg:block">
            <p className="text-[10px] font-mono text-cyan-500 uppercase">Current Project</p>
            <p className="text-xs font-bold text-white">MRB AI Chatbot v1.0</p>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE TIMELINE (New Addition) */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-slate-900/30 rounded-3xl border border-slate-800/50">
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="h-[1px] w-12 bg-cyan-500"></span> Career Roadmap
        </h3>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid md:grid-cols-4 gap-4 border-l border-slate-700 pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1 shadow-[0_0_8px_#22d3ee]" />
              <span className="text-sm font-mono text-cyan-500">{item.year}</span>
              <span className="text-lg font-bold text-white col-span-1">{item.role}</span>
              <span className="text-slate-400 font-medium">{item.org}</span>
              <span className="text-sm text-slate-500 italic">{item.detail}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL MILESTONES (Cleaned up) */}
      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-3 gap-8">
        {[
          { title: "SiswaSAT 2020", desc: "3rd Place Winner. Master/Slave Arduino telemetry via NRF24L01.", icon: "📡" },
          { title: "JVCKENWOOD", desc: "Handled 1st Mass Production run for new product software testing.", icon: "🏭" },
          { title: "Autonomous ROS", desc: "Performance analysis of AMCL localization algorithms.", icon: "🤖" }
        ].map((m, i) => (
          <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-600 transition-all">
            <div className="text-3xl mb-4">{m.icon}</div>
            <h4 className="text-xl font-bold text-white mb-2">{m.title}</h4>
            <p className="text-sm text-slate-400">{m.desc}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-slate-900">
        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest">
          Designed by Safie &copy; 2026 // Built with Next.js & Framer Motion
        </p>
      </footer>
    </div>
  );
}