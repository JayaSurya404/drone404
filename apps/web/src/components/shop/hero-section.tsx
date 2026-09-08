"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Plane, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.12),transparent_28%)]" />

      <div className="grid-background absolute inset-0 opacity-30" />

      <div className="container relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Next-generation last-mile delivery
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Your essentials.
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Delivered by air.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Shop everyday essentials and experience intelligent drone
              delivery designed for speed, visibility, and safety.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Explore the shop
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                How it works
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-xs text-white/45">
              <span className="flex items-center gap-2">
                <Plane className="h-4 w-4 text-cyan-300" />
                Smart routing
              </span>

              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Live tracking
              </span>

              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Secure delivery
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="glass relative aspect-square overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.13),transparent_45%)]" />

              <div className="absolute inset-8 rounded-full border border-cyan-300/10" />
              <div className="absolute inset-20 rounded-full border border-violet-400/10" />
              <div className="absolute inset-[30%] rounded-full border border-white/10" />

              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_50px_rgba(34,211,238,0.15)]">
                <Plane className="h-10 w-10 -rotate-12 text-cyan-300" />
              </div>

              <div className="absolute left-[17%] top-[22%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              <div className="absolute right-[20%] top-[34%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(196,181,253,0.9)]" />
              <div className="absolute bottom-[23%] left-[28%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/40">Delivery network</p>
                    <p className="mt-1 text-sm font-medium text-white">
                      SkyNav autonomous route
                    </p>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Online
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
