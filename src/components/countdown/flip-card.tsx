import { Fragment } from "react";

type FlipCardProps = {
  value: number;
  previous: number;
};

type HalfProps = {
  digits: string;
  className?: string;
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function UpperHalf({ digits, className = "" }: HalfProps) {
  return (
    <div
      className={`bg-card-shade absolute inset-x-0 top-0 h-1/2 overflow-clip rounded-t-sm md:rounded-t-lg ${className}`}
    >
      <span className="text-digit v-tracked-digit md:text-digit-md text-accent-shade absolute inset-x-0 bottom-0 translate-y-1/2 text-center">
        {digits}
      </span>
    </div>
  );
}

function LowerHalf({ digits, className = "" }: HalfProps) {
  return (
    <div
      className={`bg-card-face absolute inset-x-0 bottom-0 h-1/2 overflow-clip rounded-b-sm md:rounded-b-lg ${className}`}
    >
      <span className="text-digit v-tracked-digit md:text-digit-md text-accent absolute inset-x-0 top-0 -translate-y-1/2 text-center">
        {digits}
      </span>
    </div>
  );
}

export default function FlipCard({ value, previous }: FlipCardProps) {
  return (
    <div className="bg-card-shell h-17.75 rounded-lg md:h-37.5">
      <div className="relative h-16.5 perspective-near md:h-35 md:perspective-normal">
        <UpperHalf digits={pad(value)} />
        <LowerHalf digits={pad(previous)} />
        {value !== previous && (
          <Fragment key={value}>
            <UpperHalf
              digits={pad(previous)}
              className="animate-flip-out origin-bottom backface-hidden motion-reduce:hidden"
            />
            <LowerHalf
              digits={pad(value)}
              className="animate-flip-in origin-top backface-hidden motion-reduce:animate-none"
            />
          </Fragment>
        )}
        <span className="bg-card-fold absolute inset-x-0 top-1/2 h-px" />
        <span className="bg-card-shell absolute top-1/2 -left-0.75 size-1.5 -translate-y-1/2 rounded-full md:-left-1.5 md:size-3" />
        <span className="bg-card-shell absolute top-1/2 -right-0.75 size-1.5 -translate-y-1/2 rounded-full md:-right-1.5 md:size-3" />
      </div>
    </div>
  );
}
