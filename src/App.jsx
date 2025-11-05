import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ExperienceSection from './components/ExperienceSection';
import CommunitySection from './components/CommunitySection';

function App() {
  return (
    <div className="min-h-screen bg-[#0b1221] text-slate-100">
      {/* Top gradient glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_70%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow" />
          <span className="text-lg font-semibold tracking-tight text-white">PreciOps</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#start" className="hover:text-white">Pricing</a>
          <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">Sign in</a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
        <ExperienceSection />
        <CommunitySection />
      </main>
    </div>
  );
}

export default App;
