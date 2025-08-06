"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LogoMark } from "@/components/LogoMark";
import { PointerHighlight } from "@workspace/ui/components/ui/pointer-highlight";
import Nextjs from "@/logos/nextjs";
import Convex from "@/logos/convex";
import Clerk from "@/logos/clerk";
import Sentry from "@/logos/sentry";
import { Meteors } from "@/components/meteor";
import Link from "next/link";

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
          <Link
            href="/sign-in"
            className="rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(56,189,248,0.45)] transition hover:brightness-105"
          >
            Get started
          </Link>
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
          <motion.div
            variants={childEnter}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-xs text-emerald-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Production starter for teams that ship
            </span>
            <h1 className="mt-4 bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
              Build and launch SaaS in{" "}
              <PointerHighlight
                rectangleClassName="bg-emerald-100 border-emerald-300"
                pointerClassName="text-emerald-500"
              >
                <span className="relative z-10 text-gray-800 font-semibold">
                  hours, not weeks
                </span>
              </PointerHighlight>
              .
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
            className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-80"
            aria-label="Tech stack"
          >
            {[Nextjs, Convex, Clerk, Sentry].map((Logo, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="size-28 cursor-pointer transition-opacity duration-200 hover:opacity-100 [&>svg]:h-full [&>svg]:w-full [&>svg]:object-contain"
              >
                <Logo />
              </motion.div>
            ))}
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
          <motion.div
            variants={childEnter}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Everything you need to launch
            </h2>
            <p className="mt-3 text-gray-600">
              Batteries-included starter with sensible defaults and scalable
              patterns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Auth & Users",
                desc: "Email magic links, OAuth providers, sessions, and RBAC patterns pre-wired.",
                icon: (
                  <svg
                    className="h-3 w-3 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
                gradient: "from-emerald-400 to-teal-500",
              },
              {
                title: "Data & Realtime",
                desc: "Convex-backed data with optimistic UI and serverless performance.",
                icon: (
                  <svg
                    className="h-3 w-3 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                ),
                gradient: "from-teal-400 to-cyan-500",
              },
              {
                title: "Errors & Observability",
                desc: "Sentry integrated for tracing, alerts, and zero-config source maps.",
                icon: (
                  <svg
                    className="h-3 w-3 text-sky-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                ),
                gradient: "from-sky-400 to-blue-500",
              },
              {
                title: "App Router + Edge",
                desc: "Next.js App Router, streaming, and edge-ready APIs by default.",
                icon: (
                  <svg
                    className="h-3 w-3 text-cyan-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                gradient: "from-cyan-400 to-sky-500",
              },
              {
                title: "Type-safe Everywhere",
                desc: "End-to-end TypeScript with strict configs and shared types.",
                icon: (
                  <svg
                    className="h-3 w-3 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                title: "Deploy in 1 click",
                desc: "CI-friendly hooks and environment templates for fast, reproducible deploys.",
                icon: (
                  <svg
                    className="h-3 w-3 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                ),
                gradient: "from-indigo-400 to-purple-500",
              },
            ].map((f, i) => (
              <motion.div
                variants={childEnter}
                key={f.title}
                className="group relative w-full max-w-md mx-auto"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`absolute inset-0 h-full w-full scale-[0.80] transform rounded-2xl bg-gradient-to-r ${f.gradient} blur-3xl opacity-25 transition-opacity duration-300 group-hover:opacity-40`}
                />
                <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/40 to-white/60 px-6 py-8 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-emerald-200/60 group-hover:shadow-2xl group-hover:from-white/50 group-hover:to-emerald-50/70">
                  <div className="mb-4 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300/60 bg-white/80">
                    {f.icon}
                  </div>

                  <h3 className="relative z-50 mb-3 text-xl font-semibold text-gray-800">
                    {f.title}
                  </h3>

                  <p className="relative z-50 mb-4 text-sm leading-relaxed text-gray-600">
                    {f.desc}
                  </p>

                  {/* Meteor effect */}
                  <Meteors number={10} />
                </div>
              </motion.div>
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
