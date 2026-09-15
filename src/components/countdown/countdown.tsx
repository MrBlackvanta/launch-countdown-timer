"use client";

import type { Remaining } from "@/lib";

import FlipCard from "./flip-card";
import { useCountdown } from "./use-countdown";

type CountdownProps = {
  renderedAt: number;
};

const units: (keyof Remaining)[] = ["days", "hours", "minutes", "seconds"];

function spoken(remaining: Remaining) {
  const [days, hours, minutes, seconds] = units.map((unit) => {
    const value = remaining[unit];

    return `${value} ${value === 1 ? unit.slice(0, -1) : unit}`;
  });

  return `${days}, ${hours}, ${minutes} and ${seconds} until launch.`;
}

export default function Countdown({ renderedAt }: CountdownProps) {
  const { remaining, previous } = useCountdown(renderedAt);

  return (
    <>
      <p role="timer" className="sr-only">
        {spoken(remaining)}
      </p>
      <ul aria-hidden="true" className="grid grid-cols-4 gap-4 md:gap-8">
        {units.map((unit) => (
          <li key={unit} className="grid gap-2.25 md:gap-4">
            <FlipCard value={remaining[unit]} previous={previous[unit]} />
            <p className="text-label v-tracked-label md:text-label-md text-muted text-center uppercase">
              {unit}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
