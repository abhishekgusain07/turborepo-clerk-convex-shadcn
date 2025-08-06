"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Crazy comparison cards: what other templates lack vs how this template solves it.
// Drop this component anywhere (e.g., under the Features section).
// Tailwind + Framer Motion, fully client-safe.

type Gap = {
  id: string;
  label: string;
  lacking: string;
  solution: string;
  severity: "low" | "medium" | "high";
  tag: string;
  gradient: string;
};

const CHIP = {
  base:
    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase",
  ghost:
    "border-white/60 bg-white/60 text-gray-700 backdrop-blur hover:bg-white/80 transition-colors",
  solid:
    "border-emerald-400/50 bg-emerald-500/10 text-emerald-700 backdrop-blur",
};

const CARD_BASE =
  "relative overflow-hidden rounded-2xl border bg-white/60 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";

const variants = {
  container: {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  },
};

export function ComparisonShowcase() {
  const data: Gap[] = useMemo(
    () => [
      {
        id: "auth-rbac",
        label: "Auth & RBAC",
        tag: "Security",
        severity: "high",
        lacking:
          "Most starters ship basic auth without sessions hardening, OAuth wiring, or clear RBAC patterns.",
        solution:
          "Clerk pre-wired with sessions, OAuth, and role patterns you can extend—secure defaults out of the box.",
        gradient: "from-emerald-400 via-teal-400 to-sky-400",
      },
      {
        id: "data-realtime",
        label: "Data & Realtime",
        tag: "DX",
        severity: "high",
        lacking:
          "Boilerplates often leave data layer vague—no realtime, no optimistic UI, and no serverless-first story.",
        solution:
          "Convex-backed data with realtime, optimistic mutations, and serverless performance tuned for teams.",
        gradient: "from-teal-400 via-cyan-400 to-sky-400",
      },
      {
        id: "errors-obs",
        label: "Errors & Observability",
        tag: "Reliability",
        severity: "medium",
        lacking:
          "Lack tracing, alerting, or source maps means issues surface late and debugging is slow.",
        solution:
          "Sentry integrated with tracing, alerts, and zero-config source maps—catch issues before users do.",
        gradient: "from-sky-400 via-blue-400 to-indigo-400",
      },
      {
        id: "app-router-edge",
        label: "App Router + Edge",
        tag: "Performance",
        severity: "medium",
        lacking:
          "Starters still cling to Pages Router and ignore edge streaming, route handlers, or cache patterns.",
        solution:
          "Next.js App Router, streaming-ready layouts, edge-capable handlers, and sensible caching defaults.",
        gradient: "from-cyan-400 via-sky-400 to-blue-400",
      },
      {
        id: "typesafe",
        label: "Type-safe Everywhere",
        tag: "Quality",
        severity: "low",
        lacking:
          "Loose TypeScript configs, missing shared types, and implicit any’s increase risk as code grows.",
        solution:
          "Strict TS configs, shared types across client/server, and enforceable contracts for safer refactors.",
        gradient: "from-blue-400 via-indigo-400 to-violet-400",
      },
      {
        id: "deploy-ci",
        label: "1‑Click Deploy + CI",
        tag: "Speed",
        severity: "medium",
        lacking:
          "No env templates, brittle CI, and manual deploy steps slow teams and cause drift.",
        solution:
          "Env templates, CI-friendly hooks, and pre-baked deploy paths for fast, reproducible releases.",
        gradient: "from-indigo-400 via-purple-400 to-fuchsia-400",
      },
    ],
    []
  );

  const severityColor = (s: Gap["severity"]) => {
    switch (s) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-amber-700 bg-amber-50 border-amber-200";
      default:
        return "text-emerald-700 bg-emerald-50 border-emerald-200";
    }
  };

  return (
    <section
      aria-label="Template comparison showcase"
      className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_0%,rgba(16,185,129,0.10),transparent),radial-gradient(900px_600px_at_100%_100%,rgba(56,189,248,0.10),transparent)]" />
      </div>

      <div className="relative mx-auto mb-10 max-w-2xl text-center">
        <span className={`${CHIP.base} ${CHIP.ghost}`}>Why this template</span>
        <h2 className="mt-3 text-3xl font-semibold text-gray-800 sm:text-4xl">
          What others miss, we ship by default
        </h2>
        <p className="mt-3 text-gray-600">
          A punchy, visual rundown of common gaps and how this stack closes
          them—no hand‑waving.
        </p>
      </div>

      <motion.div
        variants={variants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((item) => (
          <motion.article
            key={item.id}
            variants={variants.item}
            className={`${CARD_BASE} border-white/70`}
          >
            {/* Glow ring */}
            <div
              className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 blur-2xl transition-opacity duration-300 hover:opacity-30`}
            />
            {/* Card content */}
            <div className="relative z-10 h-full rounded-2xl p-5">
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`${CHIP.base} ${CHIP.solid} border-emerald-300`}
                >
                  {item.tag}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] ${severityColor(
                    item.severity
                  )}`}
                  title={`Severity: ${item.severity}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      item.severity === "high"
                        ? "bg-red-500"
                        : item.severity === "medium"
                        ? "bg-amber-500"
                        : "bg-emerald-500"
                    }`}
                  />
                  {item.severity}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.label}
              </h3>

              {/* Split: Lacking vs Solution */}
              <div className="mt-4 grid grid-cols-1 gap-3 rounded-xl border border-white/70 bg-white/50 p-3">
                <div className="relative rounded-lg bg-white/70 p-3 ring-1 ring-gray-200/60">
                  <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                    <svg
                      className="h-3.5 w-3.5 text-rose-500"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 9v2m0 4h.01M7.938 4.5h8.124c1.54 0 2.502 1.667 1.732 3L13.732 19.5c-.77 1.333-2.694 1.333-3.464 0L6.206 7.5c-.77-1.333.192-3 1.732-3z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Lacking elsewhere
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {item.lacking}
                  </p>
                </div>

                <div className="relative rounded-lg bg-gradient-to-br from-white/80 to-emerald-50 p-3 ring-1 ring-emerald-200/60">
                  <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                    <svg
                      className="h-3.5 w-3.5 text-emerald-600"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    How we solve it
                  </div>
                  <p className="text-sm leading-relaxed text-emerald-800">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Gradient meter */}
              <div className="mt-4">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200/70">
                  <div
                    className={`h-full bg-gradient-to-r ${item.gradient}`}
                    style={{
                      width:
                        item.severity === "high"
                          ? "92%"
                          : item.severity === "medium"
                          ? "68%"
                          : "38%",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Corner flourish */}
            <div
              className={`pointer-events-none absolute -right-10 -top-10 size-28 rotate-12 rounded-full bg-gradient-to-tr ${item.gradient} opacity-15 blur-2xl`}
            />
          </motion.article>
        ))}
      </motion.div>

      {/* Callout */}
      <div className="relative mx-auto mt-8 max-w-3xl">
        <div className="rounded-2xl border border-emerald-200/60 bg-white/70 p-5 shadow-md backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                Ship the boring stuff once.
              </h4>
              <p className="text-sm text-gray-600">
                Auth, data, observability, and deploys—prewired so you can focus
                on product.
              </p>
            </div>
            <a
              href="/sign-in"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:brightness-105"
            >
              Get started
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}