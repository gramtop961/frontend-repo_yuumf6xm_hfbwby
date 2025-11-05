import React from 'react';
import { GitBranch, Cloud, Shield, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Automated CI/CD Pipelines',
    desc: 'Zero‑touch builds, tests, and deployments across environments with intelligent rollbacks.',
    Icon: GitBranch,
  },
  {
    title: 'Intelligent Infrastructure Scaling',
    desc: 'Predictive autoscaling and right‑sizing powered by real‑time workload patterns.',
    Icon: Gauge,
  },
  {
    title: 'Cost & Security Optimization',
    desc: 'Continuous guardrails for spend, posture, and compliance baked into every change.',
    Icon: Shield,
  },
  {
    title: 'Cross‑Cloud Integration',
    desc: 'AWS, GCP, Azure, and Kubernetes unified with a single policy‑driven workflow.',
    Icon: Cloud,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Built for precision at scale</h2>
        <p className="mt-3 text-slate-300">Minimal setup. Maximum reliability. Production‑grade by default.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, desc, Icon }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/[0.07] hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.55)]"
          >
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 p-3 text-indigo-300 ring-1 ring-white/10">
              <Icon size={22} />
            </div>
            <h3 className="text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
