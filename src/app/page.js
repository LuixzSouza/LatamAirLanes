import { FiltersSection } from "@/components/filters";
import { HeaderSection } from "@/components/header";
import { HomeSection } from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderSection/>
      <HomeSection/>
      <FiltersSection/>
    </>
  );
}
