"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LogoMark } from "@/components/LogoMark";
import Nextjs from "@/logos/nextjs";
import Convex from "@/logos/convex";
import Clerk from "@/logos/clerk";
import Sentry from "@/logos/sentry";
import Tailwind from "@/logos/tailwind";
import Typescript from "@/logos/typescript";
import FramerMotion from "@/logos/framer-motion";

export default function Page() {
  const prefersReducedMotion = useReducedMotion();

  const parentEnter = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const childEnter = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <main
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-950 text-neutral-50"
      aria-label="Landing page"
    >
      {/* Background aesthetic layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient split */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(99,102,241,0.25),transparent),radial-gradient(900px_500px_at_10%_110%,rgba(16,185,129,0.18),transparent)]" />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_20%,rgba(255,255,255,0.06),transparent)]" />
        {/* Ambient noise/texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22 viewBox=%220 0 4 4%22><path fill=%22%23fff%22 d=%22M0 0h1v1H0zM2 2h1v1H2z%22/></svg>')",
          }}
        />
      </div>

      {/* Glass card */}
      <motion.section
        variants={parentEnter}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-6 w-[min(980px,92vw)] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10"
        aria-labelledby="hero-title"
      >
        {/* Ambient glow ring */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl shadow-[0_0_120px_20px_rgba(99,102,241,0.18)]" />

        {/* Header */}
        <motion.header
          variants={childEnter}
          className="mb-10 flex items-center justify-between"
          aria-label="Header"
        >
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-sm uppercase tracking-[0.18em] text-neutral-300">
              SaaS Forge
            </span>
          </div>

          <nav className="hidden items-center gap-4 sm:flex">
            <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 transition-colors hover:bg-white/10">
              Changelog
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 transition-colors hover:bg-white/10">
              Docs
            </button>
            <button className="rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 px-3 py-1.5 text-xs font-medium text-neutral-900 shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)]">
              Launch Studio
            </button>
          </nav>
        </motion.header>

        {/* Hero */}
        <motion.div
          variants={childEnter}
          className="mx-auto max-w-3xl text-center"
        >
          <h1
            id="hero-title"
            className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl"
          >
            Ship your SaaS in hours, not weeks.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-neutral-300 sm:text-base">
            A production-grade starter with Next.js, Convex, Clerk, and
            Sentry—so you can focus on what matters: your product, not
            boilerplate.
          </p>

          {/* Primary CTA */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-white"
            >
              Create my SaaS
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-200 transition-colors hover:bg-white/10"
            >
              View template
            </motion.a>
          </div>
        </motion.div>

        {/* Tech logos */}
        <motion.div
          variants={childEnter}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
          aria-label="Tech stack"
        >
          <motion.div whileHover={{ y: -2, scale: 1.05 }} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
            <Nextjs />
          </motion.div>
          <motion.div whileHover={{ y: -2, scale: 1.05 }} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
            <Convex />
          </motion.div>
          <motion.div whileHover={{ y: -2, scale: 1.05 }} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
            <Clerk />
          </motion.div>
          <motion.div whileHover={{ y: -2, scale: 1.05 }} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
            <Sentry />
          </motion.div>
          <motion.div whileHover={{ y: -2, scale: 1.05 }} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
            <Tailwind />
          </motion.div>
          <motion.div whileHover={{ y: -2, scale: 1.05 }} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
            <Typescript />
          </motion.div>
          <motion.div whileHover={{ y: -2, scale: 1.05 }} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
            <FramerMotion />
          </motion.div>
        </motion.div>

        {/* Feature blips */}
        <motion.ul
          variants={childEnter}
          className="mt-8 grid grid-cols-2 gap-3 text-left text-[13px] text-neutral-300 sm:grid-cols-4"
        >
          {[
            "Auth, DB, Errors pre-wired",
            "App Router + Edge-ready",
            "API routes + RBAC patterns",
            "Email magic links + OAuth",
            "Events, queues, and metrics",
            "Zero-config Sentry example",
            "Type-safe components",
            "1-click deploy hooks",
          ].map(item => (
            <li key={item} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        {/* Footer */}
        <motion.footer
          variants={childEnter}
          className="mt-10 flex items-center justify-between text-[12px] text-neutral-400"
          aria-label="Footer"
        >
          <span>MIT Licensed</span>
          <div className="flex items-center gap-3">
            <a className="hover:text-neutral-200" href="#">
              Privacy
            </a>
            <a className="hover:text-neutral-200" href="#">
              Terms
            </a>
            <a className="hover:text-neutral-200" href="#">
              GitHub
            </a>
          </div>
        </motion.footer>
      </motion.section>

      {/* Non-scroll enforcement */}
      <style jsx global>{`
        html,
        body {
          height: 100%;
          overflow: hidden;
          background: #0a0a0a;
        }
      `}</style>
    </main>
  );
}
