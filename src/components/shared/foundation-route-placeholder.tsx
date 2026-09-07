type FoundationRoutePlaceholderProps = {
  title?: string;
};

export function FoundationRoutePlaceholder({ title = "This area is being prepared" }: FoundationRoutePlaceholderProps) {
  return (
    <main className="route-state">
      <h1>{title}</h1>
      <p>Drone404 is currently in its application-foundation phase.</p>
    </main>
  );
}
