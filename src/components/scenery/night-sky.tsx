import HillRange from "./hill-range";
import StarField from "./star-field";

export default function NightSky() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <StarField className="text-star absolute top-0 left-1/2 w-full min-w-360 -translate-x-1/2 md:top-0.75" />
      <HillRange />
    </div>
  );
}
