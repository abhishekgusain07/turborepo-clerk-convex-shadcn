export function LogoMark() {
  return (
    <div className="relative">
      <span
        className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-indigo-500/30 to-emerald-400/30 blur-md"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 64 64"
        className="relative z-10 h-7 w-7 text-neutral-50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label="SaaS Forge logo"
      >
        <path d="M12 44 L32 12 L52 44" />
        <path d="M22 44 L32 28 L42 44" />
        <rect x="20" y="44" width="24" height="8" rx="2" />
      </svg>
    </div>
  );
}
