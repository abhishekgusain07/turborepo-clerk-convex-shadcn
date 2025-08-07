"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Gap = {
  id: string;
  label: string;
  lacking: string;
  solution: string;
  severity: "low" | "medium" | "high";
  tag: string;
  gradient: string;
};

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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  },
};

const meterWidth = (s: Gap["severity"]) =>
  s === "high" ? "92%" : s === "medium" ? "68%" : "38%";

export function ComparisonShowcase() {
  const data: Gap[] = useMemo(
    () => [
      {
        id: "auth-rbac",
        label: "Auth & RBAC",
        tag: "Security",
        severity: "high",
        lacking:
          "Starters ship basic auth. No hardened sessions, OAuth, or RBAC clarity.",
        solution:
          "Clerk prewired: sessions, OAuth, and extensible role patterns with secure defaults.",
        gradient: "from-emerald-400 via-teal-400 to-sky-400",
      },
      {
        id: "data-realtime",
        label: "Data & Realtime",
        tag: "DX",
        severity: "high",
        lacking:
          "Vague data layers—no realtime, no optimistic UI, no serverless-first story.",
        solution:
          "Convex data: realtime queries, optimistic mutations, serverless performance.",
        gradient: "from-teal-400 via-cyan-400 to-sky-400",
      },
      {
        id: "errors-obs",
        label: "Errors & Observability",
        tag: "Reliability",
        severity: "medium",
        lacking: "No tracing, alerts, or source maps—issues surface late.",
        solution:
          "Sentry: tracing, alerts, and zero-config source maps. Catch issues early.",
        gradient: "from-sky-400 via-blue-400 to-indigo-400",
      },
      {
        id: "app-router-edge",
        label: "App Router + Edge",
        tag: "Performance",
        severity: "medium",
        lacking:
          "Pages Router bias. Little edge streaming, route handlers, or cache patterns.",
        solution:
          "Next.js App Router, streaming layouts, edge handlers, sensible caching.",
        gradient: "from-cyan-400 via-sky-400 to-blue-400",
      },
      {
        id: "typesafe",
        label: "Type‑safe Everywhere",
        tag: "Quality",
        severity: "low",
        lacking: "Loose TS configs and missing shared types invite risk.",
        solution:
          "Strict TS, shared contracts across client/server, safer refactors.",
        gradient: "from-blue-400 via-indigo-400 to-violet-400",
      },
      {
        id: "deploy-ci",
        label: "1‑Click Deploy + CI",
        tag: "Speed",
        severity: "medium",
        lacking: "No env templates, brittle CI, manual releases.",
        solution:
          "Env scaffolds, CI‑friendly hooks, reproducible deploy paths.",
        gradient: "from-indigo-400 via-purple-400 to-fuchsia-400",
      },
    ],
    []
  );

  return (
    <section
      aria-label="Comparison"
      className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_0%,rgba(16,185,129,0.08),transparent),radial-gradient(900px_600px_at_100%_100%,rgba(56,189,248,0.10),transparent)]" />
      </div>

      {/* Header */}
      <div className="relative mx-auto mb-10 max-w-3xl text-center">
        <div className="inline-flex items-center rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gray-700 backdrop-blur">
          Why This Template
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Market Gaps vs Our Defaults
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
          A clear, side‑by‑side read of what most stacks miss—and how we close
          it.
        </p>
      </div>

      {/* Two-column, carded layout with soft glass feel */}
      <div className="relative rounded-3xl border border-white/60 bg-white/50 p-5 shadow-xl backdrop-blur-xl sm:p-7">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Problems */}
          <motion.div
            variants={variants.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <PanelHeading
              title="The Market Misses These."
              subtitle="What’s problematic elsewhere."
              iconTint="text-sky-500"
            />
            {data.map((item) => (
              <motion.div
                key={item.id + "-lacking"}
                variants={variants.item}
                className="group relative rounded-2xl border border-gray-200/70 bg-white/70 p-4 shadow-sm transition-colors hover:border-gray-300"
              >
                <Chip label={item.tag} gradient={item.gradient} />
                <h3 className="mt-2 text-base font-semibold text-gray-900">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-gray-700">{item.lacking}</p>
                <Meter gradient={item.gradient} width={meterWidth(item.severity)} />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Solutions */}
          <motion.div
            variants={variants.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <PanelHeading
              title="We Ship the Fix."
              subtitle="What you get by default."
              iconTint="text-emerald-600"
            />
            {data.map((item) => (
              <motion.div
                key={item.id + "-solution"}
                variants={variants.item}
                className="relative rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-white/80 to-emerald-50 p-4 shadow-sm"
              >
                <Chip label="Solution" gradient={item.gradient} subtle />
                <h3 className="mt-2 text-base font-semibold text-gray-900">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-emerald-900">{item.solution}</p>
                <Meter gradient={item.gradient} width={meterWidth(item.severity)} />
                <Glow gradient={item.gradient} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative mx-auto mt-8 max-w-3xl">
        <div className="rounded-2xl border border-emerald-200/60 bg-white/70 p-5 shadow-md backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-base font-semibold text-gray-900">
                Ship the boring stuff once.
              </h4>
              <p className="text-sm text-gray-600">
                Auth, data, observability, deploys—done. Focus on product.
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

/* ——— UI Partials ——— */

function PanelHeading({
  title,
  subtitle,
  iconTint = "text-sky-500",
}: {
  title: string;
  subtitle: string;
  iconTint?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/60 p-4 backdrop-blur">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow ${iconTint}`}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

function Chip({
  label,
  gradient,
  subtle = false,
}: {
  label: string;
  gradient: string;
  subtle?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide ${
        subtle
          ? "border-white/70 bg-white/70 text-gray-700"
          : "border-emerald-300 text-emerald-700"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
      {label}
    </span>
  );
}

function Meter({ gradient, width }: { gradient: string; width: string }) {
  return (
    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-200/70">
      <div className={`h-full bg-gradient-to-r ${gradient}`} style={{ width }} />
    </div>
  );
}

function Glow({ gradient }: { gradient: string }) {
  return (
    <div
      className={`pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 blur-2xl transition-opacity duration-300 hover:opacity-20`}
    />
  );
}