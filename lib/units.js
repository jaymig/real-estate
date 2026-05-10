export const units = [
  {
    id: "2316-prince-st",
    address: "2316 Prince St., Berkeley, CA",
    status: "Rented",
    rentalPrice: 750,
    priceLabel: "$750 / month",
    bedrooms: 1,
    bathrooms: 1,
    squareFootage: 625,
    parking: false,
    laundry: false,
    laundryLabel: "No",
    features: ["1 bedroom", "1 bath", "625 sf"]
  },
  {
    id: "2318-prince-st",
    address: "2318 Prince St., Berkeley, CA",
    status: "Rented",
    rentalPrice: 2244,
    priceLabel: "$2,244 / month",
    bedrooms: 1,
    bathrooms: 1,
    squareFootage: 625,
    parking: false,
    laundry: false,
    laundryLabel: "No",
    features: ["1 bedroom", "1 bath", "625 sf"]
  },
  {
    id: "3038-halcyon-ct",
    address: "3038 Halcyon Ct., Berkeley, CA",
    status: "Rented",
    rentalPrice: 3600,
    priceLabel: "$3,600 / month",
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 925,
    parking: true,
    laundry: true,
    laundryLabel: "Yes, in building",
    features: ["2 bedrooms", "2 baths", "925 sf", "Parking", "Laundry in building"]
  }
];

export function getUnitById(id) {
  return units.find((unit) => unit.id === id);
}

