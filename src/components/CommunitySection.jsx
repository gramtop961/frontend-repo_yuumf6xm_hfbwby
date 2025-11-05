import React from 'react';
import { Star, Github, Twitter, Mail, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-slate-300 backdrop-blur"
  >
    <div className="mb-3 flex gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
    <p className="leading-relaxed">“{quote}”</p>
    <div className="mt-4 text-sm text-slate-400">— {author}, {role}</div>
  </motion.div>
);

const CommunitySection = () => {
  return (
    <section id="start" className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Loved by engineering teams</h2>
          <p className="mt-3 max-w-lg text-slate-300">
            From startups to enterprises, PreciOps helps teams ship faster with fewer incidents and lower cloud costs.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <TestimonialCard quote="PreciOps replaced a whole suite of scripts and manual playbooks for us." author="Anika R." role="VP Engineering, Fintech" />
            <TestimonialCard quote="We cut infra spend by 22% in the first month while improving reliability." author="Marco D." role="CTO, SaaS" />
            <TestimonialCard quote="The AI suggestions for scaling and security are spot on — huge time saver." author="Jess K." role="Staff SRE, Gaming" />
            <TestimonialCard quote="Our deploy frequency tripled. It just works." author="Priya S." role="Platform Lead, Healthtech" />
          </div>
        </div>

        {/* Pricing / CTA */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 text-center backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            Simple Pricing
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">Start for free, scale when you do</h3>
          <p className="mt-2 text-slate-300">No credit card required. Cancel anytime.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-slate-300">Starter</div>
              <div className="mt-2 text-3xl font-semibold text-white">$0</div>
              <ul className="mt-3 space-y-2 text-left text-sm text-slate-300">
                <li>• 2 services</li>
                <li>• Basic CI/CD & IaC</li>
                <li>• Community support</li>
              </ul>
            </div>
            <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 p-5 ring-1 ring-indigo-500/30">
              <div className="text-sm text-indigo-200">Pro</div>
              <div className="mt-2 text-3xl font-semibold text-white">$49<span className="text-base font-normal text-slate-300">/mo</span></div>
              <ul className="mt-3 space-y-2 text-left text-sm text-slate-200">
                <li>• Unlimited services</li>
                <li>• Advanced scaling & policies</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)] transition hover:brightness-110">Start for free</a>
            <a href="#" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Join the waitlist</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="text-xl font-semibold text-white">PreciOps</div>
            <div className="text-sm text-slate-400">Automation for modern DevOps</div>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a href="#" className="text-slate-300 hover:text-white"><BookOpen className="mr-1 inline" size={16}/> Docs</a>
            <a href="#" className="text-slate-300 hover:text-white"><Github className="mr-1 inline" size={16}/> GitHub</a>
            <a href="#" className="text-slate-300 hover:text-white">Privacy</a>
            <a href="#" className="text-slate-300 hover:text-white">Contact</a>
            <a href="#" className="text-slate-300 hover:text-white"><Twitter className="mr-1 inline" size={16}/> Twitter</a>
            <a href="#" className="text-slate-300 hover:text-white"><Mail className="mr-1 inline" size={16}/> Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
