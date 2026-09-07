"use client";

export default function GlobalError({ reset }: Readonly<{ error: Error; reset: () => void }>) {
  return (
    <html lang="en">
      <body className="route-state">
        <main>
          <h1>Something went wrong</h1>
          <button type="button" onClick={reset}>Try again</button>
        </main>
      </body>
    </html>
  );
}
