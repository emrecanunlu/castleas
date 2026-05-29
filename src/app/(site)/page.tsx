import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";

const HomePageContent = dynamic(
  () =>
    import("@/components/home-page-content").then((mod) => mod.HomePageContent),
  { loading: () => null },
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomePageContent />
    </>
  );
}
