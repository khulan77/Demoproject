import Image from "next/image";
import Hero from "./components/Hero";
import Three from "./about/components/Three";
export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Three />
      </main>
    </div>
  );
}
