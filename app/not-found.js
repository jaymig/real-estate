import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell narrow">
      <section className="details-card">
        <p className="eyebrow">404</p>
        <h1>Unit not found</h1>
        <p>The requested unit does not exist in this version of the app.</p>
        <Link className="button" href="/">View all units</Link>
      </section>
    </main>
  );
}