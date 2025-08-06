// Pricing.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Tier = {
  name: string;
  price: string;
  sub: string;
  cta: { label: string; href: string; variant?: "primary" | "neutral" };
  features: string[];
  accent: string; // tailwind gradient e.g. 'from-emerald-500 to-teal-500'
};

const tiers: Tier[] = [
  {
    name: "Builder",
    price: "Free",
    sub: "Always free until $3K MRR",
    cta: { label: "Start for free", href: "/sign-in", variant: "primary" },
    features: ["Up to $3K MRR processed", "10 projects", "Community support"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "Growth",
    price: "$50",
    sub: "For apps between $3K – $10K MRR",
    cta: { label: "Get started", href: "/sign-in", variant: "neutral" },
    features: ["Up to $10K MRR processed", "Unlimited projects", "Priority support"],
    accent: "from-teal-500 to-sky-500",
  },
  {
    name: "Startup",
    price: "$375",
    sub: "Seed to Series A: $10K – $40K MRR",
    cta: { label: "Let’s chat", href: "/contact", variant: "neutral" },
    features: ["Up to $40K MRR processed", "Unlimited projects", "Slack support"],
    accent: "from-sky-500 to-indigo-500",
  },
];

export function Pricing({
  parentEnter,
  childEnter,
}: {
  parentEnter: any;
  childEnter: any;
}) {
  return (
    <section
      id="pricing"
      className="relative z-10 border-t border-white/60"
      aria-label="Pricing"
    >
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
            Start for free
          </h2>
          <p className="mt-3 text-gray-600">
            Simple, transparent pricing. Free, or a flat fee. No extra
            transaction fees from us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={childEnter}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
            >
              {/* Glow */}
              <div
                className={`pointer-events-none absolute inset-0 scale-[0.92] rounded-2xl bg-gradient-to-r ${tier.accent} blur-3xl opacity-25 transition-opacity duration-300 group-hover:opacity-40`}
              />

              {/* Card */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/40 to-white/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-emerald-200/60 group-hover:shadow-2xl">
                {/* Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-300/60 bg-white/80 px-3 py-2 text-xs text-gray-700">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${tier.accent}`}
                  />
                  {tier.name}
                </div>

                {/* Price */}
                <div className="mb-1 text-3xl font-semibold text-gray-800">
                  {tier.price}
                </div>
                <div className="mb-5 text-sm text-gray-600">{tier.sub}</div>

                {/* CTA */}
                {tier.cta.variant === "primary" ? (
                  <Link
                    href={tier.cta.href}
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-4 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(56,189,248,0.45)] transition hover:brightness-105"
                  >
                    {tier.cta.label}
                    <svg
                      className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
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
                  </Link>
                ) : (
                  <Link
                    href={tier.cta.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300/60 bg-white/80 px-4 py-2.5 text-sm text-gray-700 shadow-sm backdrop-blur transition-colors hover:bg-white/90"
                  >
                    {tier.cta.label}
                  </Link>
                )}

                {/* Features */}
                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300/60 bg-white/80">
                        <svg
                          className="h-3.5 w-3.5 text-emerald-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          variants={childEnter}
          className="mt-8 text-center text-xs text-gray-600"
        >
          SaaS Forge integrates with Stripe Billing. Stripe’s fees still apply.
          Need above $40K MRR? Contact us for custom plans.
        </motion.p>
      </motion.div>
    </section>
  );
}