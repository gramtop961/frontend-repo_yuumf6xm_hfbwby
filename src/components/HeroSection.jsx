import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient aura background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,114,255,0.18),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <Rocket size={14} className="text-indigo-300" /> Next‑gen DevOps
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Automate DevOps. <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Accelerate Innovation.</span>
          </h1>
          <p className="mt-6 max-w-xl text-slate-300">
            PreciOps is your AI DevOps engineer — automating CI/CD, IaC, cloud provisioning, monitoring, and cost optimization.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#start"
              className="rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Start Free Trial
            </a>
            <a
              href="#how"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Play size={16} className="text-cyan-300 transition group-hover:scale-110" />
              See How It Works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur md:h-[520px]"
        >
          <div className="absolute inset-0 rounded-2xl">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
