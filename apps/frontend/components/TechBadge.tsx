"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

type Variant =
  | "neutral"
  | "green"
  | "purple"
  | "orange"
  | "cyan"
  | "blue"
  | "pink";

const palette: Record<Variant, { from: string; to: string; text: string }> = {
  neutral: {
    from: "from-neutral-200/90",
    to: "to-neutral-400/90",
    text: "text-neutral-900",
  },
  green: {
    from: "from-emerald-300/90",
    to: "to-emerald-400/90",
    text: "text-emerald-950",
  },
  purple: {
    from: "from-violet-300/90",
    to: "to-fuchsia-300/90",
    text: "text-violet-950",
  },
  orange: {
    from: "from-orange-300/90",
    to: "to-amber-300/90",
    text: "text-orange-950",
  },
  cyan: {
    from: "from-cyan-300/90",
    to: "to-sky-300/90",
    text: "text-cyan-950",
  },
  blue: {
    from: "from-blue-300/90",
    to: "to-indigo-300/90",
    text: "text-blue-950",
  },
  pink: {
    from: "from-pink-300/90",
    to: "to-rose-300/90",
    text: "text-rose-950",
  },
};

export function TechBadge({
  logo,
  variant = "neutral",
}: {
  logo: JSX.Element;
  variant?: Variant;
}) {
  const colors = palette[variant];
  return (
    <motion.span
      whileHover={{ y: -1 }}
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} px-3 py-1.5 ${colors.text}`}
      role="img"
    >
      <div className="h-4 w-4 [&>svg]:h-full [&>svg]:w-full">{logo}</div>
    </motion.span>
  );
}
