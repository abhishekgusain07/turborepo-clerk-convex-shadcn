"use client";

import { useMutation, useQuery } from "convex/react";
import { OrganizationSwitcher, useOrganization, UserButton } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";
import { api } from "@workspace/backend/_generated/api";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const users = useQuery(api.users.getmany);
  const addUser = useMutation(api.users.addUser);
  const removeUsers = useMutation(api.users.removeUsers);
  const { organization } = useOrganization();
  const [search, setSearch] = useState("");

  const filtered =
    (users ?? []).filter((u: any) =>
      `${u.name ?? ""} ${u.email ?? ""}`.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="relative min-h-screen bg-[radial-gradient(900px_500px_at_15%_0%,rgba(16,185,129,0.08),transparent),radial-gradient(900px_600px_at_100%_100%,rgba(56,189,248,0.10),transparent)] py-3">
      {/* Shell */}
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="relative hidden border-r border-white/50 bg-white/40 backdrop-blur-xl lg:block">
          <div className="sticky top-0 flex h-screen flex-col p-4">
            {/* Brand */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400/80 via-teal-400/80 to-sky-400/80 shadow" />
              <div className="text-lg font-semibold text-gray-900">
                Dashboard
              </div>
            </div>

            {/* Org switcher */}
            <div className="mb-6 rounded-xl border border-white/60 bg-white/60 p-2 shadow-sm">
              <OrganizationSwitcher hidePersonal={true} />
            </div>

            {/* Nav */}
            <nav className="space-y-1">
              {[
                { label: "Overview", icon: OverviewIcon },
                { label: "Users", icon: UsersIcon },
                { label: "Projects", icon: GridIcon },
                { label: "Settings", icon: SettingsIcon },
              ].map((item) => (
                <a
                  key={item.label}
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-white/70 hover:shadow-sm"
                  href="#"
                >
                  <item.icon className="h-4 w-4 text-gray-500 group-hover:text-emerald-600" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="mt-auto">
              <div className="rounded-xl border border-white/60 bg-white/60 p-3 shadow-sm">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Session
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">You</div>
                  <UserButton />
                </div>
              </div>
              <p className="mt-3 text-center text-[11px] text-gray-500">
                Polished. Refined. Seamless.
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-h-screen flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 border-b border-white/60 bg-white/60 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
              {/* Mobile: org + menu */}
              <div className="flex items-center gap-3 lg:hidden">
                <div className="rounded-lg border border-white/60 bg-white/70 p-1">
                  <OrganizationSwitcher hidePersonal={true} />
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full max-w-xl">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search users..."
                  className="w-full rounded-xl border border-white/70 bg-white/70 px-10 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-sm outline-none ring-0 focus:border-emerald-200"
                />
                <SearchIcon className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              <div className="hidden items-center gap-2 lg:flex">
                <Button
                  className="rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white hover:brightness-105"
                  onClick={() => addUser()}
                >
                  Add User
                </Button>
                <Button
                  variant="secondary"
                  className="rounded-full border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
                  onClick={() => removeUsers()}
                >
                  Remove All
                </Button>
                <UserButton />
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6">
            {/* KPI cards */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              <Kpi
                title="Total Users"
                value={(users?.length ?? 0).toString()}
                gradient="from-emerald-400 via-teal-400 to-sky-400"
              />
              <Kpi
                title="Active Members in Organization"
                value={organization?.membersCount.toString()!}
                gradient="from-teal-400 via-cyan-400 to-sky-400"
              />
              <Kpi
                title="Latency (p95)"
                value="142ms"
                gradient="from-sky-400 via-blue-400 to-indigo-400"
              />
              <Kpi
                title="Errors (24h)"
                value="0"
                gradient="from-indigo-400 via-purple-400 to-fuchsia-400"
              />
            </motion.div>

            {/* Actions (mobile) */}
            <div className="mt-4 flex gap-2 lg:hidden">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white hover:brightness-105"
                onClick={() => addUser()}
              >
                Add User
              </Button>
              <Button
                variant="secondary"
                className="w-full rounded-full border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
                onClick={() => removeUsers()}
              >
                Remove All
              </Button>
            </div>

            {/* Users table */}
            <section className="mt-6 rounded-3xl border border-white/60 bg-white/60 p-4 shadow-xl backdrop-blur-xl sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Users</h3>
                  <p className="text-sm text-gray-600">
                    Live list powered by Convex. Use the actions to add or clear.
                  </p>
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <span className="rounded-full border border-white/70 bg-white/70 px-2.5 py-1 text-xs text-gray-700">
                    {filtered.length} shown
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/70">
                <div className="grid grid-cols-12 border-b border-gray-100/80 bg-gray-50/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
                  <div className="col-span-4">Name</div>
                  <div className="col-span-5">Email</div>
                  <div className="col-span-3 text-right">Created</div>
                </div>

                <ul className="divide-y divide-gray-100/80">
                  {(users ? filtered : new Array(3).fill(null)).map(
                    (u: any, i: number) => (
                      <li
                        key={u?._id ?? i}
                        className="grid grid-cols-12 items-center px-4 py-3 text-sm"
                      >
                        <div className="col-span-4 flex items-center gap-3">
                          <Avatar seed={u?.email ?? `placeholder-${i}`} />
                          <div className="min-w-0">
                            <div className="truncate font-medium text-gray-900">
                              {u?.name ?? "Loading…"}
                            </div>
                            <div className="truncate text-xs text-gray-500">
                              {u ? "Member" : "Fetching…"}
                            </div>
                          </div>
                        </div>
                        <div className="col-span-5 truncate text-gray-700">
                          {u?.email ?? "—"}
                        </div>
                        <div className="col-span-3 text-right text-gray-600">
                          {u?.createdAt
                            ? new Date(u.createdAt).toLocaleDateString()
                            : "—"}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="mx-auto w-full max-w-7xl px-4 py-6 text-center text-xs text-gray-500">
            Crafted with an emerald/teal/sky palette. All data is mock except Convex
            users list.
          </footer>
        </div>
      </div>
    </div>
  );
}

/* ——— Components ——— */

function Kpi({
  title,
  value,
  gradient,
}: {
  title: string;
  value: string;
  gradient: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/60 p-4 shadow-md backdrop-blur">
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-12 rounded-full bg-gradient-to-tr ${gradient} opacity-20 blur-2xl`}
      />
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-600">
        {title}
      </div>
      <div className="mt-2 text-3xl font-semibold text-gray-900">{value}</div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-200/70">
        <div className={`h-full w-2/3 bg-gradient-to-r ${gradient}`} />
      </div>
    </div>
  );
}

function Avatar({ seed }: { seed: string }) {
  const hash = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const color = [
    "bg-emerald-200",
    "bg-teal-200",
    "bg-sky-200",
    "bg-indigo-200",
  ][hash % 4];
  const initials =
    seed?.split?.("@")?.[0]
      ?.split(/[.-_]/)
      ?.slice(0, 2)
      ?.map((s) => s?.[0]?.toUpperCase() || "")
      ?.join("") || "U";

  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-full ${color} text-xs font-bold text-gray-800`}
    >
      {initials}
    </div>
  );
}

/* ——— Icons ——— */

function SearchIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 21l-4.2-4.2M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function OverviewIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 13h6V4H4v9zm0 7h6v-5H4v5zm10 0h6V11h-6v9zm0-18v5h6V2h-6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UsersIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M12 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM20 8v6M23 11h-6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function GridIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function SettingsIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3.4a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.43 3.7l.06.06A1.65 1.65 0 0 0 9.3 4.1H9.4a1.65 1.65 0 0 0 1-1.51V2.5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.5.5-.65 1.27-.33 1.82.21.39.6.67 1.04.74h.09a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}