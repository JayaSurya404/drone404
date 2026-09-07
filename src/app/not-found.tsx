import Link from "next/link";

export default function NotFound() {
  return (
    <main className="route-state">
      <h1>Page not found</h1>
      <p>This route is not available yet.</p>
      <Link href="/">Return to Drone404</Link>
    </main>
  );
}
