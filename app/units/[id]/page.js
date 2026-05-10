import Link from "next/link";
import { notFound } from "next/navigation";
import { getUnitById, units } from "../../../lib/units";

export function generateStaticParams() {
  return units.map((unit) => ({ id: unit.id }));
}

export function generateMetadata({ params }) {
  const unit = getUnitById(params.id);
  if (!unit) {
    return { title: "Unit not found" };
  }
  return {
    title: `${unit.address} | Berkeley Rental Units`,
    description: `Details for ${unit.address}`
  };
}

export default function UnitDetailsPage({ params }) {
  const unit = getUnitById(params.id);

  if (!unit) {
    notFound();
  }

  return (
    <main className="page-shell narrow">
      <Link className="back-link" href="/">← Back to all units</Link>

      <article className="details-card">
        <div className="details-heading">
          <div>
            <p className="eyebrow">Unit Details</p>
            <h1>{unit.address}</h1>
          </div>
          <span className="status large">{unit.status}</span>
        </div>

        <p className="price detail-price">{unit.priceLabel}</p>

        <section className="detail-grid" aria-label="Unit specifications">
          <Detail label="Bedrooms" value={unit.bedrooms} />
          <Detail label="Bathrooms" value={unit.bathrooms} />
          <Detail label="Square Footage" value={`${unit.squareFootage} sf`} />
          <Detail label="Parking" value={unit.parking ? "Yes" : "No"} />
          <Detail label="Laundry" value={unit.laundryLabel} />
        </section>

        <section className="features-section">
          <h2>Features</h2>
          <ul>
            {unit.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div className="detail-item">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
