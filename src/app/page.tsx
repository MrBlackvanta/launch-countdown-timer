import { Countdown } from "@/components/countdown";
import { SiteFooter } from "@/components/layout";
import { NightSky } from "@/components/scenery";
import { buildTime } from "@/lib";

export default function Home() {
  return (
    <>
      <NightSky />
      <main className="relative mx-auto grid w-full max-w-90 flex-1 content-center gap-13.5 px-4 pb-29.5 md:max-w-184 md:gap-26 md:px-6">
        <h1 className="text-heading v-tracked-heading md:text-heading-md text-center uppercase">
          We’re launching soon
        </h1>
        <Countdown renderedAt={buildTime} />
      </main>
      <SiteFooter />
    </>
  );
}
