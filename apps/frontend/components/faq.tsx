"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  category?: "technical" | "pricing" | "support" | "general";
};

const faqs: FAQItem[] = [
  {
    question: "What's included in the SaaS Forge starter?",
    answer: "SaaS Forge includes a complete Next.js 15 setup with App Router, Convex for real-time data and backend functions, Clerk for authentication (magic links + OAuth), Sentry for error tracking, TypeScript configuration, Tailwind CSS, deployment configurations, and example patterns for RBAC, API routes, and more.",
    category: "general",
  },
  {
    question: "Is this production-ready?",
    answer: "Absolutely! SaaS Forge is built with production-grade patterns, proper error handling, observability, security best practices, and deployment configurations. Many companies use this exact stack to power their SaaS applications at scale.",
    category: "technical",
  },
  {
    question: "Can I customize and modify the code?",
    answer: "Yes, completely! SaaS Forge is open source (MIT licensed) and designed to be your foundation, not a restriction. Modify any component, swap out services, change styling, or extend functionality as needed. It's your codebase.",
    category: "general",
  },
  {
    question: "What's the difference between this and other Next.js starters?",
    answer: "Most starters give you basic setup. SaaS Forge gives you a complete, opinionated stack that actually works together: real-time data with Convex, production auth with Clerk, error tracking with Sentry, and deployment-ready configs. It's not just a template—it's a complete foundation.",
    category: "technical",
  },
  {
    question: "Do I need to know all these technologies?",
    answer: "Not at all! The starter comes with clear documentation, example patterns, and sensible defaults. You can start building your features immediately and learn the stack as you go. Each technology is chosen to be developer-friendly.",
    category: "general",
  },
  {
    question: "What kind of support is provided?",
    answer: "The starter includes comprehensive documentation, code comments, and example implementations. For the open source version, support is community-based. We also offer priority support and consultation for teams who need additional help.",
    category: "support",
  },
  {
    question: "Can this handle enterprise-scale applications?",
    answer: "Yes! The technologies in SaaS Forge (Next.js, Convex, Clerk, Sentry) are designed for scale. Convex handles millions of operations, Clerk serves billions of authentications, and Next.js powers some of the largest websites. The patterns included are production-tested.",
    category: "technical",
  },
  {
    question: "How often is SaaS Forge updated?",
    answer: "We regularly update SaaS Forge to stay current with the latest versions of Next.js, Convex, Clerk, and other dependencies. Updates include new features, security patches, and performance improvements.",
    category: "support",
  },
];

export function FAQ({
  parentEnter,
  childEnter,
}: {
  parentEnter: any;
  childEnter: any;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-10 border-t border-white/60"
      aria-label="Frequently Asked Questions"
    >
      {/* Ambient lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_30%_-10%,rgba(16,185,129,0.15),transparent),radial-gradient(900px_600px_at_70%_110%,rgba(56,189,248,0.12),transparent)]" />
      </div>

      <motion.div
        variants={parentEnter}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24"
      >
        {/* Header */}
        <motion.div
          variants={childEnter}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-xs text-emerald-700 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Everything you need to know
          </div>
          <h2 className="mt-4 text-balance bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out.
          </p>
        </motion.div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={childEnter}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/60 to-white/80 shadow-lg backdrop-blur-xl"
            >
              {/* Category indicator */}
              {faq.category && (
                <div className="absolute right-4 top-4">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    faq.category === "technical" 
                      ? "bg-blue-50 text-blue-700 ring-blue-600/20"
                      : faq.category === "pricing"
                      ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20"
                      : faq.category === "support"
                      ? "bg-purple-50 text-purple-700 ring-purple-600/20"
                      : "bg-gray-50 text-gray-700 ring-gray-600/20"
                  }`}>
                    {faq.category}
                  </span>
                </div>
              )}

              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white/50"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between pr-12">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100/50 text-emerald-600 transition-colors group-hover:bg-emerald-200/50"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                  <p className="text-gray-600 leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>

              {/* Subtle gradient accent */}
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent transition-opacity duration-300 ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={childEnter}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-white/50 to-white/70 p-8 shadow-xl backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl">
              Still have questions?
            </h3>
            <p className="mt-2 text-gray-600">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <motion.a
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:support@saasforge.dev"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact support
              </motion.a>
              <motion.a
                whileHover={{ y: -1 }}
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300/60 bg-white/70 px-6 py-3 text-sm text-gray-700 shadow-sm backdrop-blur transition-colors hover:bg-white/90"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                View documentation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}