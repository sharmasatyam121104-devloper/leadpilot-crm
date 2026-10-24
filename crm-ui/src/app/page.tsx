"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowRight, Bot, Check, Clock, Kanban, Users } from "lucide-react";
import { THEME } from "@/lib/theme";

const leads = [
  {
    initials: "RM",
    name: "Rahul Mehta",
    company: "Acme Technologies",
    status: "Qualified",
    value: "₹85,000",
    color: THEME.colors.badge1.bg,
    textColor: THEME.colors.badge1.text,
  },
  {
    initials: "AD",
    name: "Anjali Deshpande",
    company: "Bright Solutions",
    status: "Contacted",
    value: "₹1,20,000",
    color: THEME.colors.badge2.bg,
    textColor: THEME.colors.badge2.text,
  },
  {
    initials: "PT",
    name: "Prakash Traders",
    company: "Prakash Traders",
    status: "New lead",
    value: "₹45,000",
    color: THEME.colors.badge3.bg,
    textColor: THEME.colors.badge3.text,
  },
];

const features = [
  {
    number: "01",
    title: "Manage every lead",
    description:
      "Keep customer details, conversations, and deal information in one organized workspace. No more scattered spreadsheets.",
    icon: Users,
  },
  {
    number: "02",
    title: "Never miss a follow-up",
    description:
      "Create reminders, track pending activities, and give your sales team a clear view of what needs attention next.",
    icon: Clock,
  },
  {
    number: "03",
    title: "See your sales pipeline",
    description:
      "Understand where every deal stands, spot bottlenecks, and track opportunities from first contact to closing.",
    icon: Kanban,
  },
];

const stats = [
  { label: "Total leads", value: "248", change: "+12%" },
  { label: "Open deals", value: "64", change: "+8%" },
  { label: "Pipeline value", value: "₹12.4L", change: "+18%" },
];

const steps = [
  {
    step: "01",
    title: "Add your leads",
    description:
      "Bring customer details and opportunities into one shared workspace.",
  },
  {
    step: "02",
    title: "Track every activity",
    description:
      "Keep calls, meetings, notes, and follow-up reminders organized.",
  },
  {
    step: "03",
    title: "Move deals forward",
    description:
      "Use your pipeline and team insights to focus on the next action.",
  },
];

const aiSuggestions = [
  { name: "Rahul Mehta", detail: "Proposal sent · Follow-up pending" },
  {
    name: "Anjali Deshpande",
    detail: "Demo completed · Next step not scheduled",
  },
];

