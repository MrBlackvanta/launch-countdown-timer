import { SiteFooter } from "@/components/layout";
import { NightSky } from "@/components/scenery";

export default function Home() {
  return (
    <>
      <NightSky />
      <main className="relative mx-auto grid w-full max-w-90 flex-1 content-center justify-items-center gap-13 px-4 pb-28 md:max-w-184 md:gap-26 md:px-6">
        <h1 className="text-heading v-tracked-heading md:text-heading-md text-center uppercase">
          We’re launching soon
        </h1>
      </main>
      <SiteFooter />
    </>
  );
}
