import { ArrowUpRight, Compass, Sparkles } from "lucide-react";

export default function FoundationPage() {
  return (
    <main className="foundation-shell">
      <div className="foundation-orb foundation-orb--one" aria-hidden="true" />
      <div className="foundation-orb foundation-orb--two" aria-hidden="true" />
      <section className="foundation-card" aria-labelledby="foundation-title">
        <div className="foundation-brand">
          <span className="foundation-mark" aria-hidden="true"><Compass size={18} /></span>
          <span>Drone404</span>
        </div>
        <div className="foundation-content">
          <p className="foundation-eyebrow"><Sparkles size={14} aria-hidden="true" /> Platform status</p>
          <h1 id="foundation-title">Foundation initialized</h1>
          <p className="foundation-copy">
            The Drone404 platform is being built. Its application foundation is ready for the next phase.
          </p>
        </div>
        <div className="foundation-footer">
          <span>System foundation</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}
