import Image from "next/image";

import {Hero , Services} from "@/components/index";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <Services/>
    </main>
  );
}
