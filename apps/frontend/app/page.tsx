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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const childEnter = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main
      className="relative min-h-screen w-full overflow-x-hidden bg-[linear-gradient(135deg,rgba(236,253,245,1)_0%,rgba(219,245,232,1)_16%,rgba(209,250,229,1)_28%,rgba(224,242,254,1)_55%,rgba(219,234,254,1)_72%,rgba(191,219,254,1)_100%)] text-gray-900"
      aria-label="Landing page"
    >
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-20%,rgba(16,185,129,0.14),transparent),radial-gradient(900px_600px_at_15%_120%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_500px_at_95%_20%,rgba(99,102,241,0.08),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/50" />
      </div>

      {/* Header */}
      <motion.header
        variants={parentEnter}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8"
        aria-label="Header"
      >
        <motion.div variants={childEnter} className="flex items-center gap-3">
          <LogoMark />
          <span className="text-sm uppercase tracking-[0.18em] text-gray-600">
            SaaS Forge
          </span>
        </motion.div>

        <motion.nav
          variants={childEnter}
          className="hidden items-center gap-5 md:flex"
        >
          <a
            href="#features"
            className="text-sm text-gray-600 transition-colors hover:text-gray-800"
          >
            Features
          </a>
          <a
            href="#problem"
            className="text-sm text-gray-600 transition-colors hover:text-gray-800"
          >
            Why
          </a>
          <a
            href="#faq"
            className="text-sm text-gray-600 transition-colors hover:text-gray-800"
          >
            FAQ
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(56,189,248,0.45)] transition hover:brightness-105"
          >
            Get started
          </a>
        </motion.nav>
      </motion.header>

      {/* Hero */}
      <section className="relative z-10">
        <motion.div
          variants={parentEnter}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-6xl px-6 pb-10 pt-8 sm:px-8 sm:pb-16 md:pt-14"
        >
          <motion.div variants={childEnter} className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-xs text-emerald-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Production starter for teams that ship
            </span>
            <h1 className="mt-4 bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
              Build and launch SaaS in hours, not weeks.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-gray-600 sm:text-lg">
              Opinionated, production-ready stack with Next.js, Convex, Clerk,
              and Sentry—wired with auth, data, and error handling so you focus
              on product, not plumbing.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl"
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
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300/60 bg-white/70 px-6 py-3 text-sm text-gray-700 shadow-sm backdrop-blur transition-colors hover:bg-white/90"
              >
                Explore features
              </motion.a>
            </div>
          </motion.div>

          {/* Logos */}
          <motion.div
            variants={childEnter}
            className="mt-10 flex flex-wrap items-center justify-center gap-5 opacity-80"
            aria-label="Tech stack"
          >
            {[Nextjs, Convex, Clerk, Sentry, Tailwind, Typescript, FramerMotion].map(
              (Logo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="h-6 w-6 transition-opacity hover:opacity-100 [&>svg]:h-full [&>svg]:w-full"
                >
                  <Logo />
                </motion.div>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 border-t border-white/60">
        <motion.div
          variants={parentEnter}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20"
        >
          <motion.div variants={childEnter} className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Everything you need to launch
            </h2>
            <p className="mt-3 text-gray-600">
              Batteries-included starter with sensible defaults and scalable
              patterns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Auth & Users",
                desc: "Email magic links, OAuth providers, sessions, and RBAC patterns pre-wired.",
                dot: "bg-emerald-500",
              },
              {
                title: "Data & Realtime",
                desc: "Convex-backed data with optimistic UI and serverless performance.",
                dot: "bg-teal-500",
              },
              {
                title: "Errors & Observability",
                desc: "Sentry integrated for tracing, alerts, and zero-config source maps.",
                dot: "bg-sky-500",
              },
              {
                title: "App Router + Edge",
                desc: "Next.js App Router, streaming, and edge-ready APIs by default.",
                dot: "bg-cyan-500",
              },
              {
                title: "Type-safe Everywhere",
                desc: "End-to-end TypeScript with strict configs and shared types.",
                dot: "bg-blue-500",
              },
              {
                title: "Deploy in 1 click",
                desc: "CI-friendly hooks and environment templates for fast, reproducible deploys.",
                dot: "bg-indigo-500",
              },
            ].map((f, i) => (
              <motion.div
                variants={childEnter}
                whileHover={{ y: -3 }}
                key={f.title}
                className="group rounded-2xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-block h-2 w-2 rounded-full ${f.dot}`} />
                  <h3 className="text-lg font-medium text-gray-800">
                    {f.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Problem / Solution */}
      <section id="problem" className="relative z-10">
        <motion.div
          variants={parentEnter}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20"
        >
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <motion.div variants={childEnter}>
              <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                The problem
              </h2>
              <p className="mt-3 text-gray-600">
                Most SaaS starters make you assemble auth, data, errors, and
                deploy from scratch. You end up debugging plumbing for weeks
                before shipping value to users.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  OAuth, sessions, and RBAC edge cases drain time.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  Data layer choices snowball into complex boilerplate.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  Errors in prod without observability = guessing.
                </li>
              </ul>
            </motion.div>

            <motion.div variants={childEnter}>
              <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                The solution
              </h2>
              <p className="mt-3 text-gray-600">
                A cohesive starter that handles the hard parts: auth, realtime
                data, error tracking, and deployment. You get clean patterns,
                type safety, and production defaults from day one.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Pre-wired auth & users",
                  "Convex data + realtime",
                  "Sentry errors & tracing",
                  "TypeScript-first DX",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-gray-700 shadow-sm backdrop-blur"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                id="get-started"
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:shadow-xl"
              >
                Start building
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 border-t border-white/60">
        <motion.div
          variants={parentEnter}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl px-6 py-14 sm:px-8 sm:py-20"
        >
          <motion.h2
            variants={childEnter}
            className="text-center text-3xl font-semibold text-gray-800 sm:text-4xl"
          >
            Frequently asked questions
          </motion.h2>
          <div className="mt-8 divide-y divide-white/70 rounded-2xl border border-white/70 bg-white/70 shadow-sm backdrop-blur">
            {[
              {
                q: "What’s included out of the box?",
                a: "Next.js App Router, Convex for data and realtime, Clerk for auth (email magic links + OAuth), Sentry for error tracking, example API routes, RBAC patterns, TypeScript setup, and deploy hooks.",
              },
              {
                q: "Is it production-ready?",
                a: "Yes. The stack is configured with sensible defaults, environment templates, and observability. You can deploy on day one and evolve safely.",
              },
              {
                q: "How customizable is it?",
                a: "Everything is modular. Swap providers, adjust data models, and re-theme with Tailwind. Patterns are opinionated but not restrictive.",
              },
              {
                q: "Does it support edge and streaming?",
                a: "Yes. It uses Next.js App Router with edge-ready handlers where appropriate, plus streaming and progressive rendering patterns.",
              },
            ].map((item, idx) => (
              <motion.details
                key={idx}
                variants={fadeIn as any}
                className="group px-5 py-4 open:bg-white/90 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-gray-800">
                  <span className="text-sm font-medium sm:text-base">
                    {item.q}
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-gray-500 transition-transform group-open:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:px-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-sm text-gray-600">SaaS Forge</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a className="transition-colors hover:text-gray-800" href="#">
              Privacy
            </a>
            <a className="transition-colors hover:text-gray-800" href="#">
              Terms
            </a>
            <a className="transition-colors hover:text-gray-800" href="#">
              GitHub
            </a>
          </div>
          <span className="text-xs text-gray-500">MIT Licensed</span>
        </div>
      </footer>

      {/* Global: keep page non-janky while still scrollable */}
      <style jsx global>{`
        html,
        body {
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(236, 253, 245, 1) 0%,
            rgba(219, 245, 232, 1) 16%,
            rgba(209, 250, 229, 1) 28%,
            rgba(224, 242, 254, 1) 55%,
            rgba(219, 234, 254, 1) 72%,
            rgba(191, 219, 254, 1) 100%
          );
        }
      `}</style>
    </main>
  );
}