export default function HomePage() {
  const theme = {
    background: THEME.colors.background,
    surface: THEME.colors.surface,
    primary: THEME.colors.primary,
    accent: THEME.colors.border,
    text: THEME.colors.textPrimary,
    muted: THEME.colors.textSecondary,
    buttonText: THEME.colors.buttonText,
  };

  const cssVars = {
    "--page-bg": theme.background,
    "--surface": theme.surface,
    "--primary": theme.primary,
    "--border": theme.accent,
    "--text": theme.text,
    "--muted": theme.muted,
    "--button-text": theme.buttonText,
  } as CSSProperties;

  const [year, setYear] = useState(2026);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return (
    <main
      style={{
        ...cssVars,
        backgroundColor: theme.background,
        color: theme.text,
      }}
      className="min-h-screen"
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          borderColor: theme.accent,
          backgroundColor: THEME.colors.overlayLight,
        }}
      >
        <nav className={`${THEME.spacing.container} flex h-16 items-center justify-between gap-4 sm:h-18`}>
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-[10px] text-base font-bold"
              style={{ backgroundColor: theme.primary, color: theme.buttonText }}
            >
              L
            </span>
            <span className="text-[17px] font-semibold tracking-tight">
              LeadPilot
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#features"
              className="transition-opacity hover:opacity-70"
              style={{ color: theme.muted }}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="transition-opacity hover:opacity-70"
              style={{ color: theme.muted }}
            >
              How it works
            </a>
            <a
              href="#ai"
              className="transition-opacity hover:opacity-70"
              style={{ color: theme.muted }}
            >
              AI assistant
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className={`${THEME.radius.pill} hidden px-4 py-2 text-sm font-medium transition-colors hover:bg-[${THEME.colors.hoverOverlay}] sm:inline-flex`}
              style={{ color: theme.text }}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className={`${THEME.radius.pill} inline-flex px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-85`}
              style={{ backgroundColor: theme.primary, color: theme.buttonText }}
            >
              Get started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className={`${THEME.spacing.container} grid items-center gap-14 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-12 lg:gap-14 lg:pb-28 lg:pt-24`}>
        <div className="lg:col-span-5">
          <p
            className={`inline-flex items-center gap-2 ${THEME.radius.pill} border px-3.5 py-1.5 text-[13px] font-medium`}
            style={{
              borderColor: theme.accent,
              backgroundColor: theme.surface,
              color: theme.muted,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: theme.primary }}
            />
            A smarter workspace for sales teams
          </p>

          <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.1rem]">
            Turn every lead into a{" "}
            <span
              className="px-1 pb-1"
              style={{
                backgroundImage: `linear-gradient(to top, ${THEME.colors.border} 30%, transparent 30%)`,
              }}
            >
              real opportunity.
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
            style={{ color: theme.muted }}
          >
            Keep your customers, follow-ups, and sales pipeline in one place.
            Let your team focus on building relationships and closing deals.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/register"
              className={`${THEME.radius.pill} inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold transition-transform hover:-translate-y-0.5`}
              style={{ backgroundColor: theme.primary, color: theme.buttonText }}
            >
              Start managing leads
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            </Link>
            <a
              href="#features"
              className={`${THEME.radius.pill} inline-flex items-center justify-center gap-2 border px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-[${THEME.colors.hoverOverlay}]`}
              style={{ borderColor: theme.accent, color: theme.text }}
            >
              Explore features
            </a>
          </div>

          <ul
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-6"
            style={{ borderColor: theme.accent }}
          >
            {["Organized customer data", "Clear sales pipeline"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm"
                style={{ color: theme.muted }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ backgroundColor: theme.accent, color: theme.primary }}
                >
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard preview */}
        <div className="lg:col-span-7">
          <div
            className={`overflow-hidden ${THEME.radius.lg} border ${THEME.shadow.preview}`}
            style={{ backgroundColor: theme.surface, borderColor: theme.accent }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center justify-between border-b px-5 py-4 sm:px-6"
              style={{ borderColor: theme.accent }}
            >
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: theme.accent }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: theme.accent }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: theme.accent }} />
              </div>
              <span
                className="rounded-lg border px-3 py-1.5 text-xs font-medium"
                style={{ borderColor: theme.accent, color: theme.muted }}
              >
                This month ▾
              </span>
            </div>

            {/* Panel header */}
            <div className="px-5 pt-5 sm:px-6 sm:pt-6">
              <p className="text-lg font-semibold">Sales overview</p>
              <p className="mt-1 text-sm" style={{ color: theme.muted }}>
                Your team&apos;s activity at a glance
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 px-5 py-5 sm:grid-cols-3 sm:gap-4 sm:px-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`flex h-full flex-col ${THEME.radius.md} border p-4 sm:p-5`}
                  style={{
                    backgroundColor: theme.background,
                    borderColor: theme.accent,
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm" style={{ color: theme.muted }}>
                      {stat.label}
                    </p>
                    <span
                      className={`${THEME.radius.pill} px-2 py-0.5 text-[11px] font-medium`}
                      style={{ backgroundColor: theme.accent, color: theme.primary }}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <p className="mt-auto pt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent leads */}
            <div className={`mx-5 mb-5 overflow-hidden ${THEME.radius.md} border sm:mx-6 sm:mb-6`}>
              <div
                className="flex items-center justify-between border-b px-4 py-4 sm:px-5"
                style={{ backgroundColor: theme.background, borderColor: theme.accent }}
              >
                <p className="text-sm font-semibold">Recent leads</p>
                <span className="flex items-center gap-1 text-sm" style={{ color: theme.muted }}>
                  View all
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>

              <div>
                {leads.map((lead, index) => (
                  <div
                    key={lead.name}
                    className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5"
                    style={{
                      borderBottom:
                        index !== leads.length - 1
                          ? `1px solid ${theme.accent}`
                          : "none",
                    }}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center ${THEME.radius.pill} text-xs font-semibold`}
                        style={{ backgroundColor: lead.color, color: lead.textColor }}
                      >
                        {lead.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{lead.name}</p>
                        <p className="mt-0.5 truncate text-xs" style={{ color: theme.muted }}>
                          {lead.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center sm:block sm:text-right">
                      <span
                        className={`${THEME.radius.pill} px-2.5 py-1 text-xs font-medium sm:hidden`}
                        style={{ backgroundColor: lead.color, color: lead.textColor }}
                      >
                        {lead.status}
                      </span>
                      <div className="hidden sm:block">
                        <p className="text-sm font-semibold">{lead.value}</p>
                        <span
                          className={`mt-1.5 inline-block ${THEME.radius.pill} px-2.5 py-1 text-xs font-medium`}
                          style={{ backgroundColor: lead.color, color: lead.textColor }}
                        >
                          {lead.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="border-t px-5 py-3 text-center text-xs"
              style={{ borderColor: theme.accent, color: theme.muted }}
            >
              Illustrative dashboard preview · Sample data
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className={`scroll-mt-20 border-y ${THEME.spacing.section}`}
        style={{ backgroundColor: theme.surface, borderColor: theme.accent }}
      >
        <div className={THEME.spacing.container}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: theme.primary }}
              >
                Everything in one place
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
                Less chasing.
                <br />
                More closing.
              </h2>
            </div>
            <p
              className="max-w-md text-base leading-7 sm:text-lg sm:leading-8 lg:col-span-5 lg:justify-self-end"
              style={{ color: theme.muted }}
            >
              Give your sales team a simple system to organize leads, follow up
              on time, and understand every deal.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.number}
                    className={`flex h-full flex-col ${THEME.radius.md} border p-7 transition-shadow hover:${THEME.shadow.card} sm:p-8`}
                    style={{
                      backgroundColor: theme.background,
                      borderColor: theme.accent,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center ${THEME.radius.sm}`}
                        style={{ backgroundColor: theme.primary, color: theme.buttonText }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span
                        className={`${THEME.font.mono} text-sm font-medium`}
                        style={{ color: theme.muted }}
                      >
                      {feature.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7" style={{ color: theme.muted }}>
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* AI assistant */}
      <section
        id="ai"
        className={`${THEME.spacing.container} grid scroll-mt-20 items-center gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-14 lg:py-28`}
      >
        <div className="lg:col-span-5">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: theme.primary }}
          >
            Your AI sales assistant
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            Know what to do next.
          </h2>
          <p
            className="mt-6 max-w-lg text-base leading-7 sm:text-lg sm:leading-8"
            style={{ color: theme.muted }}
          >
            Help your team make sense of customer information, prepare
            follow-ups, and identify opportunities with an AI assistant built
            into the CRM.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Summarize customer and deal history",
              "Draft personalized follow-up messages",
              "Get insights from your sales pipeline",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center ${THEME.radius.pill}`}
                  style={{ backgroundColor: theme.accent, color: theme.primary }}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-base leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI Assistant Preview */}
        <div className="lg:col-span-7">
          <div
            className={`mx-auto max-w-xl ${THEME.radius.lg} border p-4 ${THEME.shadow.ai} sm:p-6 lg:mx-0`}
            style={{ backgroundColor: theme.surface, borderColor: theme.accent }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center ${THEME.radius.md}`}
                  style={{ backgroundColor: theme.primary, color: theme.buttonText }}
                >
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold">LeadPilot AI</p>
                  <p className="text-sm" style={{ color: theme.muted }}>
                    Sales assistant preview
                  </p>
                </div>
              </div>
              <span
                className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: theme.accent, color: theme.muted }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: theme.primary }}
                />
                Preview
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div
                className={`ml-auto max-w-[88%] ${THEME.radius.md} rounded-br-md p-4 text-sm leading-6 sm:text-[15px]`}
                style={{ backgroundColor: theme.primary, color: theme.buttonText }}
              >
                Which leads should I follow up with today?
              </div>

              <div
                className={`max-w-[96%] ${THEME.radius.md} rounded-bl-md border p-4 sm:p-5`}
                style={{ backgroundColor: theme.background, borderColor: theme.accent }}
              >
                <p className="text-sm leading-6">
                  Based on your pending activities, these leads may need
                  attention:
                </p>

                <div className="mt-4 space-y-2.5">
                  {aiSuggestions.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center gap-3 ${THEME.radius.sm} border p-3`}
                      style={{ backgroundColor: theme.surface, borderColor: theme.accent }}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center ${THEME.radius.pill} text-xs font-semibold`}
                        style={{ backgroundColor: theme.accent, color: theme.primary }}
                      >
                        {item.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{item.name}</p>
                        <p className="mt-0.5 truncate text-xs" style={{ color: theme.muted }}>
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-5" style={{ color: theme.muted }}>
                  Example response · Actual AI insights depend on connected CRM
                  data and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How it works */}
      <section
        id="how-it-works"
        className={`scroll-mt-20 border-y ${THEME.spacing.section}`}
        style={{ backgroundColor: theme.surface, borderColor: theme.accent }}
      >
        <div className={THEME.spacing.container}>
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: theme.primary }}
            >
              Simple by design
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
              Get your sales team moving.
            </h2>
            <p className="mt-5 text-base leading-7 sm:text-lg" style={{ color: theme.muted }}>
              Three steps is all it takes to bring your leads, activities, and
              pipeline into one shared workspace.
            </p>
          </div>

          <div className="relative mt-14 grid gap-12 sm:mt-16 md:grid-cols-3 md:gap-8">
            <div
              className="absolute left-[16%] right-[16%] top-7 hidden border-t border-dashed md:block"
              style={{ borderColor: theme.accent }}
              aria-hidden="true"
            />
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center ${THEME.radius.md} border ${THEME.font.mono} text-sm font-semibold`}
                  style={{
                    backgroundColor: theme.surface,
                    borderColor: theme.accent,
                    color: theme.primary,
                  }}
                >
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p
                  className="mt-3 max-w-xs text-[15px] leading-7 md:max-w-none"
                  style={{ color: theme.muted }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${THEME.spacing.container} py-20 sm:py-24`}>
        <div
          className={`relative mx-auto max-w-7xl overflow-hidden rounded-4xl px-6 py-16 text-center sm:px-12 sm:py-24`}
          style={{ backgroundColor: theme.primary, color: theme.buttonText }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border"
            style={{ borderColor: THEME.colors.overlayWhite14 }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full border"
            style={{ borderColor: THEME.colors.overlayWhite08 }}
          />

          <p
            className="relative text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme.buttonText }}
          >
            Ready when you are
          </p>
          <h2 className="relative mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Give your sales team a better way to work.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base leading-7 opacity-80 sm:text-lg">
            Bring your leads, follow-ups, and opportunities together with
            LeadPilot CRM.
          </p>

          <Link
            href="/register"
            className={`relative mt-9 inline-flex items-center gap-2 ${THEME.radius.pill} px-7 py-3.5 text-[15px] font-semibold transition-transform hover:-translate-y-0.5`}
            style={{ backgroundColor: theme.surface, color: theme.primary }}
          >
            Get started with LeadPilot
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: theme.accent }}>
        <div className={`${THEME.spacing.container} flex flex-col items-center gap-5 py-10 text-center md:flex-row md:justify-between md:text-left`}>
          <Link href="/" className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-[10px] text-[15px] font-bold"
              style={{ backgroundColor: theme.primary, color: theme.buttonText }}
            >
              L
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              LeadPilot
            </span>
          </Link>

          <p className="text-sm" style={{ color: theme.muted }}>
            © {year} LeadPilot. Built for better sales
            workflows.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/login"
              className="transition-opacity hover:opacity-70"
              style={{ color: theme.muted }}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="transition-opacity hover:opacity-70"
              style={{ color: theme.muted }}
            >
              Register
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}