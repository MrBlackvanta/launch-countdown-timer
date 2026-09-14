import FlipCard from "./flip-card";

const units = [
  { label: "Days", value: 8 },
  { label: "Hours", value: 23 },
  { label: "Minutes", value: 55 },
  { label: "Seconds", value: 41 },
];

export default function Countdown() {
  return (
    <ul role="list" className="grid grid-cols-4 gap-4 md:gap-8">
      {units.map(({ label, value }) => (
        <li key={label} className="grid gap-2.25 md:gap-4">
          <FlipCard value={value} />
          <p className="text-label v-tracked-label md:text-label-md text-muted text-center uppercase">
            {label}
          </p>
        </li>
      ))}
    </ul>
  );
}
