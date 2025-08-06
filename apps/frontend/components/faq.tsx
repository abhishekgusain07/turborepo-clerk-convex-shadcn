"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqContent: FaqItem[] = [
  {
    question: "Who is SaaS Forge for?",
    answer: "SaaS Forge is for developers, startup founders, and teams who want to launch production-ready SaaS applications quickly. It's perfect for those who want a battle-tested tech stack with Next.js, Convex, Clerk, and Sentry pre-configured and integrated, saving weeks of setup time.",
  },
  {
    question: "How much does it cost?",
    answer: "SaaS Forge starter is completely free and open source under the MIT license. You only pay for the individual services you choose to use (like Convex, Clerk, or Sentry). Each service has generous free tiers, so you can start building without any upfront costs and scale as you grow.",
  },
  {
    question: "Which platforms does SaaS Forge support?",
    answer: "SaaS Forge is built with Next.js and supports deployment on Vercel, Netlify, AWS, Google Cloud, and any platform that supports Node.js applications. It works on all modern browsers and is fully responsive for mobile, tablet, and desktop experiences.",
  },
  {
    question: "What makes SaaS Forge different from other Next.js starters?",
    answer: "Unlike basic templates, SaaS Forge provides a complete, production-ready ecosystem. It includes real-time data with Convex, robust authentication with Clerk, error tracking with Sentry, and proper patterns for RBAC, API routes, and deployment. Everything is pre-integrated and tested together.",
  },
  {
    question: "Can I customize and extend SaaS Forge?",
    answer: "Absolutely! SaaS Forge is open source and designed to be your foundation, not a restriction. Modify components, swap out services, customize styling, add features, or restructure as needed. It's your codebase to own and evolve.",
  },
  {
    question: "What kind of support is available?",
    answer: "SaaS Forge includes comprehensive documentation, code comments, and example implementations. The open source community provides support through GitHub discussions. We also offer consulting and priority support for teams who need hands-on guidance.",
  },
  {
    question: "Is SaaS Forge production-ready?",
    answer: "Yes! SaaS Forge is built with production-grade patterns, proper error handling, observability, security best practices, and deployment configurations. The stack (Next.js, Convex, Clerk, Sentry) powers many successful SaaS applications at scale.",
  },
];

export function FAQ({
  parentEnter,
  childEnter,
}: {
  parentEnter: any;
  childEnter: any;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqContent.map((item, index) => (
            <motion.div
              key={index}
              variants={childEnter}
              className={clsx(
                "rounded-2xl overflow-hidden border border-white/70 backdrop-blur-xl shadow-lg",
                openIndex === index
                  ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white"
                  : "bg-gradient-to-br from-white/60 to-white/80 hover:from-white/70 hover:to-white/90 text-gray-900",
                "transition-all duration-300"
              )}
            >
              <button
                className="flex justify-between items-center px-6 py-6 w-full text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white/50"
                onClick={() => toggleFaq(index)}
              >
                <p
                  className={clsx(
                    "text-lg font-semibold",
                    openIndex === index ? "text-white" : "text-gray-800"
                  )}
                >
                  {item.question}
                </p>
                <div className={clsx(
                  "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                  openIndex === index ? "bg-white/20" : "bg-emerald-100/50"
                )}>
                  {openIndex === index ? (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-white/20 mb-4" />
                      <p className="text-white/90 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              Can't find the answer you're looking for? Our community is here to help.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <motion.a
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/saasforge/saasforge/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                Join discussions
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