import Link from "next/link";
import { units } from "../lib/units";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Real Estate Portfolio</p>
        <h1>Berkeley Rental Units</h1>
        <p className="hero-copy">
          View current unit information without a backend database. Unit data is stored directly in the application code for this first version.
        </p>
      </section>

      <section className="unit-grid" aria-label="Rental units">
        {units.map((unit) => (
          <article className="unit-card" key={unit.id}>
            <div className="card-header">
              <h2>{unit.address}</h2>
              <span className="status">{unit.status}</span>
            </div>
            <p className="price">{unit.priceLabel}</p>
            <dl className="summary-list">
              <div>
                <dt>Beds / Baths</dt>
                <dd>{unit.bedrooms} / {unit.bathrooms}</dd>
              </div>
              <div>
                <dt>Square Footage</dt>
                <dd>{unit.squareFootage} sf</dd>
              </div>
            </dl>
            <Link className="button" href={`/units/${unit.id}`}>
              View details
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
