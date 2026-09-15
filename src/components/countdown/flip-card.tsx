type FlipCardProps = {
  value: number;
};

export default function FlipCard({ value }: FlipCardProps) {
  const digits = String(value).padStart(2, "0");

  return (
    <div className="bg-card-shell h-17.75 rounded-lg md:h-37.5">
      <div className="relative h-16.5 md:h-35">
        <div className="bg-card-face relative h-1/2 overflow-clip rounded-t-sm md:rounded-t-lg">
          <span className="text-digit v-tracked-digit md:text-digit-md text-accent absolute inset-x-0 bottom-0 translate-y-1/2 text-center">
            {digits}
          </span>
        </div>
        <div className="bg-card-shade relative h-1/2 overflow-clip rounded-b-sm md:rounded-b-lg">
          <span className="text-digit v-tracked-digit md:text-digit-md text-accent-shade absolute inset-x-0 top-0 -translate-y-1/2 text-center">
            {digits}
          </span>
        </div>
        <span className="bg-card-fold absolute inset-x-0 top-1/2 h-px" />
        <span className="bg-card-shell absolute top-1/2 -left-0.75 size-1.5 -translate-y-1/2 rounded-full md:-left-1.5 md:size-3" />
        <span className="bg-card-shell absolute top-1/2 -right-0.75 size-1.5 -translate-y-1/2 rounded-full md:-right-1.5 md:size-3" />
      </div>
    </div>
  );
}
