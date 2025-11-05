import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Metric = ({ label, value, trend }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
    <div className="text-xs text-slate-400">{label}</div>
    <div className="mt-2 flex items-baseline gap-2">
      <div className="text-xl font-semibold text-white">{value}</div>
      <div className={`text-xs ${trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{trend}</div>
    </div>
  </div>
);

const Step = ({ index, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow">{index}</div>
    <div>
      <div className="font-medium text-white">{title}</div>
      <div className="text-sm text-slate-300">{desc}</div>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-medium text-white">PreciOps Dashboard</div>
            <div className="flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Metric label="Deploy Success" value="99.98%" trend="+0.3%" />
            <Metric label="MTTR" value="3.2 min" trend="-12%" />
            <Metric label="Cloud Spend" value="$42.3k" trend="-18%" />
            <Metric label="Coverage" value="92%" trend="+6%" />
          </div>

          {/* Simple sparkline/graph mock */}
          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Pipeline Health</span>
              <span>Last 7 days</span>
            </div>
            <div className="mt-3 grid grid-cols-12 items-end gap-1">
              {[30, 45, 38, 60, 52, 70, 64, 80, 75, 66, 84, 90].map((h, i) => (
                <div
                  key={i}
                  className="rounded-t bg-gradient-to-t from-indigo-500/60 to-cyan-400/80"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300">
              <CheckCircle2 size={14} /> No incidents detected
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">How it works</h2>
          <p className="mt-3 max-w-lg text-slate-300">
            From repo to production in minutes. PreciOps analyzes, provisions, deploys, and monitors — automatically.
          </p>

          <div className="mt-8 space-y-6">
            <Step index={1} title="Connect your repo" desc="GitHub, GitLab, or Bitbucket. We infer your stack and tests." />
            <Step index={2} title="PreciOps analyzes" desc="Generates CI/CD, IaC, and security policies tailored to your app." />
            <Step index={3} title="Deploy & monitor" desc="Ship with one click. Automated rollbacks, insights, and alerts included." />
          </div>

          <a
            href="#start"
            className="mt-8 inline-flex rounded-2xl bg-white/5 px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
          >
            Explore the live demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
