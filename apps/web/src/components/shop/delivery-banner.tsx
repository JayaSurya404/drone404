import Link from "next/link";
import { ArrowRight, Clock3, ShieldCheck, Zap } from "lucide-react";

export function DeliveryBanner() {
  return (
    <section className="container py-8">
      <div className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.08] via-white/[0.03] to-violet-400/[0.08] p-5 sm:p-6">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Drone delivery zone
            </p>

            <h2 className="mt-2 text-lg font-semibold text-white sm:text-xl">
              Fast, trackable delivery from sky to doorstep.
            </h2>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-white/50">
              Delivery availability and estimated arrival time are calculated
              from your location and current flight conditions.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 text-xs text-white/55">
              <Clock3 className="h-4 w-4 text-cyan-300" />
              Live ETA
            </div>

            <div className="flex items-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              Secure handoff
            </div>

            <div className="flex items-center gap-2 text-xs text-white/55">
              <Zap className="h-4 w-4 text-cyan-300" />
              Smart routing
            </div>

            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-white/[0.1]"
            >
              Learn more
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
